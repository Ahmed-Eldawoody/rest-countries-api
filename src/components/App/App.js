import React, { useContext } from "react";
import "./App.css";
import { Context } from "../../Context/Context";

import SearchBar from "../SearchBar/SearchBar";
import Countries from "../Countries/Countries";

export default function App() {
  const { theme, themeChange, moon } = useContext(Context);

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
        <section className="countries">
          <Countries />
        </section>
      </main>
      <footer className={`footer-${theme}`}></footer>
    </div>
  );
}
