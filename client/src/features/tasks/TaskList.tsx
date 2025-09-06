import { useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './TaskForm';
import TaskCard from '../../components/TaskCard';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import Filters from './filters';

export default function TaskList() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState<any>(null);
  const [query, setQuery] = useState({ page: 1, limit: 8, sort: '-dueDate', q: '', priority: '', completed: '' });

  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks', query],
    queryFn: () => fetchTasks(query),
    keepPreviousData: true
  });

  const createMut = useMutation({
    mutationFn: createTask,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tasks'] })
  });
  const updateMut = useMutation({
    mutationFn: ({ id, body }: any) => updateTask(id, body),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tasks'] })
  });
  const deleteMut = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tasks'] })
  });

  function onSave(body: any) {
    if (edit) updateMut.mutate({ id: edit._id, body });
    else createMut.mutate(body);
    setOpen(false); setEdit(null);
  }

  const items = data?.items || [];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Tasks</h2>
        <Button onClick={() => setOpen(true)}>+ New Task</Button>
      </div>

      <Filters value={query} onChange={setQuery} />

      {isLoading && <p>Loading…</p>}
      {error && <p className="text-red-400">{String((error as Error).message)}</p>}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((t) => (
          <TaskCard
            key={t._id}
            task={t as any}
            onEdit={(task) => { setEdit(task); setOpen(true); }}
            onDelete={(id) => deleteMut.mutate(id)}
            onToggle={(id, completed) => updateMut.mutate({ id, body: { completed } })}
          />
        ))}
      </div>

      {/* Pagination */}
      {data && data.pages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button disabled={query.page <= 1} onClick={() => setQuery({ ...query, page: query.page - 1 })} className="btn bg-neutral-800">Prev</button>
          <span className="text-sm text-neutral-400">Page {data.page} of {data.pages}</span>
          <button disabled={data.page >= data.pages} onClick={() => setQuery({ ...query, page: query.page + 1 })} className="btn bg-neutral-800">Next</button>
        </div>
      )}

      <Modal open={open} onClose={() => { setOpen(false); setEdit(null); }}>
        <h3 className="mb-4 text-xl font-bold">{edit ? 'Edit Task' : 'New Task'}</h3>
        <TaskForm onSubmit={onSave} initial={edit || undefined} />
      </Modal>
    </div>
  );
}