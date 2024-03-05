import OpenAI from "openai";
let apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});
export const handleGptApi = async ({
  inputData = "task management system",
  selectedNode = false,
  firstNode,
  inputType,
}) => {
  debugger;
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
      debugger;
    }
  }
  debugger;
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        // content: `Act as a project manager and create atleast 4${
        //   firstNode
        //     ? "4 feature must"
        //     : selectedNode.data.heading
        //     ? " 4 epics must"
        //     : "4 user story must"
        // } from the user ${
        //   firstNode ? "user" : selectedNode.data.heading
        // } requirements. Get the requirements from the user and create at least 4 epics and list them with description short and consisted. When the epics are listed now generate user stories based on each epic and then based on that create sub tasks. Dont send undifiend send atleast the headings and content .Write everything in bullet points short and consise also write all epics at once and then user stories and then tasks and subtasks .  Provide your answer in JSON structure like this {"heading": "<The name of epic>", "content":[<The epic detail that you will generate, generate in bullet points and send them in an array>]}`,
        content: `Act as a project manager and generate atleast 4 ${inputType} for user query: ${inputData} . Provide your answer in JSON structure like this [{"heading": "<The name of epic>", "content":<The 3 line epic detail that you will generate>} ,"summary": <create summary that you give me the content >]`,

        //         content: `Act as a project manager
        // 1- I want to generate minimum of 4 ${inputType} at least with minimum of 3-4 lines of description headings of epics like EPIC 1: Heading then below it description
        // 2- After epics are generated now generate user stories based on the epics generated above 4 minimum. Example --> User stories in bullet points
        // 3- Then generate 4 tasks based on the user stories and the Format of the task should be like this
        // Title
        // Description
        // Acceptance Criteria:`,
      },
      // {
      //   role: "user",
      //   content: inputData,
      // },
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
