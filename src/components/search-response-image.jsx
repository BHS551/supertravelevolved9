import React from "react";

const ImageList = ( {imageUrls} ) => imageUrls.map( (imageUrl, index) => (
    <span className="image-container">
      <img key={index} src={imageUrl} />
    </span>
));


const SearchResponseImage = ({imageUrls = []}) => (
  <div className="image-list-section">
    <div className="image-list">
      <ImageList imageUrls={imageUrls} />
    </div>
  </ div>
);

export default SearchResponseImage;