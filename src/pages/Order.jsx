import React from 'react';
import RestaurantDetails from '../components/OrderDetails/RestaurantDetails';
import Footer from '../components/Footer/Footer';
import DeliveryHeader from '../components/Header/DeliveryHeader';
import Cart from '../components/Cart/Cart';

/**
 * This component creates the food delivery page of zomato
 * @returns all the components of Delivery page
 */

export default function Delivery() {
  return (
    <div>
      <DeliveryHeader />
      <RestaurantDetails />
      <Cart />
      <Footer />
    </div>
  );
}
