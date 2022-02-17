import React, { useState } from 'react';
import { logo } from '../../constants/images';
import './deliveryHeader.css';
import './checkoutHeader.css';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';

/**
 * This component creates the header component of the order delivery page
 * @returns a header component with searchbox, logo and account
 */

function CheckoutHeader() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const handleLoginOpen = () => {
    setLogin(true);
  };
  const handleLoginClose = () => {
    setLogin(false);
  };
  const handlesignUpOpen = () => {
    setSignUp(true);
  };
  const handlesignUpClose = () => {
    setSignUp(false);
  };
  return (
    <div>
      <header className="headerCheckout">
        <div className="navBarFood">
          <p className="backToRestaurant">Back to Restaurant</p>
          <img
            className="imageLogo"
            src={logo.url}
            alt="logo"
          />
          <nav>
            <ul className="headerList">
              {token ? (
                <li className="headerlogin">
                  <div className="headerloginIcon" />
                  <a className="headerListLogin" href="#login">
                    {name}
                  </a>
                </li>
              ) : null}
            </ul>
            <Login
              login={login}
              onOpen={handlesignUpOpen}
              onClose={handleLoginClose}
            />
            <SignUp
              signUp={signUp}
              onOpen={handleLoginOpen}
              onClose={handlesignUpClose}
            />
          </nav>
        </div>
      </header>
      <hr className="cartDivider" />
    </div>
  );
}

export default CheckoutHeader;
