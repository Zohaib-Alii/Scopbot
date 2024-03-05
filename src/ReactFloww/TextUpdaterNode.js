import { useState } from "react";
import { Handle, Position } from "reactflow";
import "./styles.css";
import { Button, Input } from "antd";
import { scope } from "./constant";

function TextUpdaterNode({
  isConnectable,
  node,
  apiHandler,
  loading,
  allNodes,
}) {
  const [inputData, setInputData] = useState("");

  const handleTextChange = (evt) => {
    setInputData(evt.target.value);
  };
  const firstNode = node.id == "node-0";
  const findNode = allNodes.find((no) => no.id == node.id);
  console.log("node", node, node.itration, findNode);
  return (
    <div className="main">
      <div className={firstNode ? "firsthead" : "main-headings"}>
        {node?.data?.heading}
      </div>
      <div className="text-updater-node wrapper">
        {!firstNode && (
          <Handle
            type="target"
            position={Position.Top}
            isConnectable={isConnectable}
          />
        )}
        {node
          ? (node?.data?.value || []).map((val, ind) => (
              <div key={ind} className="mainInput manrope">
                <Input.TextArea
                  rows={3}
                  key={node?.id}
                  defaultValue={val || "placeholder"}
                  name="text"
                  onChange={handleTextChange}
                  className="manrope"
                  // className="nodrag"
                />
              </div>
            ))
          : null}
        {(firstNode || scope[findNode.itration]) && (
          <Button
            key={node.id}
            onClick={() =>
              apiHandler({
                inputData,
                node,
                heading: node?.data?.heading,
                scope: firstNode ? "Epic" : scope[findNode.itration],
              })
            }
            loading={loading}
          >
            Generate {firstNode ? "Epic" : scope[findNode.itration]}
          </Button>
        )}

        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          isConnectable={isConnectable}
        />
      </div>
    </div>
  );
}

export default TextUpdaterNode;
