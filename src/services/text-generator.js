import openai from "../adapters/openia-adapter";

const generateText = async prompt => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    n: 1,
    max_tokens: 300,
  });
  return response.data.choices;
}

export default { generateText }