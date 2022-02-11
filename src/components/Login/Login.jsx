import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box, Divider, IconButton, InputAdornment, InputBase,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import userConnect from '../../service/zomatoApi';
import useStyles from './LoginStyle';

/**
 * This component creates the login dialog box for login
 * @returns a dialog box component for login
 */

function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const { onClose, onOpen, login } = props;

  const handleClose = () => {
    onClose();
  };
  const handleOpen = () => {
    onClose();
    onOpen();
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = () => {
    const data = {
      identifier: email,
      password,
    };
    userConnect
      .login(data)
      .then((response) => {
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('name', response.data.user.username);
        onClose();
        window.location.reload(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Dialog onClose={handleClose} open={login}>
      <DialogTitle fontFamily="Quicksand, sans-serif" fontSize="29px" fontWeight="600">
        Log In
        <CloseIcon
          sx={{
            cursor: 'pointer', position: 'absolute', right: 0, padding: '15px 24px 15px 15px',
          }}
          onClick={handleClose}
        />
      </DialogTitle>
      <Box
        className={classes.email}
      >
        <InputBase
          sx={{ paddingLeft: '10px', flex: 3, fontFamily: 'Quicksand, sans-serif' }}
          placeholder="Email"
          inputProps={{ 'aria-label': 'Email' }}
          onChange={handleEmail}
        />
      </Box>
      <Box
        className={classes.password}
      >
        <InputBase
          fullWidth
          type={showPassword ? 'text' : 'password'}
          sx={{ paddingLeft: '10px', fontFamily: 'Quicksand, sans-serif' }}
          placeholder="Password"
          inputProps={{ 'aria-label': 'Password' }}
          onChange={handlePassword}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )}
        />
      </Box>
      <Button
        variant="contained"
        onClick={onSubmit}
        style={{
          height: '51px',
          background: 'rgb(232, 76, 66)',
          color: 'white',
          textTransform: 'none',
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '18px',
          borderRadius: '0.6rem',
          cursor: 'pointer',
          margin: '15px 24px 15px 24px',
        }}
      >
        Log In
      </Button>
      <Divider sx={{ fontSize: '18px', fontFamily: 'Quicksand, sans-serif', margin: '0px 24px 15px 24px' }}>or</Divider>
      <Button
        variant="outlined"
        style={{
          height: '51px',
          color: 'black',
          border: '1px solid rgb(207, 207, 207)',
          textTransform: 'none',
          fontFamily: 'Quicksand, sans-serif',
          fontSize: '18px',
          borderRadius: '0.6rem',
          cursor: 'pointer',
          margin: '0px 24px 24px 24px',
        }}
      >
        <GoogleIcon sx={{ paddingRight: '17px' }} />
        Continue with Google
      </Button>
      <Divider sx={{ fontSize: '18px', fontFamily: 'Quicksand, sans-serif', margin: '0px 24px 15px 24px' }} />
      <Typography sx={{ fontFamily: 'Quicksand, sans-serif', margin: '0px 24px 15px 24px' }}>
        New to Zomato?
        <a href="#signup" onClick={handleOpen} style={{ textDecoration: 'none', color: 'rgb(239, 79, 95)', cursor: 'pointer' }}> Create account</a>
      </Typography>
    </Dialog>
  );
}

Login.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
};

export default Login;
