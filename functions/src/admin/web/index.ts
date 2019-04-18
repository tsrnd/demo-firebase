import * as express from 'express';
import * as path from 'path';
// import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
// import * as admin from 'firebase-admin';
import * as checkRole from './middlewares/check_role';
import { FRRequest } from './extends/express';

const app = express();
app.use((req, res, next) => {
  console.info(`[admin web] [middleware] req.path=${req.path}`);
  return next();
});
app.use(express.static(path.join(__dirname, '../html'), { index: false }));

// app.use(cors({ origin: false }));
app.use(cookieParser());

app.get('/login', (req, res) => {
  console.info(`[admin web] [get '/login'] req.path=${req.path}`);
  res.sendFile(path.join(__dirname, '../html/login/index.html'));
});

app.use('/', checkRole);

app.get('/', (req: FRRequest, res) => {
  console.info(`user=${req.user}`);
  if (req.user!.admin !== true) {
    console.error('user.admin = false');
    res.status(403).send('Unauthorized');
    return;
  }
  console.info(`[admin web] [get '/'] req.path=${req.path}`);
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

export = app;
