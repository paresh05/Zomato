import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import './topbrands.css';
import brandsApi from '../../service/zomatoApi';
import { foodTitle } from '../../constants/data';

/**
   * This component creates the top brands component of the delivery page
   * @returns a card with image and brand name
   */

function TopBrands() {
  const [brands, setBrands] = useState([]);
  const fetchBrands = () => {
    brandsApi
      .getBrands()
      .then((response) => {
        setBrands(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchBrands();
  }, []);
  return (
    <div className="brands">
      <h3 className="brandTitle">{ foodTitle.brandTitle }</h3>
      <div className="brand">
        <Grid container spacing={5}>
          {brands.map((brand) => (
            <Grid key={brand.id} item>
              <Card
                elevation={0}
                sx={{
                  width: 150,
                  height: 200,
                  cursor: 'pointer',
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={brand.attributes.image}
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
                    {brand.attributes.name}
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

export default TopBrands;
