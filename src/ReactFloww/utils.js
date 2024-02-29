import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import "./styles.css";
import { handleGptApi } from "./gptApi";
const handleStyle = { left: 10 };

function TextUpdaterNode({
  data,
  isConnectable,
  onTextChange,
  node,
  inputData,
}) {
  const onChange = useCallback(
    (evt) => {
      onTextChange(evt.target.value, node);
    },
    [onTextChange]
  );
  // console.log("data", data);
  const test = () => {
    console.log("test");
  };
  return (
    <div>
      <div className="main-headings">{node?.data?.heading}</div>
      <div className="text-updater-node wrapper">
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />
        {node
          ? node?.data?.value.map((val) => (
              <div>
                <textarea
                  rows={3}
                  // cols={20}
                  key={node?.id}
                  defaultValue={val || "placeholder"}
                  name="text"
                  onChange={onChange}
                  className="nodrag"
                />
              </div>
            ))
          : null}
        <button onClick={test}>test gpt</button>
        {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
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
