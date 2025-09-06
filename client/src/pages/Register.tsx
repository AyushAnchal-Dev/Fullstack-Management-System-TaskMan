import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await register(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally { setLoading(false); }
  }

  return (
    <div className="mx-auto max-w-md py-12">
      <div className="card p-6">
        <h2 className="mb-4 text-2xl font-bold">Create your account</h2>
        <form onSubmit={onSubmit} className="space-y-3">
          <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password (min 8)" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <Button disabled={loading}>{loading ? 'Creating…' : 'Register'}</Button>
        </form>
        <p className="mt-4 text-sm text-neutral-400">Already have an account? <Link to="/login" className="text-brand">Login</Link></p>
      </div>
    </div>
  );
}