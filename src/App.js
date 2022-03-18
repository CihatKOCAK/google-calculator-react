import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import "./app.scss";

function App() {
  return (
    <div className="mainContainer">
      <Screen />
      <Keyboard />
    </div>
  );
}

export default App;
