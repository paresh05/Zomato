import React from 'react';
import CheckoutBody from '../components/Checkout/CheckoutBody';
import CheckoutHeader from '../components/Header/CheckoutHeader';

/**
 * This component creates the food delivery page of zomato
 * @returns all the components of Delivery page
 */

export default function Checkout() {
  return (
    <div>
      <CheckoutHeader />
      <CheckoutBody />
    </div>
  );
}
