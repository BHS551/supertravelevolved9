import textGenerator from "./text-generator";

const generateSuggestionWithImages = async generationParametters => {
    const { country, activities, preferredLocations } = generationParametters;
    return await textGenerator.generateText(`Suggest three places to visit in ${country} based on these ${activities} and describe the places using cities or specific businesses. Make it organized so it is easy to read

    Country: Colombia
    Places: Guatape, Caño Cristales, Desierto de la Tatacoa, Tayrona National Park, Cartagena, San Andres Island
    Activities: Hiking, Waterfalls, Cultural Tours, Beaches, Scuba Diving, Snorkeling
    
    Country: France
    Places: Paris, Mont Saint-Michel, Loire Valley, Bordeaux, Nice, Marseille
    Activities: Wine Tasting, Cycling, Art Museums, Fine Dining, Beaches, Sailing
    
    Country: Brazil
    Places: Sao Paulo, Parque do Ibirapuera, Cataratas do Iguaçu, Rio de Janeiro, Salvador, Florianópolis
    Activities: Beaches, Nature Reserves, Samba Dancing, Carnivals, Colonial History, Surfing
    
    Country: Mexico
    Places: Tulum, Mexico City, Chichen Itza, Puerto Vallarta, Cancun, Cozumel
    Activities: Archaeological Sites, Beaches, Food Tours, Scuba Diving, Snorkeling, Surfing
    
    Country: Japan
    Places: Tokyo, Kyoto, Hiroshima, Hokkaido, Okinawa, Nara
    Activities: Temples and Shrines, Traditional Arts and Crafts, Cherry Blossom Viewing, Winter Sports, Snorkeling, Nature Hikes
    
    Country: Italy
    Places: Rome, Florence, Venice, Amalfi Coast, Sicily, Cinque Terre
    Activities: Art and Architecture, Fine Dining, Beaches, Historical Sites, Volcano Hikes, Scuba Diving
    
    Country: Canada
    Places: Toronto, Vancouver, Banff, Quebec City, Niagara Falls, Whistler
    Activities: Skiing and Snowboarding, Hiking, Whale Watching, Kayaking, Urban Exploring, Fine Dining
    
    Country: Australia
    Places: Sydney, Melbourne, Great Barrier Reef, Uluru, Perth, Gold Coast
    Activities: Beaches, Scuba Diving, Surfing, Aboriginal Culture, Wine Tasting, Theme Parks
    
    Country: ${country}
    Places: 
    Activities: ${activities}`);
}

export default { generateSuggestionWithImages }