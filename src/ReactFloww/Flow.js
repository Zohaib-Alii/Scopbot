import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes as initialNodes,
  edges as initialEdges,
  gptResponse,
  hardCodeEdges,
  hardCodeNode,
} from "./initial-elements";
import TextUpdaterNode from "./utils";
import { handleGptApi } from "./gptApi";

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);
// const nodeTypes = { textUpdater: () => <TextUpdaterNode /> };
let itration = 0;
const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [inputData, setInputData] = useState("");
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  let otherNode = [
    {
      id: "node-2",
      type: "textUpdater",
      targetPosition: "top",
      position: { x: 0, y: 200 },
      data: { label: "node 2", value: "node 2 asd" },
    },
    {
      id: "node-3",
      type: "textUpdater",
      targetPosition: "top",
      position: { x: 200, y: 200 },
      data: { label: "node 3" },
    },
  ];
  // const createNodes = (newtext) => {
  //   const res = gptResponse.map((res, ind) => {
  //     let length = nodes.length + 1;
  //     let indd = ind == 0 ? ind - 2 : ind + 5;
  //     let node = {
  //       id: `node-${ind + 1}`,
  //       type: "textUpdater",
  //       targetPosition: "top",
  //       position: { x: Number(`${indd}00`), y: Number(`${length}00`) },
  //       data: {
  //         label: `${newtext} ${ind}`,
  //         value: res.content,
  //         heading: res.heading,
  //       },
  //     };
  //     let edge = {
  //       id: ind,
  //       source: `node-${itration}`,
  //       target: `node-${ind + 1}`,
  //       sourceHandle: "b",
  //     };
  //     return { edge, node };
  //   });
  //   itration++;
  //   const edgess = res.map((ed) => ed.edge);
  //   const nodess = res.map((node) => node.node);
  //   const newNodes = [...nodes, ...nodess];
  //   const newEdges = [...edges, ...edgess];
  //   console.log(
  //     "res",
  //     res,
  //     "before edge",
  //     edges,
  //     "before nodes",
  //     nodes,
  //     "after nodes",
  //     nodess,
  //     "after edges",
  //     edgess
  //   );
  //   // const newEdges = [ ...edgess];
  //   // console.log("newEdges", newEdges);
  //   setEdges(newEdges);
  //   setNodes(newNodes);
  //   // setEdges(hardCodeEdges);
  //   // setNodes(hardCodeNode);
  // };

  const createNodes = ({
    gptResponse,
    nodeId,
    clickedNodePosition = { x: 0 },
  }) => {
    debugger;
    const newNodes = [];
    const newEdges = [];
    debugger;
    console.log("nodeId", nodeId, itration);
    // Calculate the x-coordinate for the next node with an increment of 300 pixels
    let nextX = clickedNodePosition.x - 300; // Start with 300 pixels to the right of the clicked node
    let nodesLength = nodes.length;
    gptResponse.forEach((res, ind) => {
      const length = nodes.length + 1;
      const newNode = {
        id: `node-${nodesLength > 1 ? nodesLength + ind : ind + 1}`,
        type: "textUpdater",
        targetPosition: "top",
        position: { x: nextX + 300 * ind, y: Number(`${length}00`) }, // Calculate x-coordinate with an increment of 300 pixels
        data: {
          // label: `${newtext} ${ind}`,
          value: res.content,
          heading: res.heading,
        },
      };

      const newEdge = {
        id: `${ind}-edge`, // Assigning a unique ID for each edge
        source: nodeId,
        target: `node-${nodesLength > 1 ? nodesLength + ind : ind + 1}`,
        sourceHandle: "b",
      };

      newNodes.push(newNode);
      newEdges.push(newEdge);
    });

    itration++;

    const updatedNodes = [...nodes, ...newNodes];
    const updatedEdges = [...edges, ...newEdges];

    setNodes(updatedNodes);
    setEdges(updatedEdges);
  };

  const handleTextChange = (newtext, node) => {
    debugger;
    console.log("node", node);
    // createNodes(newtext, node.id);
    setInputData(newtext);
  };
  console.log("nodes", nodes, "edges", edges);
  const apiHandler = async ({ nodeId = "node-0" }) => {
    const res = await handleGptApi(inputData);
    const updatedRes = JSON.parse(res).epics;
    createNodes({ gptResponse: updatedRes, nodeId });
  };
  return (
    <>
      <button onClick={apiHandler}>test gpt</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        nodeTypes={{
          textUpdater: (node) => (
            <TextUpdaterNode
              onTextChange={handleTextChange}
              node={node}
              inputData={inputData}
            />
          ),
        }}
        attributionPosition="top-right"
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === "input") return "#0041d0";
            if (n.type === "output") return "#ff0072";
            if (n.type === "default") return "#1a192b";

            return "#eee";
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;

            return "#F1F0EE";
          }}
          nodeBorderRadius={2}
        />
        <Controls />
        <Background color="#aaa" gap={20} />
      </ReactFlow>
    </>
  );
};

export default OverviewFlow;
