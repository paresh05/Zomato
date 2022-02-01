import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import data from './data.json';
import { Grid } from '@mui/material';
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
      {data.map((card, index) => (
        <Grid item key={index} align="center">
          <Card
            variant="outlined"
            sx={{
              width: 267.5,
              height: 240,
              borderRadius: '15px',
              transform: `${hover[index] ? 'scale(1.05)' : null}`,
              transition: '0.3s',
            }}
            onMouseOver={() => {
              setHover({ [index]: true });
            }}
            onMouseLeave={() => {
              setHover({ [index]: false });
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
