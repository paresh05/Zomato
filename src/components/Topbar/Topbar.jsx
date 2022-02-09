import './topbar.css';
import React, { useState } from 'react';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';

/**
 * This component creates the topbar of the header
 * @returns a topbar component
 */

function Topbar() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
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
    <div className="topBar">
      <nav className="navBar">
        <ul className="topListRight">
          <li>
            <a className="topListItemRight" href="#app">
              Get the App
            </a>
          </li>
        </ul>
        <ul className="topList">
          <li>
            <a className="topListItem" href="#addrestaurant">
              Add restaurant
            </a>
          </li>
          <li>
            <a className="topListItem" href="#login" onClick={handleLoginOpen}>
              Log in
            </a>
          </li>
          <li>
            <a
              className="topListItem"
              href="#signup"
              onClick={handlesignUpOpen}
            >
              Sign up
            </a>
          </li>
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
  );
}

export default Topbar;
