import React from 'react';
import Cards from '../components/Cards/Cards';
import Collection from '../components/Collections/Collection';
import Explore from '../components/Footer/Explore';
import Footer from '../components/Footer/Footer';
import GetApp from '../components/Footer/GetApp';
import Header from '../components/Header/Header';

/**
 * This component creates the dashboard page of the website
 * @returns all the components of Dashboard
 */

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Cards />
      <Collection />
      <GetApp />
      <Explore />
      <Footer />
    </div>
  );
}
