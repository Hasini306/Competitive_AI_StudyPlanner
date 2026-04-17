import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const cardBase = {
  width: '320px',
  padding: '40px 30px',
  textAlign: 'center',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  cursor: 'pointer',
  minHeight: '230px',
  position: 'relative',
  zIndex: 2,
  pointerEvents: 'auto'
};

export default function Landing() {
  const { user } = useContext(AuthContext);

  if (user) {
    if (user.role === 'mentor') return <Navigate to="/mentor-dashboard" replace />;
    if (user.role === 'student') return <Navigate to="/student-dashboard" replace />;
  }

  const hoverIn = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(99,102,241,0.2)';
    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem',
        padding: '20px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 className="text-gradient animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '10px' }}>
          Study Planner
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
          Select your role to continue
        </p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/student/login"
          className="glass-panel animate-fade-in"
          style={{ ...cardBase, textDecoration: 'none', color: 'inherit' }}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          <div style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>👨‍🎓</div>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', margin: 0 }}>Student</h2>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Plan your studies and track progress</p>
        </Link>

        <Link
          to="/mentor/login"
          className="glass-panel animate-fade-in"
          style={{ ...cardBase, textDecoration: 'none', color: 'inherit', animationDelay: '0.1s' }}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          <div style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}>👨‍🏫</div>
          <h2 style={{ color: 'var(--secondary-color)', fontSize: '1.8rem', margin: 0 }}>Mentor</h2>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Monitor students and provide guidance</p>
        </Link>
      </div>
    </div>
  );
}
