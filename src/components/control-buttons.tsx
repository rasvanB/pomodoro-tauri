import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { debounce } from "debounce";
import {
  breakAtom,
  incrementRoundAtom,
  resetTimerAtom,
  timerAtom,
} from "../utils/store";
import SideButton from "./side-button";
import { cx } from "class-variance-authority";

const ControlButtons = () => {
  const [timer, setTimer] = useAtom(timerAtom);
  const [, incrementRound] = useAtom(incrementRoundAtom);
  const [, resetTimer] = useAtom(resetTimerAtom);
  const [isBreak] = useAtom(breakAtom);

  const showTooltip = debounce(() => {
    console.log("mouse enter");
  }, 1000);

  const toggleTimer = () =>
    setTimer((prev) => ({
      ...prev,
      isRunning: !prev.isRunning,
    }));

  return (
    <div className="text-center flex gap-5 text-white items-center justify-center mt-7">
      <SideButton type="reset" onClick={resetTimer} />
      <button
        className={cx(
          "z-0 w-[60px] h-[60px] flex justify-center items-center rounded-md ",
          isBreak
            ? "bg-[#22bb2c] hover:bg-[#25cf30] drop-shadow-[0_0_10px_rgba(31,255,56,0.3)] hover:drop-shadow-[0_0_20px_rgba(31,255,56,0.3)]"
            : "bg-[#7509FF] hover:bg-[#7d28ec] drop-shadow-[0_0_10px_rgba(129,31,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(129,31,255,0.4)]"
        )}
        onClick={toggleTimer}
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Icon
          icon={`${timer.isRunning ? "heroicons:pause-20-solid" : "ion:play"}`}
          className="text-[45px]"
        ></Icon>
      </button>
      <SideButton type="stop" onClick={incrementRound} />
    </div>
  );
};
export default ControlButtons;
