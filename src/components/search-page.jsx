import React, { useEffect, useState } from "react";
import crossFrunctionalitiesService from "../services/cross-frunctionalities";
import SearchResponseImage from "./search-response-image";

const testImages = [
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-uOkbxpE6BdjZea2dQwj8tYwO/user-wP8QioaiI2q1gssAyohAIWr4/img-mGqvBfYme8jQqgM1kqxribF9.png?st=2023-04-15T19%3A31%3A05Z&se=2023-04-15T21%3A31%3A05Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-15T19%3A31%3A25Z&ske=2023-04-16T19%3A31%3A25Z&sks=b&skv=2021-08-06&sig=NrlySuZaumIIxJBVLaxbKyxq0acBUu5z6P42tDcqE%2B0%3D",
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-uOkbxpE6BdjZea2dQwj8tYwO/user-wP8QioaiI2q1gssAyohAIWr4/img-tauj4wYGqYnR43zZk3tfQuMB.png?st=2023-04-15T19%3A31%3A23Z&se=2023-04-15T21%3A31%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-15T19%3A29%3A41Z&ske=2023-04-16T19%3A29%3A41Z&sks=b&skv=2021-08-06&sig=QpADtdsZKacrLJfnm0n8QXmtqYQc/PD4yugGjuRNUM0%3D",
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-uOkbxpE6BdjZea2dQwj8tYwO/user-wP8QioaiI2q1gssAyohAIWr4/img-kdnQ2N6WOFv0oGFoKzDhkkbI.png?st=2023-04-15T19%3A31%3A16Z&se=2023-04-15T21%3A31%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-15T19%3A29%3A28Z&ske=2023-04-16T19%3A29%3A28Z&sks=b&skv=2021-08-06&sig=HCcqM3gPAKffyf5BOhX/k66F34PqK52kWi4miKJv1ws%3D",
]

export const SearchPage = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [inputActivities, setInputActivities] = useState("");
  const [inputPreferredLocations, setInputPreferredLocations] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [imageUrls, setGeneratedImages] = useState(testImages);

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
        <SearchResponseImage imageUrls={imageUrls} />
    </>
  );
};