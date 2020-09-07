import React, { useContext } from "react";
import "./App.css";
import { Context } from "../../Context/Context";
import { Switch, Route } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import Countries from "../Countries/Countries";
import Country from "../Country/Country";

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
        <Switch>
          <Route exact path="/">
            <section className="seachbar">
              <SearchBar theme={theme} />
            </section>
            <section className="countries">
              <Countries />
            </section>
          </Route>
          <Route path="/:CountryName">
            <Country />
          </Route>
        </Switch>
      </main>

      {/* <footer className={`footer-${theme}`}></footer> */}
    </div>
  );
}
