import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ContextProvider>,
  rootElement
);
