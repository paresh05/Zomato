import React, { useState } from 'react';
import { Box, InputBase } from '@mui/material';
import './checkoutBody.css';
import Summary from './Summary';
import useStyles from './checkoutBodyStyles';

/**
 * This component creates the header component of the order delivery page
 * @returns a header component with searchbox, logo and account
 */

function CheckoutBody() {
  const classes = useStyles();
  const name = localStorage.getItem('name');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [state, setState] = useState('');
  const deliveryAddress = {
    address,
    city,
    state,
    pinCode,
    mobile,
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleNumber = (event) => {
    setMobile(event.target.value);
  };
  const handlePinCode = (event) => {
    setPinCode(event.target.value);
  };
  const handleState = (event) => {
    setState(event.target.value);
  };
  return (
    <div className="checkoutBody">
      <h3 className="checkoutTitle">Checkout</h3>
      <div className="checkout">
        <div>
          <div className="userDetailsBox">
            <p className="userName">
              {name}
              <span className="userEmail">
                pareshpraveen05@gmail.com
              </span>
            </p>
            <p className="secureLogin">You have securely logged in</p>
          </div>
          <div className="deliveryAddress">
            <p className="deliveryAddressTitle">Delivery Address</p>
            <div>
              <Box
                className={classes.email}
              >
                <InputBase
                  sx={{ paddingLeft: '10px', flex: 3, fontFamily: 'Quicksand, sans-serif' }}
                  placeholder="Street, Area, Locality"
                  inputProps={{ 'aria-label': 'Email' }}
                  onChange={handleAddress}
                />
              </Box>
              <div className="supportPrice">
                <Box
                  className={classes.city}
                >
                  <InputBase
                    sx={{ paddingLeft: '10px', flex: 3, fontFamily: 'Quicksand, sans-serif' }}
                    placeholder="City"
                    inputProps={{ 'aria-label': 'Email' }}
                    onChange={handleCity}
                  />
                </Box>
                <Box
                  className={classes.city}
                >
                  <InputBase
                    sx={{ paddingLeft: '10px', flex: 3, fontFamily: 'Quicksand, sans-serif' }}
                    placeholder="Pincode"
                    inputProps={{ 'aria-label': 'Email' }}
                    onChange={handlePinCode}
                  />
                </Box>
              </div>
              <div className="supportPrice">
                <Box
                  className={classes.city}
                >
                  <InputBase
                    sx={{ paddingLeft: '10px', flex: 3, fontFamily: 'Quicksand, sans-serif' }}
                    placeholder="State"
                    inputProps={{ 'aria-label': 'Email' }}
                    onChange={handleState}
                  />
                </Box>
                <Box
                  className={classes.city}
                >
                  <InputBase
                    sx={{ paddingLeft: '10px', flex: 3, fontFamily: 'Quicksand, sans-serif' }}
                    placeholder="Phone Number"
                    inputProps={{ 'aria-label': 'Email' }}
                    onChange={handleNumber}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="deliveryAddress">
            <p className="deliveryAddressTitle">Payment Method</p>
            <p className="cash">
              Cash
            </p>
            <p className="paymentText">
              Please keep exact change handy to help us serve you better
            </p>
          </div>
        </div>
        <Summary address={deliveryAddress} />
      </div>
    </div>
  );
}

export default CheckoutBody;
