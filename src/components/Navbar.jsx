import { NavLink, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/auth.js';
import { getStudentRank } from '../utils/progress.js';

export default function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const rank = user ? getStudentRank() : null;

  const navItems = [
    { label: 'Home', path: '/', show: Boolean(user) },
    { label: 'Progress', path: '/progress', show: Boolean(user) },
    { label: 'Resources', path: '/resources', show: Boolean(user) },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="top-nav">
      <button className="brand-button" type="button" onClick={() => navigate('/')}>
        <span className="brand-mark">C</span>
        <span>Crescendo</span>
      </button>

      <div className="nav-actions">
        {navItems.map((item) => (
          item.show && (
            <NavLink key={item.path} to={item.path} className="nav-link">
              {item.label}
            </NavLink>
          )
        ))}
        <span className="rank-pill">
          <span>{rank?.title}</span>
          <strong>{rank?.done}/{rank?.total}</strong>
        </span>
        <span className="user-pill">{user?.username}</span>
        <button className="btn btn-ghost" type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
