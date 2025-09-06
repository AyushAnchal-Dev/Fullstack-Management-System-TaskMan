import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import Spinner from './ui/Spinner';

export default function Protected({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}