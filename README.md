# [Stripe Integration Node.js App] (https://stripe-integration.cyclic.app/)

This is [a prototype Node.js application that integrates with Stripe](https://stripe-integration.cyclic.app/) using their API hosted on Cyclic. The app retrieves a fresh list of customers and payment intents from Stripe with each reload. It provides a simple web interface to display the data.

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/your-username/stripe-integration-nodejs-app.git
   ```
1. Navigate to the project directory:

```bash
cd stripe-integration
```
1. Install the dependencies:

```bash
npm install
```
1. Set up the environment variables:

- Create a .env file in the root directory of the project.

- Add the following variables to the .env file:

```
STRIPE_API_KEY=your_stripe_api_key
PORT=80
```
- Replace your_stripe_api_key with your actual Stripe API key. You can obtain the API key from your Stripe account dashboard.

1. Start the application:

```
npm start
```
1. Open your web browser and visit http://localhost to see the app in action.

## Usage
The app automatically fetches the list of customers and payment intents from Stripe using the provided API key.
On the home page, you will see two tables displaying the customer data and payment intent data.
The tables are updated with fresh data each time you reload the page.

## License
This project is licensed under the MIT License.
