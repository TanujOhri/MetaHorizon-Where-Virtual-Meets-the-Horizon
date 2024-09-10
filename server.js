const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const accountSid = 'ACbcf76fe5a8211121a29b13ea22e12fd7'; // Replace with your actual Twilio Account SID
const authToken = '972fc1bdeade83fcf6e1c295a5cc3fbb'; // Replace with your actual Twilio Auth Token
const client = new twilio(accountSid, authToken);

app.post('/place-order', (req, res) => {
    const mobile = req.body.mobile;
    const quantity = req.body.quantity;
    const total = 30000 * quantity;

    client.messages.create({
        body: `Your order for ${quantity} MetaHorizon VR setups has been placed. Total amount: ${total}/-`,
        from: '+91 9463064495', // Replace with your Twilio phone number
        to: mobile
    })
    .then(message => {
        res.send('Order placed successfully! SMS sent.');
    })
    .catch(error => {
        res.status(500).send('Failed to send SMS. Please try again.');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
