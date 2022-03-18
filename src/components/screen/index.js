import { useState } from "react";
import History from "./history/History";
import Result from "./result/Result";
import "./style.scss";

function Screen() {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={selected ? "screenContainer" : "screenContainer active"}
      onClick={() => setSelected(!selected)}
    >
      <History />
      <Result />
    </div>
  );
}

export default Screen;
