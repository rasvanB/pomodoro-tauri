import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";
import Titlebar from "./components/titlebar.component";

const App = () => {
  // make window visible on component mount - prevents white flash
  useEffect(() => {
    appWindow.show();
  }, []);

  return (
    <div className="text-red-500">
      <Titlebar />
    </div>
  );
};

export default App;
