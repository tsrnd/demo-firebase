import * as functions from 'firebase-functions';
import * as express from 'express';
import * as routes from './routes';
import * as path from 'path';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/admin', routes);

export const admin = functions.https.onRequest(app);
