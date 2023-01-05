import TitleBarButton from "./titlebar-button";
import TitleBarButtons from "./titlebar-buttons";

const Titlebar = () => {
  return (
    <div
      data-tauri-drag-region
      className="w-[100vw] h-[30px] bg-[#11111D] flex"
    >
      <TitleBarButton icon="clarity:menu-line" onClick={() => {}} />
      <TitleBarButtons />
    </div>
  );
};
export default Titlebar;
