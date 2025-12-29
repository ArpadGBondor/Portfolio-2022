const admin = require('firebase-admin');

let app;

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

  app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  app = admin.app();
}

const auth = admin.auth();
const db = admin.firestore();

const firebase_collections = {
  CONTACT: 'contact',
  PAGE: 'page',
};

module.exports = {
  app,
  auth,
  db,
  firebase_collections,
};
