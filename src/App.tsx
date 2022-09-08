import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const minimizeButton = document.getElementById("titlebar-minimize");
    const closeButton = document.getElementById("titlebar-close");
    if (minimizeButton)
      minimizeButton.addEventListener("click", () => appWindow.minimize());
    if (closeButton)
      closeButton.addEventListener("click", () => appWindow.close());
  }, []);
  return <div className="text-red-500">COOLBRO</div>;
};

export default App;
