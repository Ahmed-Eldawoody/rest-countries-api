import React, { useState } from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [theme, setTheme] = useState("Light");
  function themeChange() {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  }

  function moon() {
    if (theme === "Light") {
      return <HiOutlineMoon className="icon" />;
    } else {
      return <HiMoon className="icon" />;
    }
  }

  return (
    <div className={`App-${theme}`}>
      <header>
        <nav>
          <p>Where in the world?</p>
          <div className="toggle-theme" onClick={themeChange}>
            {moon()}
            <div>{theme} Mode</div>
          </div>
        </nav>
      </header>
      <main>
        <section className="seachbar">
          <SearchBar theme={theme} />
        </section>
      </main>
    </div>
  );
}
