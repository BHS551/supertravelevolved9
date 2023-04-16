import openai from "../adapters/openia-adapter";

const generateText = async prompt => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    n: 1,
    max_tokens: 300,
  });
  return response.data.choices[0].text;
}

const parseTextListToJson = text => {
  let responseItems = text.split(/[\r\n]+/);
  responseItems = responseItems.filter(resItem => resItem.includes('.') && resItem.includes(':'));
  const mappedList = [];
  responseItems.forEach(resItem => {
    const splitedItem = resItem.split('.')[1].split(":");
    const resObject = {
      place: splitedItem[0],
      description: splitedItem[1]
    }
    mappedList.push(resObject);
  });
  
  return mappedList;
}

export default { generateText, parseTextListToJson }