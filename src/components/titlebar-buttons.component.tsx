import { appWindow } from "@tauri-apps/api/window";
import TitleBarButton from "./titlebar-button.component";

const TitleBarButtons = () => {
  const handleMinimize = () => {
    appWindow.minimize();
  };
  const handleClose = () => {
    appWindow.close();
  };
  return (
    <div className="ml-auto flex items-center">
      <TitleBarButton icon="bx:minus" onClick={handleMinimize} />
      <TitleBarButton icon="fe:close" onClick={handleClose} />
    </div>
  );
};
export default TitleBarButtons;
