import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

import * as app1 from './api';
import * as app2 from './admin';

exports.api = functions.https.onRequest(app1);
exports.admin = functions.https.onRequest(app2);
