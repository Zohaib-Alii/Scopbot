import { handleGptApi } from "./gptApi";

export function wrapInArray(input) {
  if (!Array.isArray(input)) {
    return [input];
  }
  return input;
}

export function generateQuery({ scope, userInput }) {
  if (scope == "Epic")
    return `Act as a project manager and generate atleast 4 ${scope} for user query: ${userInput} . Provide your answer in JSON structure like this {"details": [{"heading": "<The name of epic>", "content":<The 3 line epic detail that you will generate>} ], "summary": <create summary that you give me the content >}`;
  else if (scope == "Feature")
    return `Act as a project manager and generate atleast 4 ${scope} for user query: ${userInput} . Provide your answer in JSON structure like this {"details": [{"heading": "<The name of feature>", "content":[<The feature detail that you will generate, generate in bullet points and send them in an array>]}], "summary": <create summary that you give me the content>}`;
  else if (scope == "Task")
    return `Act as a project manager and generate atleast 4 ${scope} for user query: ${userInput} . Provide your answer in JSON structure like this {"details": [{"heading": "<The name of epic>", "content":[<The task detail that you will generate, generate in bullet points and send them in an array>]} ], "summary": <create summary that you give me the content >}`;
  else if (scope == "User Story")
    return `Act as a project manager and generate atleast 4 ${scope} for user query: ${userInput} . Provide your answer in JSON structure like this {"details": [{"heading": "<The name of feature>", "content":[<The feature detail that you will generate, generate in bullet points and send them in an array>]}], "summary": <create summary that you give me the content>}`;
  else if (scope == "pdf")
    return `write a summry here is an array of content ${userInput} i want complete summry in documents`;
}
export const handleGenrateSrs = async ({
  summary,
  setSummary,
  setGenerateSRS,
}) => {
  const res = await handleGptApi({ inputData: summary, scope: "pdf" });
  setSummary(res);
  setGenerateSRS(true);
  console.log("data", summary, res);
};
