import * as express from 'express';
import * as admin from 'firebase-admin';

export interface FRUser extends admin.auth.DecodedIdToken {
}

export interface FRRequest extends express.Request {
  user?: FRUser
}
