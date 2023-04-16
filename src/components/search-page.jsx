import React, { useEffect, useState } from "react";
import crossFrunctionalitiesService from "../services/cross-frunctionalities";
import SearchResponseList from "./search-response-list";
import LoadingSpinner from "./spinner";
import Dictaphone from "./dictaphone";

export const SearchPage = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [inputActivities, setInputActivities] = useState("");
  const [inputRareness, setInputRareness] = useState("");
  const [generatedResponseData, setGeneratedResponseData] = useState([]);
  const [generatedItineraryData, setGeneratedItineraryData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [loadingItinerary, setLoadingItinerary] = useState(false);

  useEffect(() => {
    if (generatedResponseData.length !== 0) {
      setLoadingStatus(false);
      handleItineraryGeneration();
    }
  }, [generatedResponseData]);
  
  useEffect(() => {
    if (generatedItineraryData.length !== 0) {
      setLoadingItinerary(false);
    }
  }, [generatedItineraryData]);

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

  const handleInputRarenessChange = (e) => {
    setInputRareness(e.target.value);
  };

  const handleItineraryGeneration = async () => {
    setLoadingItinerary(true);
    let generatedItineraryData = await crossFrunctionalitiesService.generateSuggestionWithImages(generatedResponseData, "itinerary");
    setGeneratedItineraryData(generatedItineraryData);
  }

  const handleButtonClick = async () => {
    setLoadingStatus(true);
    let generatedResponse = await crossFrunctionalitiesService.generateSuggestionWithImages({
        country: inputCountry,
        activities: inputActivities,
        rareness: inputRareness
    }, "response");
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
            <input className="search-input" type="text" name="rareness" placeholder='Rareness' value={inputRareness} onChange={handleInputRarenessChange} />
            </span>
            <LoadingSpinner isLoading={loadingStatus} />
            <span>
                <button disabled={loadingStatus} onClick={()=> handleButtonClick()} className="btn btn-white"> Generate </button>
            </span>
        </div>
        <SearchResponseList items={generatedResponseData} />
        ========================== Itinerary =============================
        <LoadingSpinner isLoading={loadingItinerary} />
        <SearchResponseList items={generatedItineraryData} />
    </div>
  );
};
