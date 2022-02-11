import './topbar.css';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';

/**
 * This component creates the topbar of the header
 * @returns a topbar component
 */

function Topbar() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [popover, setPopover] = useState(false);
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
  const handleClick = () => {
    setPopover(!popover);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    window.location.reload(false);
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
          {token ? (
            <li className="login">
              <div className="loginIcon" />
              <a className="topListLogin" href="#login">
                {name}
              </a>
              {popover ? (
                <KeyboardArrowUpIcon
                  onClick={handleClick}
                  sx={{ color: 'white', cursor: 'pointer' }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  onClick={handleClick}
                  sx={{ color: 'white', cursor: 'pointer' }}
                />
              )}
            </li>
          ) : (
            <>
              <li>
                <a
                  className="topListItem"
                  href="#login"
                  onClick={handleLoginOpen}
                >
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
            </>
          )}
        </ul>
        {popover ? (
          <div className="options">
            <div className="option">
              <div className="loginOptions">Profile</div>
            </div>
            <div className="option">
              <div className="loginOptions">Settings</div>
            </div>
            <div className="option">
              <a href="#login" onClick={handleLogout} className="loginOptions">
                Logout
              </a>
            </div>
          </div>
        ) : null}
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
