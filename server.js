const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/place-order', (req, res) => {
    const { quantity, mobile } = req.body;
    const totalPrice = 30000 * quantity;

    // Set up nodemailer to send email to TextLocal's Email-to-SMS Gateway
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or your preferred service
        auth: {
            user: 'pardesi059@gmail.com', // your email
            pass: 'onlyspamhere' // your email password
        }
    });

    const mailOptions = {
        from: 'pardesi059@gmail.com',
        to: `${mobile}@airtelap.com`, // TextLocal email-to-SMS format
        subject: 'Order Confirmation',
        text: `Your order for ${quantity} MetaHorizon VR setups has been placed. Total amount: ${totalPrice}/-.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            res.send('Failed to send SMS. Please try again.');
        } else {
            console.log('SMS sent:', info.response);
            res.send('Order placed successfully. You will receive an SMS shortly.');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});