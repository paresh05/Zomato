import React from 'react';
import './footer.css';
import { Grid } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { logo, appleStore, googleStore } from '../../constants/images';

/**
 * This component creates the main footer component of Zomato
 * @returns a footer component
 */

function Footer() {
  return (
    <div className="footer">
      <img
        src={logo.url}
        alt="logo"
        width={132}
        height={28}
      />
      <Grid className="footerContent">
        <div className="footerColumn">
          <h5 className="footerTitle">Company</h5>
          <p>Who we are</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Report Fraud</p>
          <p>Contact</p>
          <p>Investor Relations</p>
        </div>
        <div className="footerColumn">
          <h5 className="footerTitle">For Foodies</h5>
          <p>Code of Conduct</p>
          <p>Community</p>
          <p>Blogger Help</p>
          <p>Mobile Apps</p>
        </div>
        <div className="footerColumns">
          <div className="content">
            <h5 className="footerTitle">For Restaurants</h5>
            <p>Add restaurant</p>
          </div>
          <div>
            <h5 className="footerTitle">For Enterprises</h5>
            <p>Zomato for Work</p>
          </div>
        </div>
        <div className="footerColumn">
          <h5 className="footerTitle">For you</h5>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Security</p>
          <p>Sitemap</p>
        </div>
        <div className="footerColumn">
          <h5 className="footerTitle">Social Links</h5>
          <div className="socialLinks">
            <div className="socialIcons">
              <FacebookRoundedIcon sx={{ cursor: 'pointer' }} />
              <TwitterIcon sx={{ cursor: 'pointer' }} />
              <InstagramIcon sx={{ cursor: 'pointer' }} />
            </div>
            <img
              src={appleStore.url}
              alt="logo"
              width={137}
              height={40}
            />
            <img
              src={googleStore.url}
              alt="logo"
              width={137}
              height={40}
            />
          </div>
        </div>
      </Grid>
      <hr className="solid" />
      <p className="footerTerms">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy,
        Privacy Policy and Content Policies. All trademarks are properties of their
        respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
