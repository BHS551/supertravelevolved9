import React, { useState } from "react";

export const SearchPage = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [inputActivities, setInputActivities] = useState("");
  const [inputPreferredLocations, setInputPreferredLocations] = useState("");

  const handleInputCountryChange = (e) => {
    setInputCountry(e.target.value);
  };

  const handleInputActivitiesChange = (e) => {
    setInputActivities(e.target.value);
  };

  const handleInputPreferredLocationsChange = (e) => {
    setInputPreferredLocations(e.target.value);
  };

  const handleButtonClick = () => {
    // Access input values and perform desired logic
    console.log("Country:", inputCountry);
    console.log("Preferred activities:", inputActivities);
    console.log("Preferred locations:", inputPreferredLocations);
  };

  return (
    <>
    <header className="App-header">
        <h2>Super Travel Evolved</h2>
      </header>
      <body className="App-content">
        <span>
          <input className="search-input" type="text" name="country" placeholder='Country' value={inputCountry} onChange={handleInputCountryChange} />
        </span>
        <span>
          <input className="search-input" type="text" name="activities" placeholder='Activities' value={inputActivities} onChange={handleInputActivitiesChange} />
        </span>
        <span>
          <input className="search-input" type="text" name="location-preferences" placeholder='Location preferences' value={inputPreferredLocations} onChange={handleInputPreferredLocationsChange} />
        </span>
        <button onClick={()=> handleButtonClick()} className="btn btn-white"> Generate </button>
      </body>
    </>
  );
};