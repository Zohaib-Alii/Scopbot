import React, { useCallback, useEffect, useState } from "react";
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
} from "./initial-elements";
import { handleGptApi } from "./gptApi";
import TextUpdaterNode from "./TextUpdaterNode";
import { wrapInArray } from "./utils";

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);
// const nodeTypes = { textUpdater: () => <TextUpdaterNode /> };
let itration = 0;
const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const createNodes = ({
    gptResponse,
    nodeId,
    clickedNodePosition = { x: 0 },
  }) => {
    console.log("createNodes func call", "gpt res", gptResponse);
    const newNodes = [];
    const newEdges = [];
    // Calculate the x-coordinate for the next node with an increment of 300 pixels
    let nextX = clickedNodePosition.x - 400; // Start with 300 pixels to the right of the clicked node
    let nodesLength = nodes.length;
    let gptUpdatedRes = wrapInArray(gptResponse);
    gptUpdatedRes.forEach((res, ind) => {
      const length = nodes.length + 3;
      const newNode = {
        id: `node-${nodesLength > 1 ? nodesLength + ind : ind + 1}`,
        type: "textUpdater",
        targetPosition: "top",
        position: { x: nextX + 400 * ind, y: Number(`${length + itration}00`) }, // Calculate x-coordinate with an increment of 300 pixels
        data: {
          value: wrapInArray(res.content),
          heading: res.heading,
        },
      };

      const newEdge = {
        // id: `${ind}-edge`, // Assigning a unique ID for each edge
        id: `node-${nodesLength > 1 ? nodesLength + ind : ind + 1}`,
        source: nodeId,
        target: `node-${nodesLength > 1 ? nodesLength + ind : ind + 1}`,
        sourceHandle: "b",
        type: "smoothstep",
        animated: true,
        style: { stroke: "brown" },
        // type: "step",
      };

      newNodes.push(newNode);
      newEdges.push(newEdge);
    });

    itration++;

    const updatedNodes = [...nodes, ...newNodes];
    const updatedEdges = [...edges, ...newEdges];
    console.log("updatedNodes", updatedNodes, updatedEdges);
    setNodes(updatedNodes);
    setEdges(updatedEdges);
  };

  const apiHandler = async ({ inputData, nodeId }) => {
    // update the first node content
    console.log("api handler click");
    if (nodeId === "node-0" && inputData) {
      nodes[0].data.value = [inputData];
      setNodes([...nodes]);
    }
    const res = await handleGptApi(inputData);
    const updatedRes = JSON.parse(res).epics || JSON.parse(res);
    createNodes({ gptResponse: updatedRes, nodeId });
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      // onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      nodeTypes={{
        textUpdater: (node) => (
          <TextUpdaterNode node={node} apiHandler={apiHandler} />
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
  );
};

export default OverviewFlow;
