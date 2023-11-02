import { createRoot } from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import { React } from "react";
import App from "./App";
import "./main.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
