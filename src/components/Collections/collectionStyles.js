import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      paddingRight: '125px',
    },
  },
  cards: {
    paddingTop: 10,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'linear-gradient(hsl(0, 0%, 60%, 0.25), black)',
    padding: '0 16px 0 16px',
  },
}));

export default useStyles;
