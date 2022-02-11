import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { logo } from '../../constants/images';
import SearchBox from '../Searchbox/SearchBox';
import './deliveryHeader.css';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
/**
 * This component creates the header component of the order delivery page
 * @returns a header component with searchbox, logo and account
 */

function DeliveryHeader() {
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
    <header className="header">
      <div className="navBarfood">
        <img
          className="imageLogo"
          src={logo.url}
          alt="logo"
        />
        <SearchBox />
        <nav>
          <ul className="headerList">
            {token ? (
              <li className="headerlogin">
                <div className="headerloginIcon" />
                <a className="headerListLogin" href="#login">
                  {name}
                </a>
                {popover ? (
                  <KeyboardArrowUpIcon
                    onClick={handleClick}
                    sx={{ cursor: 'pointer' }}
                  />
                ) : (
                  <KeyboardArrowDownIcon
                    onClick={handleClick}
                    sx={{ cursor: 'pointer' }}
                  />
                )}
              </li>
            ) : (
              <>
                <li>
                  <a
                    className="headerListItem"
                    href="#login"
                    onClick={handleLoginOpen}
                  >
                    Log in
                  </a>
                </li>
                <li>
                  <a
                    className="headerListItem"
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
            <div className="headeroptions">
              <div className="headeroption">
                <div className="headerloginOptions">Profile</div>
              </div>
              <div className="headeroption">
                <div className="headerloginOptions">Settings</div>
              </div>
              <div className="headeroption">
                <a href="#login" onClick={handleLogout} className="headerloginOptions">
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
    </header>
  );
}

export default DeliveryHeader;
