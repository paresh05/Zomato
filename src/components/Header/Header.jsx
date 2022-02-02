import React from 'react';
import './header.css';
import SearchBox from '../Searchbox/SearchBox';
import Topbar from '../Topbar/Topbar';

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
        src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
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
