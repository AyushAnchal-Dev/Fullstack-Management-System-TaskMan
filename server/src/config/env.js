export const isProd = process.env.NODE_ENV === 'production';
export const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
export const cookieSecure = String(process.env.COOKIE_SECURE) === 'true';
