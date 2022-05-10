import * as React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Paper, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import loclityApi from '../../service/zomatoApi';
import { collectionTitle } from '../../constants/data';
import useStyles from './localitiesStyles';

/**
 * This component creates the popular localities component on the dashboard page
 * @returns a card of locality name for different locations
 */

export default function Localities() {
  const classes = useStyles();
  const [locality, setLocality] = React.useState([]);
  const city = useSelector((state) => state.city.location);
  const filteredLocality = locality.filter(
    (area) => area.attributes.location === city,
  );
  const fetchLocality = () => {
    loclityApi
      .getLocalities()
      .then((response) => {
        setLocality(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchLocality();
  }, []);
  return (
    <Grid
      paddingBottom={{ xs: 5, sm: 8, md: 8 }}
    >
      <Typography
        fontFamily={"'Quicksand', sans-serif"}
        fontWeight={500}
        variant="h4"
        component="div"
        marginBottom={5}
        textAlign="center"
      >
        {collectionTitle.locationTitle}
        {` ${city}`}
      </Typography>
      <Grid container spacing={5} paddingLeft={{ md: 15, sm: 4, xs: 2 }}>
        {filteredLocality.map((localities) => (
          <Grid item align="center">
            <Paper
              variant="outlined"
              className={classes.paperStyle}
            >
              <Typography
                fontFamily={"'Quicksand', sans-serif"}
                fontWeight={500}
                fontSize="22px"
                gutterBottom
                variant="h6"
                component="div"
                color="rgb(28, 28, 28)"
                sx={{
                  cursor: 'pointer',
                }}
              >
                {localities.attributes.name}
                {localities.attributes.places}
              </Typography>
              <PlayArrowIcon sx={{ paddingLeft: '5px' }} fontSize="18px" />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
