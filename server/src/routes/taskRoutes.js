import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/taskController.js';

const router = Router();
router.use(requireAuth);
router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
export default router;