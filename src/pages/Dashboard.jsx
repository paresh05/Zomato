import React from 'react';
import Cards from '../components/Cards/Cards';
import Collection from '../components/Collections/Collection';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Cards />
      <Collection />
      <Footer />
    </div>
  );
}
