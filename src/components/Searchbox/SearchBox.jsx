import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {
  Divider,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
} from '@mui/material';

function SearchBox({ location, handleChange }) {
  return (
    <Box
      sx={{
        width: '750px',
        height: '3.3rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        mt: '10px',
      }}
    >
      <IconButton
        sx={{ p: '12px', color: 'rgb(255, 126, 139)' }}
        aria-label="location"
      >
        <FmdGoodIcon />
      </IconButton>
      <Box sx={{ flex: 2 }}>
        <FormControl variant="standard" fullWidth>
          <Select
            labelId="location"
            id="location"
            value={location}
            label="Location"
            onChange={handleChange}
            disableUnderline
            sx={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            <MenuItem
              sx={{ fontFamily: 'Quicksand, sans-serif' }}
              value="Bengaluru"
            >
              Bengaluru
            </MenuItem>
            <MenuItem
              sx={{ fontFamily: 'Quicksand, sans-serif' }}
              value="Mumbai"
            >
              Mumbai
            </MenuItem>
            <MenuItem
              sx={{ fontFamily: 'Quicksand, sans-serif' }}
              value="Delhi"
            >
              Delhi
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />
      <IconButton sx={{ p: '12px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ flex: 5, fontFamily: 'Quicksand, sans-serif' }}
        placeholder="Search for restaurant, cuisine or a dish"
        inputProps={{ 'aria-label': 'search for food' }}
      />
    </Box>
  );
}
SearchBox.propTypes = {
  location: PropTypes.string,
  handleChange: PropTypes.func,
};
SearchBox.defaultProps = {
  location: 'Bengaluru',
  handleChange: { },
};
export default SearchBox;
