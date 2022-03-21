import React from "react";
import ScientificSide from "./scientificSide";
import SimpleSide from "./simpleSide";
import "./style.scss";

function Keyboard({
  setScreen,
  screen,
  setHistoryOperations,
  historyOperations,
  activeOperation,
  setActiveOperation,
}) {
  return (
    <div className="keyboardContainer">
      <ScientificSide />
      <SimpleSide
        setScreen={setScreen}
        screen={screen}
        setHistoryOperations={setHistoryOperations}
        historyOperations={historyOperations}
        activeOperation={activeOperation}
        setActiveOperation={setActiveOperation}
      />
    </div>
  );
}

export default Keyboard;
