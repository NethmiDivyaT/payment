import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './Component/Form';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KfqVnB32MK4W6iDNeUGfW19fJfk9CJlJiDQomtCNsiCK8KDVybPyyLqhKqHBUO70jrG1pzQFXaWdMLhV6PKGXHE00umfgiErO');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default App;