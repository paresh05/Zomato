import React from 'react';
import PropTypes from 'prop-types';
import './restaurantDetails.css';

/**
 * This component creates the header component of the website
 * @returns a header component with searchbox, topbar and background image
 */

function ImageList(props) {
  const { subImages } = props;

  return (
    <div className="imageList">
      <img className="mainImage" src={subImages[0].url} alt="logo" />
      <div className="subImages">
        <img className="subImage" src={subImages[1].url} alt="logo" />
        <img className="subImage" src={subImages[2].url} alt="logo" />
      </div>
      <div className="subImages">
        <div className="viewGallery">
          <p className="galleryTitle">View Gallery</p>
        </div>
        <div className="addPhotos">
          <p className="addTitle">Add Photos</p>
        </div>
      </div>
    </div>
  );
}

ImageList.propTypes = {
  subImages: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageList;
