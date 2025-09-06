import jwt from 'jsonwebtoken';


export function signJwt(payload, options = {}) {
return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d', ...options });
}


export function verifyJwt(token) {
return jwt.verify(token, process.env.JWT_SECRET);
}