import { useState } from "react";
import SettingsMenu from "./settings-menu";
import TitleBarButton from "./titlebar-button";
import TitleBarButtons from "./titlebar-buttons";

const Titlebar = () => {
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => setShowSettings((prev) => !prev);

  return (
    <div className="overflow-hidden">
      <div
        data-tauri-drag-region
        className="w-[100vw] h-[30px] flex z-[999] relative dark:bg-[#0f1a12] bg-[#11111D]"
      >
        <TitleBarButton icon="clarity:menu-line" onClick={toggleSettings} />
        <TitleBarButtons />
      </div>
      <SettingsMenu show={showSettings} />
    </div>
  );
};
export default Titlebar;
