import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import {
  Box, Divider, Grid, InputBase,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';
import userConnect from '../../service/loginApi';
import useStyles from './LoginStyle';

/**
 * This component creates the signup dialog box for signup
 * @returns a dialog box component for signup
 */

function SignUp(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const { onClose, onOpen, signUp } = props;
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
  const handleName = (event) => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    const data = {
      username: name,
      email,
      password,
    };
    userConnect
      .register(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Dialog onClose={handleClose} open={signUp}>
      <DialogTitle fontFamily="Quicksand, sans-serif" fontSize="29px" fontWeight="600">
        Sign Up
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
          sx={{ paddingLeft: '10px', fontFamily: 'Quicksand, sans-serif' }}
          placeholder="Full Name"
          inputProps={{ 'aria-label': 'Full Name' }}
          onChange={handleName}
        />
      </Box>
      <Box
        className={classes.email}
      >
        <InputBase
          sx={{ paddingLeft: '10px', fontFamily: 'Quicksand, sans-serif' }}
          placeholder="Email"
          inputProps={{ 'aria-label': 'Email' }}
          onChange={handleEmail}
        />
      </Box>
      <Box
        className={classes.password}
      >
        <InputBase
          sx={{ paddingLeft: '10px', fontFamily: 'Quicksand, sans-serif' }}
          placeholder="Password"
          inputProps={{ 'aria-label': 'password' }}
          onChange={handlePassword}
        />
      </Box>
      <Grid
        className={classes.checkbox}
      >
        <Checkbox
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
        <p>
          I agree to Zomatos
          <span> Terms of Service, Privacy Policy </span>
          and
          <span> Content Policies</span>
        </p>
      </Grid>
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
          margin: '0px 24px 15px 24px',
        }}
      >
        Create Account
      </Button>
      <Divider
        sx={{
          fontSize: '18px',
          fontFamily: 'Quicksand, sans-serif',
          margin: '0px 24px 15px 24px',
        }}
      >
        or
      </Divider>
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
      <Typography
        sx={{
          fontFamily: 'Quicksand, sans-serif',
          margin: '0px 24px 15px 24px',
          fontSize: '19px',
        }}
      >
        Already have an account?
        <a href="#login" onClick={handleOpen} style={{ textDecoration: 'none', color: 'rgb(239, 79, 95)', cursor: 'pointer' }}>
          {' '}
          Log in
        </a>
      </Typography>
    </Dialog>
  );
}

SignUp.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  signUp: PropTypes.bool.isRequired,
};

export default SignUp;
