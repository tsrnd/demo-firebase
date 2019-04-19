import { Response, NextFunction } from 'express';
import { FRRequest } from '../extends/express';

import * as admin from 'firebase-admin';

const checkRole = async (req: FRRequest, res: Response, next: NextFunction) => {
  console.info('Check if request is authorized with Firebase ID token');
  const loginUrl = req.app.get('baseUrl') + '/login';

  console.info(`cookies: ${JSON.stringify(req.cookies)}`);

  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
    !(req.cookies && req.cookies.__session)) {
    console.error(`[1] redirect to ${loginUrl}`);
    res.redirect(loginUrl);
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if (req.cookies) {
    idToken = req.cookies.__session;
  } else {
    console.error(`[2] redirect to ${loginUrl}`);
    res.redirect(loginUrl);
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    console.info('ID Token correctly decoded', decodedIdToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    console.error('Error while verifying Firebase ID token: ', error);
    res.status(403).send('Unauthorized');
    return;
  }
};

export = checkRole;
