import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "./App.css";
import { appWindow, LogicalSize } from "@tauri-apps/api/window";

appWindow.setResizable(false);
appWindow.setSize(new LogicalSize(500, 600));
appWindow.setDecorations(false);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
