import React from 'react';
import { useDispatch } from 'react-redux';
import './restaurantDetails.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import Menu from '../Menu/Menu';
import restaurantApi from '../../service/zomatoApi';
import ImageList from './ImageList';
import { fetchHotelName } from '../../actions/cardAction';

/**
 * This component creates the restaurant details component of the website
 * @returns a card component with restaurant details
 */

function RestaurantDetails() {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = React.useState({});
  if (restaurant) console.log(restaurant);
  if (Object.keys(restaurant).length !== 0) console.log('hello');
  const fetchRestaurant = () => {
    restaurantApi
      .getRestaurantbyId(id)
      .then((response) => {
        setRestaurant(response.data.attributes);
        dispatch(fetchHotelName(response.data.attributes.name));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchRestaurant();
  }, []);
  return (
    <div>
      {
        (Object.keys(restaurant).length !== 0) ? (
          <div className="hotelDetails">
            <ImageList subImages={restaurant.subImages} />
            <div className="restDetails">
              <div className="details">
                <h1 className="hotelName">
                  {restaurant.name}
                </h1>
                <div className="reviewRating">
                  <div className="hotelRating">
                    {restaurant.rating}
                    <StarRateIcon fontSize="10px" />
                  </div>
                  <div className="review">
                    <div className="noOfReview">184</div>
                    <div className="reviewTitle">Delivery Reviews</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="foodType">{restaurant.description}</div>
                <div className="foodType">{restaurant.location}</div>
              </div>
              <div className="timings">
                <div className="timing">
                  <span className="openNow">Open Now</span>
                  <span className="dash">-</span>
                  <span className="hours">
                    9:30am – 10:30pm (Today)
                  </span>
                </div>
              </div>
              <div className="menu">
                <div className="overview">
                  <h1 className="overviewTitle">Overview</h1>
                </div>
                <div className="overview">
                  <h1 className="overviewTitle">Order Online</h1>
                </div>
                <div className="overview">
                  <h1 className="overviewTitle">Reviews</h1>
                </div>
                <div className="overview">
                  <h1 className="overviewTitle">Photos</h1>
                </div>
                <div className="overview">
                  <h1 className="overviewTitle">Menu</h1>
                </div>
                <hr className="mainHr" />
              </div>
            </div>
            <Menu menuItems={restaurant.menu} />
          </div>
        ) : null
      }
    </div>
  );
}

export default RestaurantDetails;
