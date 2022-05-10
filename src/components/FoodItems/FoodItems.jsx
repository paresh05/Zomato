import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './fooditems.css';
import foodApi from '../../service/zomatoApi';
import { foodTitle } from '../../constants/data';
import { fetchFoodItem } from '../../actions/cardAction';

/**
 * This component creates the food items component of the delivery page
 * @returns a card component with food items
 */

function FoodItems() {
  const dispatch = useDispatch();
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
  const handleChange = (food) => {
    dispatch(fetchFoodItem(food));
  };
  React.useEffect(() => {
    fetchFood();
  }, []);
  return (
    <div className="items">
      <h3 className="itemsTitle">{foodTitle.title}</h3>
      <div className="item">
        <Grid
          container
          spacing={5}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {items.map((food) => (
            <Grid key={food.id} item>
              <Card
                elevation={0}
                sx={{
                  width: 150,
                  height: 200,
                  cursor: 'pointer',
                  background: 'rgb(248, 248, 248)',
                }}
                onClick={() => { handleChange(food.attributes.foodIems); }}
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
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default FoodItems;
