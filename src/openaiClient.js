import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:  import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true ,
});

const generateQuestions = async (topic, language, number) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that generates trivia questions.",
      },
      {
        role: "user",
        content: `Generate trivia question on the topic of ${topic} in ${language} language with a definitive answer and 3 incorrect answers in the following JSON format:", вы можете написать "Please generate a trivia question in ${language} language on the topic of ${topic}, with a clear and concise definitive answer and 3 plausible incorrect answers in the provided JSON format.`,
      },
    ],
    temperature: 0.7,
    max_tokens: 256,
    n: Number(number),
  });
  const generatedQuestions = response.choices.map((choice) => {
    const questionJSON = JSON.parse(choice.message.content);
    return questionJSON;
  });

  //console.log(generatedQuestions);
  return generatedQuestions;
};

export default generateQuestions;
