import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

export default function Filters({ value, onChange }: { value: any; onChange: (v: any) => void }) {
  return (
    <div className="card p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <Input placeholder="Search title…" value={value.q} onChange={(e) => onChange({ ...value, q: e.target.value })} />
        <Select value={value.priority} onChange={(e) => onChange({ ...value, priority: e.target.value || undefined })}>
          <option value="">All priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <Select value={value.completed} onChange={(e) => onChange({ ...value, completed: e.target.value || undefined })}>
          <option value="">All status</option>
          <option value="true">Completed</option>
          <option value="false">Open</option>
        </Select>
        <Select value={value.sort} onChange={(e) => onChange({ ...value, sort: e.target.value })}>
          <option value="-dueDate">Due date ↓</option>
          <option value="dueDate">Due date ↑</option>
          <option value="-createdAt">Created ↓</option>
          <option value="createdAt">Created ↑</option>
          <option value="priority">Priority A→Z</option>
        </Select>
      </div>
    </div>
  );
}