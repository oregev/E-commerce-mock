const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const corsOptions = {
  origin: true,
};
const stripeKey = require('./src/config');
const stripe = require('stripe')(stripeKey);
const products = require('./src/products');

// App config
const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// API Routs
app.get('/', (req, res) => {
  res.status(200).send('hello');
});

app.post('/payments/create', async (req, res) => {
  try {
    const total = req.query.total;
    const paymentIntent = await stripe?.paymentIntents?.create({
      amount: +total,
      currency: 'usd',
    });
    res.status(201).send({
      clientSecret: paymentIntent?.client_secret,
    });
  } catch (error) {
    console.log('error with payment', error);
  }
});

app.get('/products', (req, res) => {
  res.status(200).send(products);
});

// Listen command
exports.api = functions.https.onRequest(app);
