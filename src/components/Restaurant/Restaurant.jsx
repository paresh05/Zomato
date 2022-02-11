import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import './restaurant.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import restaurantApi from '../../service/zomatoApi';
import { safeLogo, ordersLogo } from '../../constants/images';
import { restaurantData } from '../../constants/data';

/**
   * This component creates the restaurant component of the delivery page
   * @returns a card component with restaurant image, name and rating
*/

function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);
  const fetchRestaurant = () => {
    restaurantApi
      .getRestaurant()
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchRestaurant();
  }, []);
  return (
    <div className="restaurants">
      <h3 className="restauranttitle">{restaurantData.title}</h3>
      <div className="hotels">
        <Grid container spacing={5}>
          {restaurant.map((hotel) => (
            <Grid item>
              <Card
                elevation={4}
                sx={{
                  width: 350,
                  height: 379,
                  cursor: 'pointer',
                  borderRadius: '20px',
                }}
              >
                <CardMedia
                  component="img"
                  height="248"
                  image={hotel.attributes.image}
                  alt="images"
                  sx={{ borderRadius: '20px' }}
                />
                <CardContent>
                  <div className="hotelName">
                    <Typography
                      fontFamily={'\'Quicksand\', sans-serif'}
                      fontWeight={600}
                      variant="h6"
                      fontSize={{ lg: 20, sm: 16, xs: 14 }}
                    >
                      {hotel.attributes.name}
                    </Typography>
                    <div className="rating">
                      {hotel.attributes.rating}
                      <StarRateIcon fontSize="10px" />
                    </div>
                  </div>
                  <div className="hotelName">
                    <p className="description">
                      {hotel.attributes.description}
                    </p>
                    <p className="price">
                      {hotel.attributes.price}
                    </p>
                  </div>
                  <div className="divider" />
                  <div className="hotelName">
                    <img
                      className="safeLogo"
                      src={safeLogo.url}
                      alt="logo"
                    />
                    <p className="safeTitle">
                      {restaurantData.protocol}
                    </p>
                    <img
                      className="orderlogo"
                      src={ordersLogo.url}
                      alt="logo"
                    />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default Restaurant;
