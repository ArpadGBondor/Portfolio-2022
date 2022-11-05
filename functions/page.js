require('dotenv').config();
const mongoose = require('mongoose');
const { get: getPage } = require('./models/page');

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
        const data = await getPage(pageId);
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
