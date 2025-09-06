import rateLimit from 'express-rate-limit';


export const authLimiter = rateLimit({
windowMs: 60 * 1000,
max: 20,
standardHeaders: true,
legacyHeaders: false
});