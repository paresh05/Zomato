import React from 'react';
import FoodItems from '../components/FoodItems/FoodItems';
import Explore from '../components/Footer/Explore';
import Footer from '../components/Footer/Footer';
import DeliveryHeader from '../components/Header/DeliveryHeader';
import Restaurant from '../components/Restaurant/Restaurant';
import TopBrands from '../components/TopBrands/TopBrands';

/**
 * This component creates the food delivery page of zomato
 * @returns all the components of Delivery page
 */

export default function Delivery() {
  return (
    <div>
      <DeliveryHeader />
      <FoodItems />
      <TopBrands />
      <Restaurant />
      <Explore />
      <Footer />
    </div>
  );
}
