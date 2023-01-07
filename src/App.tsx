import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";
import Clock from "./components/clock";
import ControlButtons from "./components/control-buttons";
import Titlebar from "./components/titlebar";

const App = () => {
  // make window visible on component mount - prevents white flash
  useEffect(() => {
    appWindow.show();
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Titlebar />
      <Clock />
      <ControlButtons />
    </div>
  );
};

export default App;
