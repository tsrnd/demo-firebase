import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
app.use((req, res, next) => {
  console.info(`[admin api] [middleware] req.path=${req.path}`);
  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  console.info(`[admin api] [get '/'] req.path=${req.path}`);
  res.status(200).send('Admin API');
});

export = app;
