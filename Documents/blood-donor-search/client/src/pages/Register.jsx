import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const BLOOD_GROUPS = ['A+','A-','B+','B-','O+','O-','AB+','AB-'];

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: 'Male',
    bloodGroup: 'O+',
    city: '',
    aadharNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return alert('Passwords do not match');

    setLoading(true);
    try {
      const payload = { ...form };
      delete payload.confirmPassword;
      const res = await api.post('/donors/register', payload);
      if (res.status === 201) {
        alert('Registered successfully! Please login.');
        nav('/login');
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Donor Registration</h3>
      <form className="form" onSubmit={submit}>
        <div className="row">
          <input name="name" placeholder="Full Name" value={form.name} onChange={onChange} required />
          <input name="email" placeholder="Email" type="email" value={form.email} onChange={onChange} required />
        </div>
        <div className="row">
          <input name="mobile" placeholder="Mobile (10 digits)" value={form.mobile} onChange={onChange} required />
          <input name="city" placeholder="City" value={form.city} onChange={onChange} required />
        </div>
        <div className="row">
          <select name="gender" value={form.gender} onChange={onChange}>
            <option>Male</option><option>Female</option><option>Other</option>
          </select>
          <select name="bloodGroup" value={form.bloodGroup} onChange={onChange}>
            {BLOOD_GROUPS.map(bg => <option key={bg}>{bg}</option>)}
          </select>
        </div>
        <div className="row">
          <input name="aadharNumber" placeholder="Aadhaar (12 digits)" value={form.aadharNumber} onChange={onChange} required />
          <input name="password" placeholder="Password" type="password" value={form.password} onChange={onChange} required />
        </div>
        <input name="confirmPassword" placeholder="Confirm Password" type="password" value={form.confirmPassword} onChange={onChange} required />
        <button className="primary" disabled={loading}>{loading ? 'Submitting...' : 'Register'}</button>
      </form>
    </div>
  );
}
