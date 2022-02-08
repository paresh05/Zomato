import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import collectionApi from '../../service/loginApi';

/**
 * This component creates the collections on the dashboard page
 * @returns a card of collections having image and title
 */

export default function Collection() {
  const [hover, setHover] = React.useState(false);
  const [collections, setCollections] = React.useState([]);
  const fetchCollections = () => {
    collectionApi
      .getCollections()
      .then((response) => {
        setCollections(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchCollections();
  }, []);
  return (
    <Grid paddingTop={5} paddingBottom={15}>
      <Typography
        fontFamily={'\'Quicksand\', sans-serif'}
        fontWeight={500}
        variant="h4"
        component="div"
        paddingLeft={{ md: 15, xs: 5 }}
      >
        Collections
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography
          fontFamily={'\'Quicksand\', sans-serif'}
          fontWeight={400}
          fontSize="18px"
          gutterBottom
          variant="h6"
          component="div"
          paddingLeft={{ md: 15, xs: 5 }}
        >
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Bengaluru, based on trends
        </Typography>
        <Typography
          fontFamily={'\'Quicksand\', sans-serif'}
          fontWeight={400}
          fontSize="16px"
          gutterBottom
          variant="h6"
          component="div"
          color={hover ? 'rgb(207, 16, 32)' : 'rgb(255, 126, 139)'}
          paddingLeft={15}
          sx={{ cursor: 'pointer', display: { md: 'flex', xs: 'none' }, alignItems: 'center' }}
          onMouseOver={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}
        >
          All collections in Bengaluru
          <PlayArrowIcon sx={{ paddingLeft: '5px' }} fontSize="18px" />
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        align="center"
        style={{
          paddingTop: 10,
          paddingBottom: 20,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {collections.map((collection) => (
          <Grid item align="center">
            <Card
              variant="outlined"
              sx={{
                width: 267.5,
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
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: 'linear-gradient(hsl(0, 0%, 60%, 0.25), black)',
                    padding: '0 16px 0 16px',
                  }}
                >
                  <Typography
                    fontFamily={'\'Quicksand\', sans-serif'}
                    color="white"
                    fontWeight={400}
                    variant="h6"
                    component="div"
                    align="left"
                  >
                    {collection.attributes.title}
                  </Typography>
                  <Typography
                    fontFamily={'\'Quicksand\', sans-serif'}
                    color="white"
                    fontWeight={300}
                    gutterBottom
                    component="div"
                    align="left"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    {collection.attributes.subtitle}
                    <PlayArrowIcon sx={{ paddingLeft: '5px' }} fontSize="18px" />
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
