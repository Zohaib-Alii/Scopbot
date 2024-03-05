import OpenAI from "openai";
import { generateQuery } from "./utils";
let apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});
export const handleGptApi = async ({
  inputData = "task management system",
  selectedNode = false,
  firstNode,
  scope,
}) => {
  let summarizeData = null;
  let summary,
    value,
    heading = null;

  if (selectedNode) {
    const {
      heading: nodeHeading,
      value: nodeValue,
      summary: nodeSummary,
    } = createPromt({
      inputData,
      selectedNode,
    });

    heading = nodeHeading || heading;
    value = nodeValue || value;
    summary = nodeSummary || summary;

    console.log("heading", heading, value);

    if (inputData && summary) {
      summarizeData = murgeInputDataWithSummary(inputData, summary);
    }
  }
  const query = generateQuery({ scope, userInput: inputData });
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: query,
      },
    ],
    // model: "gpt-3.5-turbo-1106",
    model: "gpt-4",
  });
  console.log("gpt responce", completion.choices[0].message.content);
  return completion.choices[0].message.content;
};

const createPromt = ({ input, selectedNode }) => {
  let heading = null;
  let value = null;
  let summary = null;
  if (selectedNode) {
    heading = selectedNode.data.heading;
    value = selectedNode.data.value;
    summary = selectedNode.data.summary;
  }
  return { heading, value, summary };
};
const murgeInputDataWithSummary = (inputData, summary) => {
  return `${inputData} ${summary}`;
};
