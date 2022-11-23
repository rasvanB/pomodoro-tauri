import TitleBarButtons from "./titlebar-buttons";

const Titlebar = () => {
  return (
    <div
      data-tauri-drag-region
      className="w-[100vw] h-[30px] bg-[#11111D] flex"
    >
      <TitleBarButtons />
    </div>
  );
};
export default Titlebar;
