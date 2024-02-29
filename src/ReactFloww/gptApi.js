import OpenAI from "openai";
const apiKey = "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";
const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
export const handleGptApi = async (inputData) => {
  debugger;
  const completion = await openai.chat.completions.create({
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Generate 3 Epics for this idea ${inputData}. Provide your answer in JSON structure like this {"heading": "<The name of epic>", "content":"[<The epic detail that you will generate, generate in bullet points and send them in an array>]"}`,
      },
      // {
      //   role: "assistant",
      //   content: "The Los Angeles Dodgers won the World Series in 2020.",
      // },
      // { role: "user", content: "Where was it played?" },
    ],
    model: "gpt-3.5-turbo-1106",
  });
  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
};
