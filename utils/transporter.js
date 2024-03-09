const nodemailer = require("nodemailer");

// connect smtp
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587, // `true` for port 465, `false` for all other ports
    auth: {
        //TODO: replave `user` and `pass` values
        user: 'syvartechcontactsender@gmail.com', 
        pass: 'zsumkrqpbrjlknfs'
    },
});

module.exports = transporter;   

