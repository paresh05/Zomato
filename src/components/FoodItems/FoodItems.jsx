import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import './fooditems.css';
import foodApi from '../../service/zomatoApi';
import { foodTitle } from '../../constants/data';

/**
 * This component creates the header component of the website
 * @returns a header component with searchbox, topbar and background image
 */

function FoodItems() {
  const [items, setItems] = useState([]);
  const fetchFood = () => {
    foodApi
      .getFoodItems()
      .then((response) => {
        setItems(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchFood();
  }, []);
  return (
    <div className="items">
      <h3 className="itemsTitle">{foodTitle.title}</h3>
      <div className="item">
        {items.map((food) => (
          <Card
            elevation={0}
            sx={{
              width: 150,
              height: 200,
              cursor: 'pointer',
              background: 'rgb(248, 248, 248)',
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={food.attributes.image}
              alt="images"
              sx={{ borderRadius: '50%' }}
            />
            <CardContent>
              <Typography
                fontFamily={'\'Quicksand\', sans-serif'}
                fontWeight={600}
                variant="h6"
                fontSize={{ lg: 20, sm: 16, xs: 14 }}
              >
                {food.attributes.foodIems}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
