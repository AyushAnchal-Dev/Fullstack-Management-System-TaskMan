import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
//import xss from 'xss';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/error.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import { clientUrl } from './config/env.js';

const app = express();

app.set('trust proxy', 1);
app.use(helmet());
//app.use(xss());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: clientUrl,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS']
  })
);

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;