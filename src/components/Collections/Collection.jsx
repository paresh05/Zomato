import * as React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import collectionApi from '../../service/zomatoApi';
import useStyles from './collectionStyles';
import { collectionTitle } from '../../constants/data';

/**
 * This component creates the collections on the dashboard page
 * @returns a card of collections having image and title
 */

export default function Collection() {
  const classes = useStyles();
  const [hover, setHover] = React.useState(false);
  const city = useSelector((state) => state.city.location);
  const [collections, setCollections] = React.useState([]);

  const fetchCollections = () => {
    collectionApi
      .getCollections(city)
      .then((response) => {
        setCollections(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchCollections();
  }, [city]);
  return (
    <Grid paddingTop={5} paddingBottom={{ xs: 5, sm: 8, md: 8 }}>
      <Typography
        fontFamily={"'Quicksand', sans-serif"}
        fontWeight={500}
        variant="h4"
        component="div"
        paddingLeft={{ md: 15, xs: 2 }}
      >
        Collections
      </Typography>
      <Box
        className={classes.title}
      >
        <Typography
          fontFamily={"'Quicksand', sans-serif"}
          fontWeight={400}
          fontSize="18px"
          gutterBottom
          variant="h6"
          component="div"
          paddingLeft={{ md: 15, xs: 2 }}
        >
          {collectionTitle.title}
          {` ${city}`}
          {collectionTitle.subtitle}
        </Typography>
        <Typography
          fontFamily={"'Quicksand', sans-serif"}
          fontWeight={400}
          fontSize="16px"
          gutterBottom
          variant="h6"
          component="div"
          color={hover ? 'rgb(207, 16, 32)' : 'rgb(255, 126, 139)'}
          sx={{
            cursor: 'pointer',
            display: { md: 'inline-flex', xs: 'none' },
            alignItems: 'center',
          }}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          All collections in
          {` ${city}`}
          <PlayArrowIcon sx={{ paddingLeft: '5px' }} fontSize="18px" />
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        align="center"
        className={classes.cards}
      >
        {collections.map((collection) => (
          <Grid item align="center">
            <Card
              variant="outlined"
              sx={{
                width: { lg: 267.5, sm: 180, xs: 160 },
                height: 320,
                borderRadius: '7px',
                cursor: 'pointer',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={collection.attributes.url}
                  alt="images"
                />
                <Box className={classes.cardTitle}>
                  <Typography
                    fontFamily={"'Quicksand', sans-serif"}
                    color="white"
                    fontWeight={400}
                    variant="h6"
                    component="div"
                    align="left"
                    fontSize={{ lg: 20, sm: 17, xs: 14 }}
                  >
                    {collection.attributes.title}
                  </Typography>
                  <Typography
                    fontFamily={"'Quicksand', sans-serif"}
                    color="white"
                    fontWeight={300}
                    gutterBottom
                    component="div"
                    align="left"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    fontSize={{ lg: 15, sm: 13, xs: 11 }}
                  >
                    {collection.attributes.subtitle}
                    <PlayArrowIcon
                      sx={{ paddingLeft: '5px' }}
                      fontSize="18px"
                    />
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
