const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { email, firstname, lastname, telephone, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: "smtp.elasticemail.com", // Your SMTP server
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "praveenram116@gmail.com", // Your SMTP email address
            pass: "9BFBE65C36A8B0315B8ADB066D8EF622B207", // Your SMTP password
        },
    });

    let mailOptions = {
        from: 'praveenraam004@gmail.com', // Authorized email address
        to: "praveenram116@gmail.com",
        subject: "New client Contact",
        html: `Name: ${firstname} ${lastname} <br/> Phone: ${telephone} <br/> Message: ${message} <br/> Email: ${email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send("Error sending email");
        }
        res.send("Email sent successfully!");
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
