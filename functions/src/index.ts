import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

import * as app1 from './api';
import * as app2 from './admin';

exports.api = functions.https.onRequest(app1);
exports.admin = functions.https.onRequest(app2);

exports.seedAdmin = functions.https.onRequest((req, res) => {
  const emails = [
    'zendobk@gmail.com',
    'dao.nguyen@asiantech.vn'
  ]
  let admins: string[] = [];
  const promises = emails.map(email => admin.auth().getUserByEmail(email)
    .then((user: admin.auth.UserRecord) => {
      // if (!user.emailVerified) {
      //   return;
      // }
      admins.push(email);
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
        accessLevel: 10
      });
    })
    .catch((error) => {
      console.error(error);
    })
  );
  Promise.all(promises).then(() => {
    res.status(200).send(`admin emails: ${admins.join(', ')}`);
  }).catch((error) => {
    console.error(error);
    res.status(200).send(`admin emails: ${admins.join(', ')}`);
  });
});
