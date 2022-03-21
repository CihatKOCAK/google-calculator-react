import React from "react";
import "./style.scss";

function ThemeToggle({ theme, setTheme }) {
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className="containerToggle noselect">
      <h1>Light / Dark Mode</h1>
      <input
        type="checkbox"
        checked={theme}
        id="switch"
        name="mode"
        onChange={() => changeTheme()}
      />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}

export default React.memo(ThemeToggle);
