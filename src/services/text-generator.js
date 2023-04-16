import openai from "../adapters/openia-adapter";

const generateText = async prompt => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    n: 1,
    max_tokens: 3000,
    temperature: 0.7,
  });
  return response.data.choices[0].text;
}

const parseTextListToJson = text => {
  let responseItems = text.split(/[\r\n]+/);
  responseItems = responseItems.filter(resItem => resItem.includes('.') || resItem.includes(':'));
  const mappedList = [];
  responseItems.forEach(resItem => {
    const regex = /\d+\./;
    resItem = resItem.replace(regex, '');
    const index = resItem.indexOf(":");
    const place = resItem.slice(0, index);
    const description = resItem.slice(index + 1);


    const resObject = {
      place,
      description
    }
    mappedList.push(resObject);
  });
  
  return mappedList;
}

export default { generateText, parseTextListToJson }