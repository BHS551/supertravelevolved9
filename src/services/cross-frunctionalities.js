import textGenerator from "./text-generator";

const generateSuggestionWithImages = async generationParametters => {
    const { country, activities, preferredLocations } = generationParametters;
    return await textGenerator.generateText(`describe the characteristics of tourist places to travel in ${country}, to do something like ${activities} and visit places such as ${preferredLocations}`);
}

export default { generateSuggestionWithImages }