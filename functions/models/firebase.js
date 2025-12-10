import admin from 'firebase-admin';

let app;

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

  app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  app = admin.app();
}

export const auth = admin.auth();
export const db = admin.firestore();
export default app;

export const firebase_collections = {
  CONTACT: 'contact',
  PAGE: 'page',
};
