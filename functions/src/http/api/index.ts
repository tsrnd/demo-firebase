import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as routes from './routes';

const app = express();
app.use((req, res, next) => {
  console.info(`req.path=${req.path}`);
  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

export const api = functions.https.onRequest(app);
