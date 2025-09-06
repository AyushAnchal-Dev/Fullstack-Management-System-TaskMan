import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { signJwt } from '../utils/generateToken.js';
import { registerSchema, loginSchema } from '../validators/authValidators.js';
import { isProd, clientUrl, cookieSecure } from '../config/env.js';


const cookieOpts = {
httpOnly: true,
sameSite: isProd ? 'none' : 'lax',
secure: isProd ? true : cookieSecure,
path: '/'
};


export const register = async (req, res) => {
const { value, error } = registerSchema.validate(req.body);
if (error) return res.status(400).json({ message: error.message });
const existing = await User.findOne({ email: value.email });
if (existing) return res.status(409).json({ message: 'Email already registered' });
const hash = await bcrypt.hash(value.password, 10);
const user = await User.create({ email: value.email, password: hash });
const token = signJwt({ id: user._id });
res
.cookie('token', token, { ...cookieOpts, maxAge: 7 * 24 * 3600 * 1000 })
.status(201)
.json({ user: { id: user._id, email: user.email } });
};


export const login = async (req, res) => {
const { value, error } = loginSchema.validate(req.body);
if (error) return res.status(400).json({ message: error.message });
const user = await User.findOne({ email: value.email }).select('+password');
if (!user) return res.status(401).json({ message: 'Invalid credentials' });
const match = await bcrypt.compare(value.password, user.password);
if (!match) return res.status(401).json({ message: 'Invalid credentials' });
const token = signJwt({ id: user._id });
res
.cookie('token', token, { ...cookieOpts, maxAge: 7 * 24 * 3600 * 1000 })
.json({ user: { id: user._id, email: user.email } });
};


export const me = async (req, res) => {
res.json({ user: { id: req.user._id, email: req.user.email } });
};


export const logout = async (req, res) => {
res.clearCookie('token', { ...cookieOpts, maxAge: 0 }).json({ message: 'Logged out' });
};