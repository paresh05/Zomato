import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import data from './data.json';

export default function Cards() {
  const [hover, setHover] = React.useState(false);
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
      {data.map((card) => (
        <Grid item key={card.id} align="center">
          <Card
            variant="outlined"
            sx={{
              width: 267.5,
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
          >
            <CardMedia
              component="img"
              height="180"
              image={card.image}
              alt="images"
            />
            <CardContent>
              <Typography
                fontFamily={'\'Quicksand\', sans-serif'}
                fontWeight={600}
                gutterBottom
                variant="h6"
                component="div"
              >
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
