import type { Task } from '../types';
import { format } from 'date-fns';

export default function TaskCard({ task, onToggle, onEdit, onDelete }: {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}) {
  const due = task.dueDate ? format(new Date(task.dueDate), 'PP') : '—';
  return (
    <div className="card p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <input type="checkbox" checked={task.completed} onChange={(e) => onToggle(task._id, e.target.checked)} className="mt-1" />
          <div>
            <h3 className={`font-semibold ${task.completed ? 'line-through text-neutral-500' : ''}`}>{task.title}</h3>
            <p className="text-sm text-neutral-400">{task.description}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <span className="badge">Priority: {task.priority}</span>
              <span className="badge">Due: {due}</span>
              {task.category && <span className="badge">{task.category}</span>}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onEdit(task)} className="btn bg-neutral-800 hover:bg-neutral-700">Edit</button>
          <button onClick={() => onDelete(task._id)} className="btn bg-red-500/80 hover:bg-red-500">Delete</button>
        </div>
      </div>
    </div>
  );
}