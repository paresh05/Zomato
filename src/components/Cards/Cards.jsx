import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import cardApi from '../../service/zomatoApi';

/**
 * This component creates the cards on the dashboard page
 * @returns a card having image and title
 */

export default function Cards() {
  const [hover, setHover] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [redirect, setRedirect] = React.useState(false);
  console.log(redirect);
  const fetchCards = () => {
    cardApi
      .getCards()
      .then((response) => {
        setCards(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Grid
      container
      spacing={1}
      align="center"
      style={{
        paddingTop: 50,
        paddingBottom: 20,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {cards.map((card) => (
        <Grid item key={card.id} align="center">
          <Card
            variant="outlined"
            sx={{
              width: { lg: 267.5, sm: 180, xs: 160 },
              height: 240,
              borderRadius: '15px',
              transform: `${hover[card.id] ? 'scale(1.05)' : null}`,
              transition: '0.3s',
              cursor: 'pointer',
            }}
            onMouseOver={() => {
              setHover({ [card.id]: true });
            }}
            onMouseLeave={() => {
              setHover({ [card.id]: false });
            }}
            onClick={() => {
              setRedirect({ [card.id]: true });
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={card.attributes.url}
              alt="images"
            />
            <CardContent>
              <Typography
                fontFamily={'\'Quicksand\', sans-serif'}
                fontWeight={600}
                gutterBottom
                variant="h6"
                component="div"
                fontSize={{ lg: 20, sm: 16, xs: 14 }}
              >
                {card.attributes.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {redirect[1] ? <Redirect to="/delivery" /> : null}
    </Grid>
  );
}
