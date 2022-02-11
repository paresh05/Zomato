import React from 'react';
import { useSelector } from 'react-redux';
import './header.css';
import SearchBox from '../Searchbox/SearchBox';
import Topbar from '../Topbar/Topbar';
import { zomatoLogo } from '../../constants/images';
import { zomatotitle } from '../../constants/data';

/**
 * This component creates the header component of the website
 * @returns a header component with searchbox, topbar and background image
 */

function Header() {
  const city = useSelector((state) => state.city.location);
  return (
    <div className="topbar">
      <Topbar />
      <img
        className="logo"
        src={zomatoLogo.url}
        alt="logo"
      />
      <h1 className="title">
        { zomatotitle.title }
        {` ${city}`}
      </h1>
      <SearchBox />
    </div>
  );
}

export default Header;
