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
      <TitleBarButton icon="akar-icons:minus" onclick={handleMinimize} />
      <TitleBarButton icon="eva:close-outline" onclick={handleClose} />
    </div>
  );
};
export default TitleBarButtons;
