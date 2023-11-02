import axios from "axios";

const generateQuestions = async (topic, language, number) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:1337/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that generates trivia questions.",
          },
          {
            role: "user",
            content: `Generate trivia question on the topic of ${topic} in ${language} language with a definitive answer and 3 incorrect answers in the following JSON format`,
          },
        ],
        temperature: 0.7,
        max_tokens: 256,
        n: number,
      },
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
      }
    );

    const generatedQuestions = response.data.choices.map((choice) => {
      const questionJSON = JSON.parse(choice.message.content);
      return questionJSON;
    });

    console.log(generatedQuestions);
    return generatedQuestions;
  } catch (error) {
    console.error(error);
    return null;
  }
};

generateQuestions("apples", "eng", 1);

export default generateQuestions;
