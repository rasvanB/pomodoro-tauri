import TitleBarButtons from "./titlebar-buttons.component";

const Titlebar = () => {
  return (
    <div
      data-tauri-drag-region
      className="w-[100vw] h-[30px] bg-[#161625] flex"
    >
      <TitleBarButtons />
    </div>
  );
};
export default Titlebar;
