import Task from '../models/Task.js';
import { createTaskSchema, updateTaskSchema } from '../validators/taskValidators.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createTask = asyncHandler(async (req, res) => {
  const { value, error } = createTaskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const task = await Task.create({ ...value, user: req.user._id });
  res.status(201).json(task);
});

export const getTasks = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, sort = '-dueDate', q = '', priority, completed, category } = req.query;
  const filter = { user: req.user._id };
  if (q) filter.title = { $regex: q, $options: 'i' };
  if (priority) filter.priority = priority;
  if (completed !== undefined) filter.completed = completed === 'true';
  if (category) filter.category = category;

  const skip = (Number(page) - 1) * Number(limit);
  const [items, total] = await Promise.all([
    Task.find(filter).sort(String(sort)).skip(skip).limit(Number(limit)),
    Task.countDocuments(filter)
  ]);

  res.json({ items, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
});

export const updateTask = asyncHandler(async (req, res) => {
  const { value, error } = updateTaskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const updated = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    value,
    { new: true }
  );
  if (!updated) return res.status(404).json({ message: 'Task not found' });
  res.json(updated);
});

export const deleteTask = asyncHandler(async (req, res) => {
  const deleted = await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!deleted) return res.status(404).json({ message: 'Task not found' });
  res.json({ message: 'Deleted' });
});