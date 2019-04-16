import * as express from 'express';
import * as path from 'path';

const app = express();
app.use((req, res, next) => {
  console.log(`[admin web] [middleware] req.path=${req.path}`);
  return next();
});
app.use(express.static(path.join(__dirname, '../html')));
app.get('/', (req, res) => {
  console.log(`[admin web] [get '/'] req.path=${req.path}`);
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

export = app;
