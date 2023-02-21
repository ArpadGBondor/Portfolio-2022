require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event, context, callback) => {
    const notSupportedMethod = {
        statusCode: 405,
        body: 'ERROR-405: Method Not Allowed.',
    };

    if (event.httpMethod === 'GET') {
        return notSupportedMethod;
    } else if (event.httpMethod === 'POST') {
        return await handlePostRequest(event, context, callback);
    } else if (event.httpMethod === 'PUT') {
        return notSupportedMethod;
    } else if (event.httpMethod === 'DELETE') {
        return notSupportedMethod;
    } else {
        return notSupportedMethod;
    }
};

async function handlePostRequest(event, context, callback) {
    const { name, email, message } = JSON.parse(event.body);
    console.log(event.body);
    if (!name) return { statusCode: 400, body: 'ERROR-400: Please provide a name.' };
    if (!email) return { statusCode: 400, body: 'ERROR-400: Please provide an email address.' };
    if (!message) return { statusCode: 400, body: 'ERROR-400: Please provide a message.' };

    return new Promise((resolve, reject) => {
        // How to set Google for this: https://www.youtube.com/watch?v=JJ44WA_eV8E&ab_channel=Kif-Dev

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL_USER,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                accessToken: process.env.GOOGLE_ACCESS_TOKEN,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: `"Portfolio Web App" <${process.env.EMAIL_USER}>`,
            to: `<${process.env.EMAIL_USER}>`,
            subject: ' - New Message from Portfolio - ',
            text: `From: ${name}
E-mail: ${email}

Message:
${message}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error(error);
                resolve({
                    statusCode: 400,
                    body: `ERROR-400: Couldn't deliver message.`,
                });
            } else {
                resolve({
                    statusCode: 201,
                    body: 'Message sent.',
                });
            }
        });
    });
    return {
        statusCode: 500,
        body: 'ERROR-500: Server Error.',
    };
}
