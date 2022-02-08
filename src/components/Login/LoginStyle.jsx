import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  email: {
    width: '400px',
    height: '48px',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid rgb(207, 207, 207)',
    margin: '10px 24px 5px 24px',
  },
  password: {
    width: '400px',
    height: '48px',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid rgb(207, 207, 207)',
    margin: '10px 24px 5px 24px',
  },
  checkbox: {
    width: '400px',
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
