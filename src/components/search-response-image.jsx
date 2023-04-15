import React from "react";

const ImageList = ( {imageUrls} ) => imageUrls.map( (imageUrl, index) => (
  <li>
    <span className="image-container">
      <img key={index} src={imageUrl} />
    </span>
  </li>
));


const SearchResponseImage = ({imageUrls = []}) => (
  <>
    <ImageList className="image-list" imageUrls={imageUrls} />
  </>
);

export default SearchResponseImage;