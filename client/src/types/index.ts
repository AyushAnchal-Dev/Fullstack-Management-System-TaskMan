export type User = { id: string; email: string };
export type Task = {
  _id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  completed: boolean;
  category?: string;
  createdAt: string;
  updatedAt: string;
};