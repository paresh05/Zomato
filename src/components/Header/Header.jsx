import React from 'react';
import './header.css';
import SearchBox from '../Searchbox/SearchBox';
import Topbar from '../Topbar/Topbar';
import { zomatoLogo } from '../../constants/images';

/**
 * This component creates the header component of the website
 * @returns a header component with searchbox, topbar and background image
 */

function Header() {
  const [location, setLocation] = React.useState('Bengaluru');
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div className="topbar">
      <Topbar />
      <img
        className="logo"
        src={zomatoLogo.url}
        alt="logo"
      />
      <h1 className="title">
        Discover the best food & drinks in
        {` ${location}`}
      </h1>
      <SearchBox location={location} handleChange={handleChange} />
    </div>
  );
}

export default Header;
