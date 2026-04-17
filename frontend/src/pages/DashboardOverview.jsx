import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import NotificationBell from '../components/NotificationBell';

export default function DashboardOverview() {
  const { user } = useContext(AuthContext);
  const [plans, setPlans] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    examType: '',
    subjects: '',
    startDate: '',
    endDate: '',
    topics: ''
  });

  const fetchPlans = async () => {
    const { data } = await axios.get('http://localhost:5000/api/planner', {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setPlans(data);
  };

  useEffect(() => {
    fetchPlans();
  }, [user.token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/planner/generate', formData, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setShowModal(false);
    fetchPlans();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ margin: 0, paddingBottom: '8px' }}>Welcome, {user.name}</h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Here is your study overview.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative' }}>
          <NotificationBell />
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Generate New Plan</button>
        </div>
      </div>

      <div>
        <h3>Your Study Plans</h3>
        {plans.length === 0 ? (
          <div className="glass-card" style={{ marginTop: '16px', textAlign: 'center', padding: '40px' }}>
            <p>No study plans found. Generate one to get started!</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '16px' }}>
            {plans.map(plan => (
              <div key={plan._id} className="glass-card">
                <h4 className="text-gradient" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{plan.examType} - {plan.subject}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Duration: {plan.totalDays} Days</p>
                <div style={{ marginTop: '16px', background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '8px', fontSize: '0.85rem' }}>
                  Topics: {plan.topics ? plan.topics.join(', ') : ''}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div className="glass-panel animate-fade-in" style={{ width: '500px', padding: '30px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ marginBottom: '20px' }}>Generate Study Plan</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Exam Type (e.g. JEE, UPSC)</label>
                <input required type="text" className="form-input" value={formData.examType} onChange={e => setFormData({...formData, examType: e.target.value})}/>
              </div>
              <div className="form-group">
                <label className="form-label">Subjects (comma separated)</label>
                <input required type="text" className="form-input" value={formData.subjects} onChange={e => setFormData({...formData, subjects: e.target.value})}/>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Start Date</label>
                  <input required type="date" className="form-input" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})}/>
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">End Date</label>
                  <input required type="date" className="form-input" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})}/>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Topics (comma separated list)</label>
                <textarea required className="form-input" rows="4" value={formData.topics} onChange={e => setFormData({...formData, topics: e.target.value})}></textarea>
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '30px' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Generate Plan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
