const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
  organization: 'org-uOkbxpE6BdjZea2dQwj8tYwO'
});
const openai = new OpenAIApi(configuration);

export default openai;
