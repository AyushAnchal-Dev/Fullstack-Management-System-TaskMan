import { verifyJwt } from '../utils/generateToken.js';
import User from '../models/User.js';
export async function requireAuth(req, res, next) {
try {
const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');
if (!token) return res.status(401).json({ message: 'Unauthorized' });
const payload = verifyJwt(token);
const user = await User.findById(payload.id).select('_id email');
if (!user) return res.status(401).json({ message: 'Unauthorized' });
req.user = user;
next();
} catch {
return res.status(401).json({ message: 'Unauthorized' });
}
}