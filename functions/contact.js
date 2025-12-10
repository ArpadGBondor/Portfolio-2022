require('dotenv').config();
const mongoose = require('mongoose');
const { get: getContact } = require('./models/contact');
const { db, firebase_collections } = require('./models/firebase');

// MongoDB connection
mongoose.connect(process.env.DB_CONNECT, {}, (error) => {
  if (error) console.error(`Database error: ${error}`);
});
exports.handler = async (event, context, callback) => {
  const notSupportedMethod = {
    statusCode: 405,
    body: 'ERROR-405: Method Not Allowed.',
  };

  if (event.httpMethod === 'GET') {
    return await handleGetRequest(event, context, callback);
  } else if (event.httpMethod === 'POST') {
    return notSupportedMethod;
  } else if (event.httpMethod === 'PUT') {
    return notSupportedMethod;
  } else if (event.httpMethod === 'DELETE') {
    return notSupportedMethod;
  } else {
    return notSupportedMethod;
  }
};
/**
 * Query the database of my previous portfolio project
 * @queryParameter {string} type: "contact"/"social"
 * @returns "social" or "contact" information
 */
async function handleGetRequest(event, context, callback) {
  try {
    const { type } = event.queryStringParameters;

    const contactSnap = await db
      .collection(firebase_collections.CONTACT)
      .where('type', '==', type)
      .get();

    let data;

    if (contactSnap.empty) {
      // if there's no data in Firestore, check old MongoDB database, and save
      // data to Firestore
      data = await getContact(type);

      for (const doc of data) {
        await db.collection(firebase_collections.CONTACT).doc(doc.name).set({
          type: doc.type,
          icon: doc.icon,
          name: doc.name,
          address: doc.address,
          link: doc.link,
        });
      }
    } else {
      data = contactSnap.docs.map((docSnap) => {
        return docSnap.data();
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'ERROR-500: Server Error.',
    };
  }
}
