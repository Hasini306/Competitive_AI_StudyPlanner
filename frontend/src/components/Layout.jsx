import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, BookOpen, Layers, Target, BarChart2, Users, AlertCircle, User, Bell, Check, MessageSquare } from 'lucide-react';
import axios from 'axios';

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();



  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinkClass = ({ isActive }) => `btn btn-outline ${isActive ? 'btn-primary' : ''}`;

  return (
    <div className="app-layout" style={{ position: 'relative' }}>
       
      {/* STANDARD SIDEBAR */}
      <div className="sidebar glass-panel" style={{ borderRadius: '0 16px 16px 0', borderLeft: 'none' }}>
        <h2 className="text-gradient" style={{ marginBottom: '40px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target /> StudyGenius
        </h2>
        
        <div style={{ paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid var(--panel-border)' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Logged in as</div>
          <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{user?.name || 'Unknown'}</div>
          <div style={{ color: 'var(--primary-color)', fontSize: '0.8rem' }}>{user?.role ? user.role.toUpperCase() : 'USER'}</div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          {user?.role === 'student' && (
            <>
              <NavLink end to="/student-dashboard" className={navLinkClass} style={{ justifyContent: 'flex-start' }}><BookOpen size={18}/> Dashboard Overview</NavLink>
              <NavLink to="/student-dashboard/tasks" className={navLinkClass} style={{ justifyContent: 'flex-start' }}><Layers size={18}/> My Tasks</NavLink>
              <NavLink to="/student-dashboard/materials" className={navLinkClass} style={{ justifyContent: 'flex-start' }}><AlertCircle size={18}/> Materials</NavLink>
              <NavLink to="/student-dashboard/progress" className={navLinkClass} style={{ justifyContent: 'flex-start' }}><BarChart2 size={18}/> Progress Analytics</NavLink>
            </>
          )}

          {user?.role === 'mentor' && (
            <>
              <NavLink end to="/mentor-dashboard" className={navLinkClass} style={{ justifyContent: 'flex-start' }}><Users size={18}/> My Students</NavLink>
            </>
          )}

          <div style={{ marginTop: 'auto' }}></div>
          <NavLink to="/profile" className={navLinkClass} style={{ justifyContent: 'flex-start' }}><User size={18}/> Edit Profile</NavLink>
        </nav>

        <button onClick={handleLogout} className="btn" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger-color)', width: '100%' }}>
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="main-content">
        {children}
      </div>
    </div>
  );
}
