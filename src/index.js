import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Context/Context";

import App from "./components/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  rootElement
);
