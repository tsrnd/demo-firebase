import * as express from 'express';
import * as web from './web';
import * as api from './api';

const app = express();
app.use('/admin/api', api);
app.use('/admin', web);
web.set('baseUrl', '/admin');

export = app;
