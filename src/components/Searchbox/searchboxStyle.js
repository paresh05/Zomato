import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  search: {
    maxWidth: '750px',
    width: '75%',
    height: '3.3rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    mt: '10px',
    border: '1px solid rgb(232, 232, 232)',
  },
  location: {
    flex: 2,
  },
  searchIcon: {
    p: '12px',
  },
}));

export default useStyles;
