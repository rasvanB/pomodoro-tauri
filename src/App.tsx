import {
  isPermissionGranted,
  requestPermission,
} from "@tauri-apps/api/notification";
import { appWindow } from "@tauri-apps/api/window";
import { cx } from "class-variance-authority";
import { useAtom } from "jotai";
import { useEffect } from "react";
import Clock from "./components/clock";
import ControlButtons from "./components/control-buttons";
import Titlebar from "./components/titlebar";
import { breakAtom } from "./utils/store";

const App = () => {
  const [isBreak] = useAtom(breakAtom);
  // make window visible on component mount - prevents white flash
  useEffect(() => {
    appWindow.show();
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    isPermissionGranted().then((permission) => {
      if (!permission) {
        requestPermission();
      }
    });
  }, []);

  return (
    <div
      className={cx(
        isBreak ? "bg-[#0e1811]" : "bg-[#0e0e18]",
        isBreak ? "dark" : "",
        "flex flex-col items-center h-[100vh]"
      )}
    >
      <Titlebar />
      <Clock />
      <ControlButtons />
    </div>
  );
};

export default App;
