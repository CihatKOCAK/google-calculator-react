import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import "./app.scss";
import ThemeToggle from "./components/themeToggle";
import { useEffect, useState } from "react";
import { localData } from "./storageCreateData";

function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("calculate")) {
      let myData = JSON.parse(localStorage.getItem("calculate"));
      setTheme(myData.theme);
    } else {
      localStorage.setItem("calculate", JSON.stringify(localData));
    }
  }, []);

  useEffect(() => {
    theme
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "white");
    let newData = JSON.parse(localStorage.getItem("calculate"));
    newData.theme = theme;
    localStorage.setItem("calculate", JSON.stringify(newData));
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
