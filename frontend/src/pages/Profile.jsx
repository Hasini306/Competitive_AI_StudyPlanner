import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { User, Mail, Lock, Camera, Briefcase, Calendar, Target, Clock, Activity, Hash, Phone, MapPin, Globe } from 'lucide-react';

export default function Profile() {
  const { user } = useContext(AuthContext);
  
  const [profileData, setProfileData] = useState(null);
  const [latestMessage, setLatestMessage] = useState(null);
  const [mentorData, setMentorData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profileImage: '',
    targetExam: '',
    targetDate: '',
    targetScore: '',
    focusSubject: '',
    preferredStudyTime: '',
    dailyTargetHours: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    city: '',
    state: '',
    country: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
         const { data } = await axios.get('http://localhost:5000/api/user/profile', {
            headers: { Authorization: `Bearer ${user.token}` }
         });
         
         setProfileData(data.user);
         setMentorData(data.mentor);
         setLatestMessage(data.latestMessage);
         
         setFormData({
            name: data.user.name || '',
            email: data.user.email || '',
            password: '',
            profileImage: data.user.profileImage || '',
            targetExam: data.user.targetExam || '',
            targetDate: data.user.targetDate ? data.user.targetDate.split('T')[0] : '',
            targetScore: data.user.targetScore || '',
            focusSubject: data.user.focusSubject || '',
            preferredStudyTime: data.user.preferredStudyTime || '',
            dailyTargetHours: data.user.dailyTargetHours || '',
            phoneNumber: data.user.phoneNumber || '',
            alternatePhoneNumber: data.user.alternatePhoneNumber || '',
            city: data.user.city || '',
            state: data.user.state || '',
            country: data.user.country || ''
         });
      } catch (err) {
         console.error(err);
      } finally {
         setLoading(false);
      }
    };
    
    if (user?.token) fetchProfile();
  }, [user]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      await axios.put('http://localhost:5000/api/user/profile', formData, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setSuccess('Profile updated successfully!');
      setFormData(prev => ({ ...prev, password: '' }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile.');
    }
  };

  if (loading) return <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>Loading Profile...</div>;

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1100px', margin: '0 auto', gap: '30px', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--panel-border)' }}>
         <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>My Account Details</h2>
         <p style={{ color: 'var(--text-muted)', margin: 0 }}>View and manage your personal information, contact details, and study preferences.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px', alignItems: 'start' }}>
         
         {/* LEFT COLUMN: STATIC PANELS */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Identity Card */}
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
               <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 16px auto' }}>
                  {formData.profileImage ? (
                     <img src={formData.profileImage} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary-color)' }} />
                  ) : (
                     <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-color)' }}>
                        <User size={40} />
                     </div>
                  )}
               </div>
               <h3 style={{ margin: '0 0 4px 0', fontSize: '1.4rem' }}>{profileData?.name}</h3>
               <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>{profileData?.email}</div>
               
               <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--success-color)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {profileData?.role}
               </span>
            </div>

            {/* Mentor Communications Preview Panel */}
            {profileData?.role === 'student' && (
               <div className="glass-card" style={{ padding: '24px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--primary-color)' }}>
                     <Briefcase size={20} /> Mentor Status
                  </h4>
                  {mentorData ? (
                     <>
                        <div style={{ marginBottom: '16px', fontSize: '1rem' }}>
                           <span style={{ color: 'var(--text-muted)' }}>Assigned to:</span> <strong>{mentorData.name}</strong>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                           <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Recent Activity</div>
                           {latestMessage ? (
                              <div>
                                 <div style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontSize: '0.95rem' }}>"{latestMessage.content}"</div>
                                 <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '8px', textAlign: 'right' }}>
                                    {new Date(latestMessage.createdAt).toLocaleString()}
                                 </div>
                              </div>
                           ) : (
                              <div style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>No messages available.</div>
                           )}
                        </div>
                     </>
                  ) : (
                     <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>No mentor currently assigned.</div>
                  )}
               </div>
            )}
         </div>

         {/* RIGHT COLUMN: ACCOUNT FORMS */}
         <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--panel-border)', paddingBottom: '16px' }}>Account Settings</h3>
            
            {success && <div style={{ color: 'var(--success-color)', marginBottom: '24px', background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--success-color)' }}>{success}</div>}
            {error && <div style={{ color: 'var(--danger-color)', marginBottom: '24px', background: 'rgba(239, 68, 68, 0.1)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--danger-color)' }}>{error}</div>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
               
               {/* Basic Personal Details */}
               <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '16px', fontSize: '1.1rem' }}>Basic Personal Details</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                     <div>
                        <label className="form-label">Full Name</label>
                        <div style={{ position: 'relative' }}>
                          <User size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="text" name="name" className="form-input" style={{ paddingLeft: '44px' }} value={formData.name} onChange={handleChange} required />
                        </div>
                     </div>
                     <div>
                        <label className="form-label">Email Address</label>
                        <div style={{ position: 'relative' }}>
                          <Mail size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="email" name="email" className="form-input" style={{ paddingLeft: '44px' }} value={formData.email} onChange={handleChange} required />
                        </div>
                     </div>
                     <div>
                        <label className="form-label">Change Password (optional)</label>
                        <div style={{ position: 'relative' }}>
                          <Lock size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="password" name="password" className="form-input" style={{ paddingLeft: '44px' }} value={formData.password} onChange={handleChange} placeholder="••••••••" />
                        </div>
                     </div>
                     <div>
                        <label className="form-label">Profile Image URL</label>
                        <div style={{ position: 'relative' }}>
                          <Camera size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="text" name="profileImage" className="form-input" style={{ paddingLeft: '44px' }} value={formData.profileImage} onChange={handleChange} placeholder="https://..." />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Default Section Separator */}
               <div style={{ height: '1px', background: 'var(--panel-border)', margin: '10px 0' }}></div>

               {/* Contact Details */}
               <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '16px', fontSize: '1.1rem' }}>Contact Details</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                     <div>
                        <label className="form-label">Phone Number</label>
                        <div style={{ position: 'relative' }}>
                          <Phone size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="text" name="phoneNumber" className="form-input" style={{ paddingLeft: '44px' }} value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                        </div>
                     </div>
                     <div>
                        <label className="form-label">Alternate Phone Number</label>
                        <div style={{ position: 'relative' }}>
                          <Phone size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="text" name="alternatePhoneNumber" className="form-input" style={{ paddingLeft: '44px' }} value={formData.alternatePhoneNumber} onChange={handleChange} placeholder="Alternate Number" />
                        </div>
                     </div>
                     <div>
                        <label className="form-label">City</label>
                        <div style={{ position: 'relative' }}>
                          <MapPin size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="text" name="city" className="form-input" style={{ paddingLeft: '44px' }} value={formData.city} onChange={handleChange} placeholder="City" />
                        </div>
                     </div>
                     <div>
                        <label className="form-label">State</label>
                        <div style={{ position: 'relative' }}>
                          <MapPin size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="text" name="state" className="form-input" style={{ paddingLeft: '44px' }} value={formData.state} onChange={handleChange} placeholder="State" />
                        </div>
                     </div>
                     <div>
                        <label className="form-label">Country</label>
                        <div style={{ position: 'relative' }}>
                          <Globe size={18} style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                          <input type="text" name="country" className="form-input" style={{ paddingLeft: '44px' }} value={formData.country} onChange={handleChange} placeholder="Country" />
                        </div>
                     </div>
                  </div>
               </div>

               <div style={{ marginTop: '20px', borderTop: '1px solid var(--panel-border)', paddingTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '1.1rem' }}>Save Profile Details</button>
               </div>

            </form>
         </div>

      </div>
    </div>
  );
}
