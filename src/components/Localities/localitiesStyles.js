import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paperStyle: {
    width: '320px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '0.8rem',
    padding: '10px 15px',
  },
}));

export default useStyles;
