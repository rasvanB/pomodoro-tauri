import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";
import Clock from "./components/clock.component";
import ControlButtons from "./components/control-buttons.component";
import Titlebar from "./components/titlebar.component";

const App = () => {
  // make window visible on component mount - prevents white flash
  useEffect(() => {
    appWindow.show();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Titlebar />
      <Clock />
      <ControlButtons />
    </div>
  );
};

export default App;
