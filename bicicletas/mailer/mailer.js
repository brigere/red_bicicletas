const nodemailer = require('nodemailer');

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth:{
        user:"lori.oconner@ethereal.email",
        pass:"VG2kV22BUr8HvUReAN"
    }
}

module.exports = nodemailer.createTransport(mailConfig);