import OpenAI from "openai";
const apiKey = "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";
const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
export const handleGptApi = async (inputData) => {
  const completion = await openai.chat.completions.create({
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          'Act as a project manager and create epics from the user input requirements. Get the requirements from the user and create at least 5 epics and list them with description short and consisted. When the epics are listed now generate user stories based on each epic and then based on that create sub tasks. Write everything in bullet points short and consise also write all epics at once and then user stories and then tasks and subtasks.  Provide your answer in JSON structure like this {"heading": "<The name of epic>", "content":"[<The epic detail that you will generate, generate in bullet points and send them in an array>]"}',
      },
      {
        role: "user",
        content: "i want a ecommerce website",
        // content: inputData,
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
