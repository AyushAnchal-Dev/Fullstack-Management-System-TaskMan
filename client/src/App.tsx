import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Protected from './components/Protected';
import { useAuth } from './store/auth.ts';

function BootstrapAuth() {
  const { me } = useAuth();
  useEffect(() => { me(); }, []);
  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BootstrapAuth />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}