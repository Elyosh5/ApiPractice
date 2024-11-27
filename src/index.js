import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProduct from "./context/ContextProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProduct>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProduct>
);
