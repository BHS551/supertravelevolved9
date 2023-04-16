import React from "react";


const ItemText = ({place, description}) => (
  <span className="item-text">
    <p className="item">{place}</p>
    <p className="item">{description}</p>
  </span>
)

const ItemImages = ({placeImageUrl, descriptionImageUrl}) => (
  <span className="item-images">
    <img src={placeImageUrl} />
    <img src={descriptionImageUrl} />
  </span>
)

const ItemList = ( { items = [] } ) => items.map( (item, index) => (
    <div key={index} className="item-container">
      { index % 2 === 0 ? (
        <>
          <ItemText place={item.place} description={item.description} />
          <ItemImages placeImageUrl={item.placeImageUrl} descriptionImageUrl={item.descriptionImageUrl} />
        </>
      ): (
        <>
          <ItemImages placeImageUrl={item.placeImageUrl} descriptionImageUrl={item.descriptionImageUrl} />
          <ItemText place={item.place} description={item.description} />
        </>
      )
      }
      
    </div>
));

const SearchResponse = ({items = []}) => (
  <div className="item-list-section">
    <div className="item-list">
      <ItemList items={items} />
    </div>
  </ div>
);



export default SearchResponse;