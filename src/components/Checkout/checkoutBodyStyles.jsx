import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  email: {
    height: '48px',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid rgb(207, 207, 207)',
    margin: '10px 13px 5px 10px',
  },
  city: {
    width: '45.5%',
    height: '48px',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid rgb(207, 207, 207)',
    margin: '10px 11px 5px 10px',
  },
  checkbox: {
    display: 'flex',
    margin: '0px 24px 5px 20px',
    '& p': {
      fontSize: '13px',
      lineHeight: '17px',
      '& span': {
        color: 'rgb(239, 79, 95)',
        fontWeight: '600',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '400px',
    },
  },
  login: {
    height: '51px',
    background: 'rgb(232, 76, 66)',
    color: 'white',
    textTransform: 'none',
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '18px',
    borderRadius: '0.6rem',
    cursor: 'pointer',
    margin: '15px 24px 15px 24px',
  },
}));

export default useStyles;
