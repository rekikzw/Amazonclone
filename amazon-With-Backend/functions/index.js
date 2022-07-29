const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
    'sk_test_51LHqwSHRYtcCas42B9GTjNtyFcQAwotQbVpgS8e1TS4OmuGn36Deem873uucpvXkGM7CAt7yFk6Cuxwan90amZWQ003hI21LoI'
  );
  
  const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));


app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);


