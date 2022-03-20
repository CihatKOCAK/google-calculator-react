import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import "./app.scss";
import ThemeToggle from "./components/themeToggle";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "white");
    }
  }, [theme]);

  useEffect(() => {
    window.sessionStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="mainContainer">
      <Screen />
      <Keyboard />
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
