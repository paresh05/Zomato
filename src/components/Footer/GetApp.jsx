import React from 'react';
import './getapp.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getApp, appleStore, googleStore } from '../../constants/images';
import { footer } from '../../constants/data';

/**
 * This component creates the component for getting the mobile application of Zomato
 * @returns a component with image and inputs
 */

function GetApp() {
  return (
    <div className="getApp">
      <img
        src={getApp.url}
        alt="logo"
        width={250}
        height={450}
        className="getAppImage"
      />
      <div className="appContent">
        <h2 className="appTitle">{footer.getAppTitle}</h2>
        <p>
          {footer.getAppsubTitle}
        </p>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="email" control={<Radio />} label="Email" />
            <FormControlLabel value="phone" control={<Radio />} label="Phone" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          sx={{
            width: '292px',
            background: 'white',
            marginRight: '10px',
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: '150px',
            height: '51px',
            background: 'rgb(232, 76, 66)',
            color: 'white',
            textTransform: 'none',
            fontFamily: 'Quicksand, sans-serif',
            fontSize: '15px',
            borderRadius: '0.6rem',
            cursor: 'pointer',
            marginTop: { sm: 1, md: 0, xs: 1 },
          }}
        >
          Share App Link
        </Button>
        <p>Download app from</p>
        <div className="downloadIcons">
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
    </div>
  );
}

export default GetApp;
