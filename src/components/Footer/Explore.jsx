import React from 'react';
import './explore.css';
import restaurantTypes from './restaurantTypes.json';
import restaurant from './restaurants.json';
import cuisine from './cuisines.json';
import cities from './cities';
import { footer } from '../../constants/data';

/**
 * This component creates the footer component for exploring the other restaurant types,
 * chains of the city
 * @returns a component of contents provided in data
 */

function Explore() {
  return (
    <div className="explore">
      <div className="exploreContent">
        <h1 className="exploretitle">{footer.exploreTitle}</h1>
        <h2>{footer.cuisinesTitle}</h2>
        <div className="cuisines">
          {cuisine.map((cuisines) => (
            <>
              <p className="cuisinesName">{cuisines.name}</p>
              <span className="point" />
            </>
          ))}
        </div>
        <h2 className="restaurantTitle">{footer.popularTitle}</h2>
        <div className="cuisines">
          {restaurantTypes.map((restaurants) => (
            <>
              <p className="cuisinesName">{restaurants.name}</p>
              <span className="point" />
            </>
          ))}
        </div>
        <h2 className="restaurantTitle">{footer.chainTitle}</h2>
        <div className="restaurant">
          {restaurant.map((restaurants) => (
            <p className="restaurantName">{restaurants.name}</p>
          ))}
        </div>
        <h2 className="restaurantTitle">{footer.citiesTitle}</h2>
        <div className="restaurant">
          {cities.map((city) => (
            <p className="restaurantName">{city}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
