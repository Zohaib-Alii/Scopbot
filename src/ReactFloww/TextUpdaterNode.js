import { useState } from "react";
import { Handle, Position } from "reactflow";
import "./styles.css";
import { Button, Input } from "antd";

function TextUpdaterNode({ isConnectable, node, apiHandler }) {
  const [inputData, setInputData] = useState("");

  const handleTextChange = (evt) => {
    setInputData(evt.target.value);
  };
  const firstNode = node.id == "node-0";
  return (
    <div>
      <div className="main-headings">{node?.data?.heading}</div>
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
              <div key={ind} className="mainInput">
                <Input.TextArea
                  rows={3}
                  key={node?.id}
                  defaultValue={val || "placeholder"}
                  name="text"
                  onChange={handleTextChange}
                  // className="nodrag"x
                />
              </div>
            ))
          : null}
        <Button
          key={node.id}
          onClick={() => apiHandler({ inputData, nodeId: node.id })}
          // loading={true}
        >
          Generate Response
        </Button>

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
