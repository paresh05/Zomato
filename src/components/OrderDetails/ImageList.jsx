import React from 'react';
import PropTypes from 'prop-types';
import './restaurantDetails.css';

/**
 * This component creates the image list component of the website
 * @returns a iamge component of respective hotels
 */

function ImageList(props) {
  const { subImages } = props;

  return (
    <div className="imageList">
      <div className="mainImageDiv">
        <img className="mainImage" src={subImages[0].url} alt="logo" />
      </div>
      <div className="subImages">
        <div className="subImageDiv">
          <img className="subImage" src={subImages[1].url} alt="logo" />
        </div>
        <div className="subImageDiv">
          <img className="subImage" src={subImages[2].url} alt="logo" />
        </div>
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
