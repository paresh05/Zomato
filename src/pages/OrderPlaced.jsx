import React from 'react';
import CheckoutHeader from '../components/Header/CheckoutHeader';
import PlaceOrder from '../components/PlaceOrder/PlaceOrder';

/**
 * This component creates the food delivery page of zomato
 * @returns all the components of Delivery page
 */

export default function OrderPlaced() {
  return (
    <div>
      <CheckoutHeader />
      <PlaceOrder />
    </div>
  );
}
