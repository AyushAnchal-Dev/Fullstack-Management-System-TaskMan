import { Router } from 'express';
import { authLimiter } from '../middleware/rateLimit.js';
import { register, login, me, logout } from '../controllers/authController.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
router.post('/register', authLimiter, register);
router.post('/login', authLimiter, login);
router.get('/me', requireAuth, me);
router.post('/logout', requireAuth, logout);
export default router;