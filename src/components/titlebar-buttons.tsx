import { appWindow } from "@tauri-apps/api/window";
import TitleBarButton from "./titlebar-button";

const TitleBarButtons = () => {
  const handleMinimize = () => appWindow.minimize();
  const handleClose = () => appWindow.close();

  return (
    <div className="flex items-center ml-auto">
      <TitleBarButton icon="bx:minus" onClick={handleMinimize} />
      <TitleBarButton icon="fe:close" onClick={handleClose} />
    </div>
  );
};
export default TitleBarButtons;
