import { useState } from "react";
import History from "./history/History";
import Result from "./result/Result";
import "./style.scss";

function Screen() {
  const [selectedScreen, setSelectedScreen] = useState(false);
  return (
    <div
      className={selectedScreen ? "screenContainer" : "screenContainer active"}
      onClick={() => setSelectedScreen(!selectedScreen)}
    >
      {" "}
      <History />
      <Result />
    </div>
  );
}

export default Screen;
