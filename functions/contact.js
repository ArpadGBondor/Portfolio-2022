require('dotenv').config();
const mongoose = require('mongoose');
const { get: getContact } = require('./models/contact');

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
        const data = await getContact(type);
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
