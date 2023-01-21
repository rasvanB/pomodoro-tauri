import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { button } from "../styles/button";
import { incrementRoundAtom, resetTimerAtom, timerAtom } from "../utils/store";

const ControlButtons = () => {
  const [timer, setTimer] = useAtom(timerAtom);
  const [, incrementRound] = useAtom(incrementRoundAtom);
  const [, resetTimer] = useAtom(resetTimerAtom);

  const toggleTimer = () =>
    setTimer((prev) => ({
      ...prev,
      isRunning: !prev.isRunning,
    }));

  return (
    <div className="text-center flex gap-5 text-white items-center justify-center mt-7">
      <button
        className={button({ intent: "sideControl" })}
        onClick={resetTimer}
      >
        <Icon icon="codicon:debug-restart" className="text-[25px]" />
      </button>
      <button
        className="z-0 bg-[#7509FF] hover:bg-[#7d28ec] w-[60px] h-[60px] flex justify-center items-center rounded-md drop-shadow-[0_0_10px_rgba(129,31,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(129,31,255,0.4)]"
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
      <button
        className={button({ intent: "sideControl" })}
        onClick={incrementRound}
      >
        <Icon icon="bi:stop-fill" className="text-[32px]"></Icon>
      </button>
    </div>
  );
};
export default ControlButtons;
