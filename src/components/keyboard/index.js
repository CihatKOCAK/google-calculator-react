import React from "react";
import ScientificSide from "./scientificSide";
import SimpleSide from "./simpleSide";
import './style.scss';

function Keyboard() {
  return (
    <div className="keyboardContainer">
      <ScientificSide />
      <SimpleSide />
    </div>
  );
}

export default Keyboard;
