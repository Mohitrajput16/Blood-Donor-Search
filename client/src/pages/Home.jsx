import { useEffect, useState } from 'react';
import api from '../api/axios';
import DonorCard from '../components/DonorCard.jsx';

const BLOOD_GROUPS = ['','A+','A-','B+','B-','O+','O-','AB+','AB-'];
const GENDERS = ['','Male','Female','Other'];

export default function Home() {
  const [filters, setFilters] = useState({ gender: '', city: '', bloodGroup: '' });
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDonors = async () => {
    setLoading(true);
    try {
      const params = {};
      if (filters.gender) params.gender = filters.gender;
      if (filters.city) params.city = filters.city.trim();
      if (filters.bloodGroup) params.bloodGroup = filters.bloodGroup;
      const res = await api.get('/donors', { params });
      setDonors(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch donors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDonors(); }, []);

  const onChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div>
      <h3>Find Donors</h3>
      <div className="filters">
        <select name="gender" value={filters.gender} onChange={onChange}>
          {GENDERS.map((g, i) => <option key={i} value={g}>{g || 'Any Gender'}</option>)}
        </select>
        <input name="city" placeholder="City" value={filters.city} onChange={onChange} />
        <select name="bloodGroup" value={filters.bloodGroup} onChange={onChange}>
          {BLOOD_GROUPS.map((b, i) => <option key={i} value={b}>{b || 'Any Blood Group'}</option>)}
        </select>
        <button className="primary" onClick={fetchDonors} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        {donors.length === 0 ? <div>No donors found.</div> : donors.map(d => <DonorCard key={d._id} donor={d} />)}
      </div>
    </div>
  );
}
