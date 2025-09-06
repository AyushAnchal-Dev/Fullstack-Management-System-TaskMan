import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="/" className="text-xl font-extrabold tracking-tight">
          <span className="text-brand">Task</span>Man
        </Link>
        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-brand font-semibold' : 'text-neutral-300'}>
                Dashboard
              </NavLink>
              <button onClick={async () => { await logout(); navigate('/'); }} className="btn bg-neutral-800 hover:bg-neutral-700">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn bg-neutral-800 hover:bg-neutral-700">Login</NavLink>
              <NavLink to="/register" className="btn btn-primary">Register</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}