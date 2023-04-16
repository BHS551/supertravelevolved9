// React component
import React, { useState } from 'react';

const LanguageSelector = ({parentHandleLanguageChange}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // State to store the selected language

  const handleLanguageChange = (event) => {
    const newLenguage = event.target.value;
    setSelectedLanguage(newLenguage);
    parentHandleLanguageChange(newLenguage);
  }

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Select Language:</label>
      <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="english">English</option>
        <option value="español">Español</option>
        <option value="French">Français</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
}

export default LanguageSelector;