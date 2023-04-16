import React, { useState } from "react";
import crossFrunctionalitiesService from "../services/cross-frunctionalities";
import SearchResponseList from "./search-response-list";
import LoadingSpinner from "./spinner";
import Dictaphone from "./dictaphone";

export const SearchPage = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [inputActivities, setInputActivities] = useState("");
  const [inputPreferredLocations, setInputPreferredLocations] = useState("");
  const [generatedResponseData, setGeneratedResponseData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    setLoadingStatus(false);
  }, [generatedResponseData]);

  const handleInputCountryVoice = (text) => {
    setInputCountry(text);
  }

  const handleInputActivitiesVoice = (text) => {
    setInputActivities(text);
  }

  const handleInputCountryChange = (e) => {
    setInputCountry(e.target.value);
  }

  const handleInputActivitiesChange = (e) => {
    setInputActivities(e.target.value);
  };

  const handleInputPreferredLocationsChange = (e) => {
    setInputPreferredLocations(e.target.value);
  };

  const handleButtonClick = async () => {
    setLoadingStatus(true);
    let generatedResponse = await crossFrunctionalitiesService.generateSuggestionWithImages({
        country: inputCountry,
        activities: inputActivities
    });
    setGeneratedResponseData(generatedResponse);
  };

  return (
    <div className="search-container">
        <div className="search-form">
            <span>
              <input className="search-input" type="text" name="country" placeholder='Country' value={inputCountry} onChange={handleInputCountryChange} />
              <Dictaphone id='country-recordind' handler = {handleInputCountryVoice}/>
            </span>
            <span>
              <input className="search-input" type="text" name="activities" placeholder='Activities' value={inputActivities} onChange={handleInputActivitiesChange} />
              <Dictaphone id='activity-recording' handler = {handleInputActivitiesVoice}/>
            </span>
            <span>
            <input className="search-input" type="text" name="location-preferences" placeholder='Location preferences' value={inputPreferredLocations} onChange={handleInputPreferredLocationsChange} />
            </span>
            <LoadingSpinner isLoading={loadingStatus} />
            <span>
                <button disabled={loadingStatus} onClick={()=> handleButtonClick()} className="btn btn-white"> Generate </button>
            </span>
        </div>
        <SearchResponseList items={generatedResponseData} />
    </div>
  );
};
