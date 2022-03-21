const ops = ["+", "-", "*", "/"];
const numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const del = ["Backspace", "AC"];
const equal = ["=", "Enter"];
const special = [".", ","];
const expectedValues = [...ops, ...numbs, ...del, ...equal, ...special];

export default function controllerCalculate(
  value,
  screen,
  setScreen,
  setHistoryOperations,
  historyOperations,
  activeOperation,
  setActiveOperation
) {
  if (ops.find((op) => op === value) || equal.find((eq) => eq === value)) {
    if (
      screen.length === 0 ||
      ops.find((op) => op === screen[screen.length - 1]) ||
      screen === "undefined"
    ) {
      return;
    }
  }

  if (expectedValues.find((val) => val === value)) {
    if ((value === "AC" || value === "Backspace") && screen.length >= 0) {
      setScreen(screen.slice(0, -1));
    } else if (value === "=" || value === "Enter") {
      setActiveOperation(false);
      let history = { operation: screen, result: eval(screen).toString() };
      setHistoryOperations([...historyOperations, history]);
      setScreen(eval(screen).toString());
    } else if (value === "." || value === ",") {
      if (!screen.includes(".")) {
        setScreen(screen + ".");
      }
    } else {
      if (activeOperation) {
        setScreen(screen + value);
      } else {
        setActiveOperation(true);
        ops.find((op) => op === value)
          ? setScreen(screen + value)
          : setScreen(value);
      }
    }
  }
}
