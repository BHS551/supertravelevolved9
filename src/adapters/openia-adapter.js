const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  organization: process.env.REACT_APP_OPENAI_ORGANIZATION_ID,
});
const openai = new OpenAIApi(configuration);

export default openai;
