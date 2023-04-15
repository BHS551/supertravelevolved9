
const generateImage = async prompt => {
    response = await openai.createImage({
      prompt,
      n: 1,
      size:"1024x1024"
    })
    return response.data.data;
  }

  
  export default { generateImage }