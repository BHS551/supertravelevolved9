import imageGenerator from "./image-generator";
import textGenerator from "./text-generator";

const generateSuggestionWithImages = async (generationParametters, type) => {
    const prompGenerator = type === "itinerary" ? generateItineraryPrompt : generateTextPrompt;
    const textRawResponse = await textGenerator.generateText(prompGenerator(generationParametters));
    const textResponseItems = textGenerator.parseTextListToJson(textRawResponse);
    const imageResponseRequests = textResponseItems.map(tResItem => {
        const { place, description } = tResItem;
        return new Promise (async (resolve) => {
            const placeImageUrl = await imageGenerator.generateImage(place);
            const descriptionImageUrl = await imageGenerator.generateImage(description);
            resolve({ place, placeImageUrl, descriptionImageUrl });
        });
    });
    const imageResponseItems = await Promise.all(imageResponseRequests);
    const response = textResponseItems.map( tResItem => {
        const { place, description } = tResItem;
        const { placeImageUrl, descriptionImageUrl } = imageResponseItems.find(iResItem => iResItem.place === place);
        return {
            place,
            description,
            placeImageUrl,
            descriptionImageUrl
        }
    });
    return response;
}

const generateTextPrompt = (generationParametters) => {
    const { country = 'colombia', activities = 'hiking', rareness = 'uncommon' } = generationParametters;
    const budget = 3000;
    return `Suggest three ${rareness} places to visit in ${country} based on ${activities} among other similars, describe the places using cities or specific businesses. Make it organized so it is easy to read. Take in consideration that my budget is ${budget} dollars.

    Country: ${country}
    Places: 
    Activities: ${activities}
    `
}

const generateItineraryPrompt = placesInformation => {
    const filteredPlacesinfo = placesInformation.map(placeInfo => {
        return {
            place: placeInfo.place,
            description: placeInfo.description
        }
    });
    return `Suggest an itinerary based on this information: ${JSON.stringify(filteredPlacesinfo)}
        in the following format 
    1: day 1: activities for the day 1.
    2: day 2: activities for the day 2.
    3: day 3: activities for the day 3.
    4: day 4: activities for the day 4.
    5: day 5: activities for the day 5.
    6: day 6: activities for the day 6.

    `
}

const translatePlaceInformation = async (placeInformation, language) => {
    let places = placeInformation.map(place => {return {VAL1: place.place, VAL2: place.description}});
    let promt = `translate this array ${JSON.stringify(places)} to ${language} and return it with the same structure`;
    const textRawResponse = await textGenerator.generateText(promt);
    const newPlacesInfomation = JSON.parse(textRawResponse).map((item, index) => {
        return {
            place: item.VAL1,
            description: item.VAL2,
            placeImageUrl: placeInformation[index].placeImageUrl,
            descriptionImageUrl: placeInformation[index].descriptionImageUrl
        }
    });
    return newPlacesInfomation;
}

export default { generateSuggestionWithImages, translatePlaceInformation}


/**
 *Suggest four ${rareness} options of places to visit in ${country} based on the following data:
    1. description: describe the places widely using cities or specific businesses. 
    2. how to organize it: Make it organized so it is easy to read. 
    3. required: make sure to mention at least 10 characteristics of each place. 
    4. required: make sure to create an itenirary with that data
    5. Country: ${country}
    6. preferred activities: ${activities}
    7. budget: with a budget of maximum ${budget}
    Country: ${country}
    Places: 
    Activities: ${activities}
 */