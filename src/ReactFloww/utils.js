import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import "./styles.css";
import { handleGptApi } from "./gptApi";
import { useDispatch } from "react-redux";
import { setInputValue, setSelectedNode } from "../models/user";
const handleStyle = { left: 10 };

function TextUpdaterNode({
  data,
  isConnectable,
  onTextChange,
  node,
  apiHandler,
}) {
  const [inputData, setInputData] = useState("");
  const [selectedNode, setSelectedNode] = useState("");
  const dispatch = useDispatch();
  // const onChange = useCallback(
  //   (evt) => {
  //     // onTextChange(evt.target.value, node);
  //     debugger;
  //     dispatch(setInputValue({ inputData: evt.target.value, node }));
  //   },
  //   [onTextChange]
  // );
  // console.log("data", data);
  const handleApiCall = async () => {
    console.log("test");
    // dispatch(setInputValue(inputData));
    // dispatch(setSelectedNode(selectedNode));
    const res = await handleGptApi(inputData);
    console.log("res", res);
  };
  const handleTextChange = (evt) => {
    setInputData(evt.target.value);
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
          ? node?.data?.value?.map((val, ind) => (
              <div key={ind}>
                <textarea
                  rows={3}
                  // cols={20}
                  key={node?.id}
                  defaultValue={val || "placeholder"}
                  name="text"
                  // onChange={onChange}
                  onChange={handleTextChange}
                  className="nodrag"
                />
              </div>
            ))
          : null}
        <button onClick={() => apiHandler({ inputData, nodeId: node.id })}>
          Generate Response
        </button>
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
