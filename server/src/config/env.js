export const isProd = process.env.NODE_ENV === 'production';
export const clientUrl = process.env.CLIENT_URL || 'https://fullstack-management-system-task-ma-one.vercel.app';
export const cookieSecure = String(process.env.COOKIE_SECURE) === 'true';
