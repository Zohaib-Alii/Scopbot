import React from "react";
import { MarkerType } from "reactflow";

// export const nodes = [
//   {
//     id: "1",
//     type: "textUpdater",
//     data: {
//       label: "Welcome to React Flow",
//     },
//     position: { x: 250, y: 0 },
//   },
//   // {
//   //   id: "2",
//   //   data: {
//   //     label: (
//   //       <>
//   //         This is a <strong>default node</strong>
//   //       </>
//   //     ),
//   //   },
//   //   position: { x: 100, y: 100 },
//   // },
//   // {
//   //   id: "3",
//   //   data: {
//   //     label: (
//   //       <>
//   //         This one has a <strong>custom style</strong>
//   //       </>
//   //     ),
//   //   },
//   //   position: { x: 400, y: 100 },
//   //   style: {
//   //     background: "#D6D5E6",
//   //     color: "#333",
//   //     border: "1px solid #222138",
//   //     width: 180,
//   //   },
//   // },
//   // {
//   //   id: "4",
//   //   position: { x: 250, y: 200 },
//   //   data: {
//   //     label: "Another default node",
//   //   },
//   // },
//   // {
//   //   id: "5",
//   //   data: {
//   //     label: "Node id: 5",
//   //   },
//   //   position: { x: 250, y: 325 },
//   // },
//   // {
//   //   id: "6",
//   //   type: "output",
//   //   data: {
//   //     label: (
//   //       <>
//   //         An <strong>output node</strong>
//   //       </>
//   //     ),
//   //   },
//   //   position: { x: 100, y: 480 },
//   // },
//   // {
//   //   id: "7",
//   //   type: "output",
//   //   data: { label: "Another output node" },
//   //   position: { x: 400, y: 450 },
//   // },
// ];

export const nodes = [
  {
    id: "node-0",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { label: "first Heading", value: ["first content"] },
  },
  // {
  //   id: "node-2",
  //   type: "output",
  //   targetPosition: "top",
  //   position: { x: 0, y: 200 },
  //   data: { label: "node 2" },
  // },
  // {
  //   id: "node-3",
  //   type: "output",
  //   targetPosition: "top",
  //   position: { x: 200, y: 200 },
  //   data: { label: "node 3" },
  // },
];
export const edges = [
  // { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
  // { id: "edge-2", source: "node-1", target: "node-3", sourceHandle: "b" },
];
// export const edges = [
//   { id: "e1-2", source: "1", target: "2", label: "this is an edge label" },
//   { id: "e1-3", source: "1", target: "3" },
//   {
//     id: "e3-4",
//     source: "3",
//     target: "4",
//     animated: true,
//     label: "animated edge",
//   },
//   {
//     id: "e4-5",
//     source: "4",
//     target: "5",
//     label: "edge with arrow head",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//   },
//   {
//     id: "e5-6",
//     source: "5",
//     target: "6",
//     type: "smoothstep",
//     label: "smooth step edge",
//   },
//   {
//     id: "e5-7",
//     source: "5",
//     target: "7",
//     type: "step",
//     style: { stroke: "#f6ab6c" },
//     label: "a step edge",
//     animated: true,
//     labelStyle: { fill: "#f6ab6c", fontWeight: 700 },
//   },
// ];

export const gptResponse = [
  {
    heading: "User Management and Authentication",
    content: [
      "Implement robust user authentication mechanisms",
      "Develop user roles and permissions management",
      "Enable single sign-on (SSO) integration with other platforms",
    ],
  },
  {
    heading: "Content Management",
    content: [
      "Create a system for organizing and categorizing learning content",
      "Support various content types such as videos, documents, quizzes, and interactive modules",
      "Implement version control for content updates and revisions",
    ],
  },
  {
    heading: "Course Creation and Management",
    content: [
      "Design intuitive tools for instructors to create and manage courses",
      "Support multimedia content embedding and sequencing",
      "Allow for collaboration among instructors in course development",
    ],
  },
  // {
  //   heading: "Assessment and Evaluation",
  //   content: [
  //     "Develop assessment tools including quizzes, exams, and assignments",
  //     "Enable automated grading where applicable",
  //     "Provide analytics for tracking learner progress and performance",
  //   ],
  // },
  // {
  //   heading: "Communication and Collaboration",
  //   content: [
  //     "Facilitate communication between instructors and learners through messaging and discussion forums",
  //     "Support group projects and collaborative activities",
  //     "Integrate with video conferencing tools for virtual classrooms or live sessions",
  //   ],
  // },
  // {
  //   heading: "Adaptive Learning and Personalization",
  //   content: [
  //     "Implement adaptive learning algorithms to tailor content to individual learner needs",
  //     "Offer personalized recommendations based on learner preferences and performance",
  //     "Enable competency-based progression and personalized learning paths",
  //   ],
  // },
  // {
  //   heading: "Integration and Extensibility",
  //   content: [
  //     "Integrate with external tools and systems such as CRM, HRIS, and content repositories",
  //     "Provide APIs and SDKs for custom integrations and extensions",
  //     "Support standards like SCORM and LTI for interoperability with other learning platforms",
  //   ],
  // },
  // {
  //   heading: "Accessibility and Usability",
  //   content: [
  //     "Ensure compliance with accessibility standards such as WCAG",
  //     "Design a user-friendly interface with intuitive navigation and responsive design",
  //     "Provide localization and internationalization features for multilingual support",
  //   ],
  // },
  // {
  //   heading: "Analytics and Reporting",
  //   content: [
  //     "Develop comprehensive analytics dashboards for administrators and instructors",
  //     "Track learner engagement, completion rates, and performance metrics",
  //     "Generate customizable reports for stakeholders and regulatory compliance",
  //   ],
  // },
  // {
  //   heading: "Security and Compliance",
  //   content: [
  //     "Implement robust data security measures to protect user information and learning content",
  //     "Ensure compliance with relevant regulations such as GDPR and COPPA",
  //     "Regularly audit and update security protocols to address emerging threats",
  //   ],
  // },
];

export const hardCodeNode = [
  {
    id: "1",
    type: "textUpdater",
    data: {
      label: "Welcome to React Flow",
    },
    position: { x: 100, y: 0 },
  },
  {
    id: "2",
    type: "textUpdater",
    data: {
      label: "Welcome to React Flow",
    },
    position: { x: -250, y: 200 },
  },
  {
    id: "3",
    type: "textUpdater",
    data: {
      label: "Welcome to React Flow",
    },
    position: { x: 0, y: 200 },
  },
  {
    id: "4",
    type: "textUpdater",
    data: {
      label: "Welcome to React Flow",
    },
    position: { x: 250, y: 200 },
  },
  {
    id: "5",
    type: "textUpdater",
    data: {
      label: "Welcome to React Flow",
    },
    position: { x: 500, y: 200 },
  },
  {
    id: "6",
    type: "textUpdater",
    data: {
      label: "Welcome to React Flow",
    },
    position: { x: 0, y: 400 },
  },
  {
    id: "7",
    type: "textUpdater",
    data: {
      label: "Welcome to React Flow",
    },
    position: { x: 0, y: 600 },
  },
];

export const hardCodeEdges = [
  { id: "1", source: "1", target: "2", sourceHandle: "b" },
  { id: "2", source: "1", target: "3", sourceHandle: "b" },
  { id: "3", source: "1", target: "4", sourceHandle: "b" },
  { id: "4", source: "1", target: "5", sourceHandle: "b" },
  { id: "5", source: "2", target: "6", sourceHandle: "b" },
  { id: "6", source: "6", target: "7", sourceHandle: "b" },
];
