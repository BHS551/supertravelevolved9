import React, { useEffect, useState } from "react";
import crossFrunctionalitiesService from "../services/cross-frunctionalities";

export const SearchPage = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [inputActivities, setInputActivities] = useState("");
  const [inputPreferredLocations, setInputPreferredLocations] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");

  const handleInputCountryChange = (e) => {
    setInputCountry(e.target.value);
  };

  const handleInputActivitiesChange = (e) => {
    setInputActivities(e.target.value);
  };

  const handleInputPreferredLocationsChange = (e) => {
    setInputPreferredLocations(e.target.value);
  };

  const handleButtonClick = async () => {
    const generatedResponse = await crossFrunctionalitiesService.generateSuggestionWithImages({
        country: inputCountry,
        activities: inputActivities
    });
    setGeneratedResponse(generatedResponse);
  };

  return (
    <>
        <div className="search-form">
            <span>
            <input className="search-input" type="text" name="country" placeholder='Country' value={inputCountry} onChange={handleInputCountryChange} />
            </span>
            <span>
            <input className="search-input" type="text" name="activities" placeholder='Activities' value={inputActivities} onChange={handleInputActivitiesChange} />
            </span>
            <span>
            <input className="search-input" type="text" name="location-preferences" placeholder='Location preferences' value={inputPreferredLocations} onChange={handleInputPreferredLocationsChange} />
            </span>
            <span>
                <button onClick={()=> handleButtonClick()} className="btn btn-white"> Generate </button>
            </span> 
        </div>
        <div className="search-response">
            <span>
                <p>{JSON.stringify(generatedResponse)}</p>
            </span>
        </div>
    </>
  );
};