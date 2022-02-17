import React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useDispatch, useSelector } from 'react-redux';
import {
  Divider,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
} from '@mui/material';
import { fetchLocation } from '../../actions/cardAction';
import useStyles from './searchboxStyle';

/**
 * This component creates the searchbox for entering the location and searching
 * @returns a box component for seaching and entering location
 */

function SearchBox() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const city = useSelector((state) => state.city.location);
  const handleChange = (event) => {
    dispatch(fetchLocation(event.target.value));
  };
  return (
    <Box className={classes.search}>
      <IconButton
        sx={{ p: '12px', color: 'rgb(255, 126, 139)' }}
        aria-label="location"
      >
        <FmdGoodIcon />
      </IconButton>
      <Box className={classes.location}>
        <FormControl variant="standard" fullWidth>
          <Select
            labelId="location"
            id="location"
            value={city}
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
      <IconButton className={classes.searchIcon} aria-label="search">
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
export default SearchBox;
