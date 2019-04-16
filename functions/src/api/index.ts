import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as routes from './routes';

const app = express();
app.use((req, res, next) => {
  console.log(`req.path=${req.path}`);
  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

export = app;
