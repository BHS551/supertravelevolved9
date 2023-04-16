import openai from "../adapters/openia-adapter";

const generateImage = async prompt => {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size:"1024x1024"
    })
    return response.data.data[0].url;
  }

  
  export default { generateImage }