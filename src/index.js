import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Helmet from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOMServer.renderToString(
  <StaticRouter>
    <App />
  </StaticRouter>
);
Helmet.renderStatic();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
