import api from '../../lib/axios';
import type { Task } from '../../types';

export type Paginated = { items: Task[]; total: number; page: number; pages: number };

export async function fetchTasks(params: Record<string, any> = {}): Promise<Paginated> {
  const { data } = await api.get('/api/tasks', { params });
  return data;
}

export async function createTask(body: Partial<Task>): Promise<Task> {
  const { data } = await api.post('/api/tasks', body);
  return data;
}

export async function updateTask(id: string, body: Partial<Task>): Promise<Task> {
  const { data } = await api.put(`/api/tasks/${id}`, body);
  return data;
}

export async function deleteTask(id: string): Promise<void> {
  await api.delete(`/api/tasks/${id}`);
}