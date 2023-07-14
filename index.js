const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

async function retrieveStripeCustomers() {
  const allCustomers = [];

  let customers = await stripe.customers.list();
  allCustomers.push(...customers.data);
  while (customers.has_more) {
    customers = await stripe.customers.list({
      starting_after: customers.data[customers.data.length - 1].id
    });
    allCustomers.push(...customers.data);
  }

  return allCustomers;
}

async function retrieveStripePaymentIntents() {
  const allPaymentIntents = [];

  let paymentIntents = await stripe.paymentIntents.list();
  allPaymentIntents.push(...paymentIntents.data);
  while (paymentIntents.has_more) {
    paymentIntents = await stripe.paymentIntents.list({
      starting_after: paymentIntents.data[paymentIntents.data.length - 1].id
    });
    allPaymentIntents.push(...paymentIntents.data);
  }

  return allPaymentIntents;
}

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const customers = await retrieveStripeCustomers();
    const paymentIntents = await retrieveStripePaymentIntents();

    const stripeRecords = {
      customers: customers,
      paymentIntents: paymentIntents
    };

    res.render('index', stripeRecords);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});