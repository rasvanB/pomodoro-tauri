import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { timerAtom } from "../utils/store";

const ControlButtons = () => {
  const [timer, setTimer] = useAtom(timerAtom);
  const toggleTimer = () => {
    setTimer((prev) => ({
      ...prev,
      isRunning: !prev.isRunning,
    }));
  };
  return (
    <div className="text-center flex gap-5 text-white items-center justify-center mt-7">
      <button className="bg-[#181828] w-[55px] h-[55px] rounded-full flex justify-center items-center">
        <Icon icon="codicon:debug-restart" className="text-[25px]" />
      </button>
      <button
        className="bg-[#7509FF] w-[60px] h-[60px] flex justify-center items-center rounded-md drop-shadow-[0_0_10px_rgba(129,31,255,0.4)]"
        onClick={toggleTimer}
      >
        <Icon
          icon={`${timer.isRunning ? "heroicons:pause-20-solid" : "ion:play"}`}
          className="text-[45px]"
        ></Icon>
      </button>
      <button className="bg-[#181828] w-[55px] h-[55px] rounded-full flex justify-center items-center">
        <Icon icon="bi:stop-fill" className="text-[32px]"></Icon>
      </button>
    </div>
  );
};
export default ControlButtons;
