import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
export default function Login({ onLogin }) {
  const [emailOrMobile, setEom] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/donors/login', { emailOrMobile, password });
      localStorage.setItem('token', res.data.token);
      alert('Logged in!');
      if (onLogin) {
        onLogin();
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h3>Login</h3>
      <form className="form" onSubmit={submit}>
        <input 
          placeholder="Email or Mobile" 
          value={emailOrMobile} 
          onChange={(e) => setEom(e.target.value)} 
          required 
        />
        <input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button className="primary" disabled={loading}>
          {loading ? 'Checking...' : 'Login'}
        </button>
      </form>
    </div>
  );
}