import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppContextProvider from "./store/appContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
  rootElement
);
