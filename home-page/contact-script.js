const form = document.getElementById("form");


var firstName = form.elements["first"].value;
var lastName = form.elements["second"].value;
var email = form.elements["email"].value;
var telly = form.elements["telly"].value;
var file = form.elements["file"].value;
var message = form.elements["message-box"].value;


const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const transporter = nodemailer.createTransport(mailgun({
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN,
    }
}));

const mailOptions = {
    from: email, //user's mail address, you can make it dynamic from contact form
    to: "mertus.malik@gmail.com", //the mail address you authorized in mailgun (receipient mail address)
    subject: "", //maybe from contact for
    text: form, //maybe from contact for
};

transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Message Sent!");
        alert("Message sent succesfully.")
    }
});
