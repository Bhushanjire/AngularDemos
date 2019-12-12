const nodemailer = require('nodemailer');

export default class Helper {
    constructor() {

    }

    static sendEmail(to: string, subject: string, content: string, callback: (error: any, result: any) => void) {
        const mailOptions = {
            from: 'bhushanjire@gmail.com',
            to: to,
            subject: subject,
            html: content
        };

        const smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: '',
                pass: ''
            }
        });

        smtpTransport.sendMail(mailOptions, function (error: any, emailResponce: any) {
            error ? callback(error, null) : callback(null, 'Mail Sent Successfully');
        });
    }
}
