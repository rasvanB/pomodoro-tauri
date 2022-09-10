import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";
import Clock from "./components/clock.component";
import Titlebar from "./components/titlebar.component";

const App = () => {
  // make window visible on component mount - prevents white flash
  useEffect(() => {
    appWindow.show();
  }, []);

  return (
    <>
      <Titlebar />
      <Clock />
    </>
  );
};

export default App;
