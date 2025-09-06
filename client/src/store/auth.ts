import { create } from 'zustand';
import api from '../lib/axios';
import type { User } from '../types';

type State = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  me: () => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuth = create<State>((set) => ({
  user: null,
  loading: true,
  async me() {
    try {
      const { data } = await api.get('/api/auth/me');
      set({ user: data.user, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },
  async login(email, password) {
    await api.post('/api/auth/login', { email, password });
    await (useAuth.getState().me());
  },
  async register(email, password) {
    await api.post('/api/auth/register', { email, password });
    await (useAuth.getState().me());
  },
  async logout() {
    await api.post('/api/auth/logout');
    set({ user: null });
  }
}));