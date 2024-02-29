import ReactFlow from "reactflow";
import "./App.css";
import OverviewFlow from "./ReactFloww/Flow";

function App() {
  // const initialNodes = [
  //   { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  //   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  // ];
  // const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

  return (
    <div style={{ height: "100vh", width: "100%", background: "#F1F0EE" }}>
      <OverviewFlow />
    </div>
  );
}

export default App;
