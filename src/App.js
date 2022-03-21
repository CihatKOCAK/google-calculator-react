import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import "./app.scss";
import ThemeToggle from "./components/themeToggle";
import React, { useEffect, useState } from "react";
import { getStorage, setStore } from "./controllerStorage";
import controllerCalculate from "./controllerCalculate";

function App() {
  const [theme, setTheme] = useState(true);
  const [historyOperations, setHistoryOperations] = useState([]);
  const [activeOperation, setActiveOperation] = useState(true);
  const [screen, setScreen] = useState("");

  useEffect(() => {
    setTheme(getStorage().theme);
    setHistoryOperations(getStorage().historyOperations);
  }, []);

  const handleKeyPress = (key) => {
    controllerCalculate(
      key.toString(),
      screen,
      setScreen,
      setHistoryOperations,
      historyOperations,
      activeOperation,
      setActiveOperation
    );
  };

  useEffect(() => {
    theme
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "white");
    setStore(theme, "theme");
  }, [theme]);

  useEffect(() => {
    setStore(historyOperations, "historyOperations");
  }, [historyOperations]);

  return (
    <div
      className="mainContainer"
      tabIndex={0}
      onKeyDownCapture={(e) => handleKeyPress(e.key)}
    >
      <Screen historyOperations={historyOperations} screen={screen} />
      <Keyboard
        setScreen={setScreen}
        screen={screen}
        setHistoryOperations={setHistoryOperations}
        historyOperations={historyOperations}
        activeOperation={activeOperation}
        setActiveOperation={setActiveOperation}
      />
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
