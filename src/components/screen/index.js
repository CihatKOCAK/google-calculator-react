import React, { useState } from "react";
import History from "./history/History";
import Result from "./result/Result";
import "./style.scss";

function Screen({ historyOperations, screen }) {
  const [selectedScreen, setSelectedScreen] = useState(false);

  return (
    <div
      className={selectedScreen ? "screenContainer" : "screenContainer active"}
      onClick={() => setSelectedScreen(!selectedScreen)}
    >
      <History historyOperations={historyOperations} />
      <Result screen={screen} />
    </div>
  );
}

export default Screen;
