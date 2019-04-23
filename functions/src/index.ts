import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as path from 'path';

admin.initializeApp(functions.config().firebase);

export * from './http/api';
export * from './http/admin';
export * from './http/cmd';

const app = require(path.join(__dirname, 'server')).app;
export const web = functions.https.onRequest(app);
