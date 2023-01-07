import { useState } from "react";
import SettingsMenu from "./settings-menu";
import TitleBarButton from "./titlebar-button";
import TitleBarButtons from "./titlebar-buttons";

const Titlebar = () => {
  const [showSettings, setShowSettings] = useState(true);
  const toggleSettings = () => setShowSettings((prev) => !prev);

  return (
    <div className="overflow-hidden">
      <div
        data-tauri-drag-region
        className="w-[100vw] h-[30px] bg-[#11111D] flex z-[999] relative"
      >
        <TitleBarButton icon="clarity:menu-line" onClick={toggleSettings} />
        <TitleBarButtons />
      </div>
      <SettingsMenu show={showSettings} />
    </div>
  );
};
export default Titlebar;
