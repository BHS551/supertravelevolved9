import React, { useState } from "react";
import crossFrunctionalitiesService from "../services/cross-frunctionalities";
import SearchResponseImage from "./search-response-image";
import Dictaphone from "./dictaphone";

const testImages = [
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
    "https://grupoinmotion.com/wp-content/uploads/2020/12/inteligencia-artificial-770x400.jpg",
]

export const SearchPage = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [inputActivities, setInputActivities] = useState("");
  const [inputPreferredLocations, setInputPreferredLocations] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [imageUrls, setGeneratedImages] = useState(testImages);

  const handleInputCountryVoice = (text) => {
    console.log("calling country voice handler");
    setInputCountry(text);
  }

  const handleInputActivitiesVoice = (text) => {
    console.log("calling activities voice handler");
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
    const generatedResponse = await crossFrunctionalitiesService.generateSuggestionWithImages({
        country: inputCountry,
        activities: inputActivities
    });
    setGeneratedResponse(generatedResponse);
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
            <span>
                <button onClick={()=> handleButtonClick()} className="btn btn-white"> Generate </button>
            </span>
            <div className="search-response">
              <span>
                  <p>{JSON.stringify(generatedResponse)}</p>
              </span>
            </div>
        </div>
        <SearchResponseImage imageUrls={imageUrls} />
    </div>
  );
};