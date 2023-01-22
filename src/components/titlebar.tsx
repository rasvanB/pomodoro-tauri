import { cx } from "class-variance-authority";
import { useAtom } from "jotai";
import { useState } from "react";
import { breakAtom } from "../utils/store";
import SettingsMenu from "./settings-menu";
import TitleBarButton from "./titlebar-button";
import TitleBarButtons from "./titlebar-buttons";

const Titlebar = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [isBreak] = useAtom(breakAtom);
  const toggleSettings = () => setShowSettings((prev) => !prev);

  return (
    <div className="overflow-hidden">
      <div
        data-tauri-drag-region
        className={cx(
          "w-[100vw] h-[30px] bg-[#11111D] flex z-[999] relative",
          isBreak ? "bg-[#0e1811]" : "bg-[#11111D]"
        )}
      >
        <TitleBarButton icon="clarity:menu-line" onClick={toggleSettings} />
        <TitleBarButtons />
      </div>
      <SettingsMenu show={showSettings} />
    </div>
  );
};
export default Titlebar;
