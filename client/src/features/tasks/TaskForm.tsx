import { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

export default function TaskForm({ onSubmit, initial }: { onSubmit: (data: any) => void; initial?: any }) {
  const [title, setTitle] = useState(initial?.title || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [priority, setPriority] = useState(initial?.priority || 'medium');
  const [dueDate, setDueDate] = useState(initial?.dueDate ? initial.dueDate.slice(0,10) : '');
  const [category, setCategory] = useState(initial?.category || 'general');

  return (
    <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); onSubmit({ title, description, priority, dueDate, category }); }}>
      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <div className="grid grid-cols-2 gap-3">
        <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <Input placeholder="Category (e.g. work, personal)" value={category} onChange={(e) => setCategory(e.target.value)} />
      <Button type="submit">Save</Button>
    </form>
  );
}