import { useState, useRef, useEffect, useContext } from 'react';
import { Bell } from 'lucide-react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function NotificationBell() {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const dropdownRef = useRef(null);

  const fetchNotifications = async () => {
    if (!user || user.role !== 'student' || !user.token) return;
    try {
      const { data } = await axios.get('http://localhost:5000/api/mentor/my-messages', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setNotifications(data);
    } catch (error) {
      console.error('Failed to fetch notifications', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [user]);

  const unreadCount = notifications.filter(n => !n.read).length;
  const displayCount = unreadCount > 9 ? '9+' : unreadCount;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNotificationClick = async (notif) => {
    if (!notif.read && user?.token) {
      try {
        await axios.put(`http://localhost:5000/api/mentor/my-messages/${notif._id}/read`, {}, {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setNotifications(prev => prev.filter(item => item._id !== notif._id));
      } catch (err) {
        console.error('Failed to mark read', err);
      }
    }
  };

  const markAllAsRead = async () => {
    const unread = notifications.filter(n => !n.read);
    if(unread.length === 0) return;
    try {
      await Promise.all(unread.map(n => 
        axios.put(`http://localhost:5000/api/mentor/my-messages/${n._id}/read`, {}, {
          headers: { Authorization: `Bearer ${user.token}` }
        })
      ));
      fetchNotifications();
    } catch (err) {
      console.error('Failed to mark all as read', err);
    }
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Do not structurally render the bell dropdown loop if not student (avoid random calls)
  if (!user || user.role !== 'student') return null;

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 0 15px rgba(138, 43, 226, 0.15)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(138, 43, 226, 0.4)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.15)';
        }}
      >
        <Bell size={24} style={{ color: '#fff', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))' }} />
        
        {unreadCount > 0 && (
          <div style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            background: 'var(--danger-color, #ff4757)',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            borderRadius: '12px',
            padding: '2px 6px',
            minWidth: '20px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            animation: 'bounce 2s infinite',
            border: '2px solid var(--bg-color, #0a0e17)'
          }}>
            {displayCount}
          </div>
        )}
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '120%',
          right: '0',
          width: '360px',
          background: 'rgba(10, 14, 23, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(138, 43, 226, 0.1)',
          zIndex: 1000,
          overflow: 'hidden',
          animation: 'fadeInDown 0.3s ease-out'
        }}>
          <div style={{ 
            padding: '16px 20px', 
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>Notifications</h3>
            {unreadCount > 0 && (
              <span 
                onClick={markAllAsRead}
                style={{ fontSize: '0.8rem', color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Mark all as read
              </span>
            )}
          </div>
          
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {notifications.length === 0 ? (
              <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No notifications
              </div>
            ) : (
              notifications.map(notif => (
                <div key={notif._id} 
                  onClick={() => handleNotificationClick(notif)}
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid rgba(255,255,255,0.03)',
                    background: !notif.read ? 'rgba(138, 43, 226, 0.08)' : 'transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    transition: 'background 0.2s',
                    cursor: !notif.read ? 'pointer' : 'default'
                  }}
                  onMouseEnter={e => { if(!notif.read) e.currentTarget.style.background = 'rgba(138, 43, 226, 0.15)' }}
                  onMouseLeave={e => { if(!notif.read) e.currentTarget.style.background = 'rgba(138, 43, 226, 0.08)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                      color: notif.type.toLowerCase().includes('reminder') ? 'var(--warning-color, #f1c40f)' : 'var(--primary-color)',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      {!notif.read && (
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)', display: 'inline-block' }} />
                      )}
                      {notif.type}
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {formatTime(notif.createdAt)}
                    </span>
                  </div>
                  
                  <p style={{ margin: 0, fontSize: '0.95rem', color: !notif.read ? '#fff' : 'var(--text-muted)', lineHeight: '1.4' }}>
                    {notif.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
