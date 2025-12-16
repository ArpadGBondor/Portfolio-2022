require('dotenv').config();
const mongoose = require('mongoose');
const { get: getPage } = require('./models/page');
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
 * @queryParameter {string} pageId: "projects" / "introduction" / "skills" / "index"
 * @returns portfolio page content
 */
async function handleGetRequest(event, context, callback) {
  try {
    const { pageId } = event.queryStringParameters;

    const pageSnap = await db
      .collection(firebase_collections.PAGE)
      .doc(pageId)
      .get();

    let data;

    if (pageSnap.exists) {
      data = pageSnap.data();
    } else {
      // if there's no data in Firestore, check old MongoDB database, and save
      // data to Firestore
      data = await getPage(pageId);

      const badgeMap = (badge) => {
        console.log(`>>> ${JSON.stringify(badge)}`);
        return {
          url: badge.url ?? '',
          alt: badge.alt ?? '',
        };
      };

      const paragraphMap = (p) => ({
        type: p.type ?? '',
        sentences: p.sentences,
        text: p.text ?? '',
        width: p.width ?? '',
        height: p.height ?? '',
        maxWidth: p.maxWidth ?? '',
        maxHeight: p.maxHeight ?? '',
        src: p.src ?? '',
        alt: p.alt ?? '',
        style: p.style ?? '',
        href: p.href ?? '',
        badges: (p.badges ?? []).map(badgeMap),
      });

      const contentMap = (content) => ({
        h2: content.h2 ?? '',
        small: content.small ?? '',
        p: content.p.map(paragraphMap),
        read_more: content.read_more ?? '',
        background_img_url: content.background_img_url ?? '',
        img_src: content.img_src ?? '',
      });

      await db
        .collection(firebase_collections.PAGE)
        .doc(pageId)
        .set({
          page: data.page,
          page_type: data.page_type,
          hero: {
            h1: data.hero.h1 ?? '',
            small: data.hero.small ?? '',
            p: data.hero.p.map(paragraphMap),
            img_url: data.hero.img_url,
          },
          content: data.content.map(contentMap),
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
