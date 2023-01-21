/*
CALCULATIONS 
------------------------------
size = 100
strokeWidth = 10
center = size / 2
       = 100 / 2 = 50
radius = center - strokeWidth 
       = 50 - 10 = 40
------------------------------
*/

import { useAtom } from "jotai";
import { useEffect, useMemo } from "react";
import {
  incrementRoundAtom,
  incrementTimerAtom,
  resetTimerAtom,
  settingsAtom,
  timerAtom,
} from "../utils/store";
import {
  durationToString,
  formatSeconds,
  minutesToSeconds,
} from "../utils/time";

const Clock = () => {
  const [settings] = useAtom(settingsAtom);
  const [timer, setTimer] = useAtom(timerAtom);
  const [, incrementTimer] = useAtom(incrementTimerAtom);
  const [, resetTimer] = useAtom(resetTimerAtom);
  const [, incrementRound] = useAtom(incrementRoundAtom);

  const size = 100;
  const strokeWidth = 10;
  const center = size / 2;
  const radius = center - strokeWidth;
  const currentDuration = useMemo(() => {
    return formatSeconds(
      minutesToSeconds(settings.focusTime) - timer.passedSeconds
    );
  }, [timer.passedSeconds, settings.focusTime]);

  console.log(durationToString(currentDuration));

  console.log(currentDuration);

  useEffect(() => {
    if (timer.isRunning) {
      console.log(timer);

      const interval = setInterval(() => {
        if (timer.passedSeconds >= minutesToSeconds(settings.focusTime)) {
          if (timer.currentRound < settings.rounds) {
            incrementRound();
            return;
          }
          resetTimer();
          return;
        }
        incrementTimer();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer.isRunning, timer.passedSeconds, setTimer]);

  return (
    <div className="flex justify-center items-center px-5 relative mt-5">
      <svg className="w-[330px] h-[330px] -rotate-90 pt-2 mr-5 drop-shadow-[0_0_20px_rgba(129,31,255,0.1)]">
        <circle
          cx="165px"
          cy="165px"
          r="135px"
          fill="transparent"
          stroke="#1f1f36"
          strokeWidth="20px"
        />
        <circle
          cx="165px"
          cy="165px"
          r="135px"
          fill="transparent"
          stroke="#7000FF"
          strokeDasharray="785px"
          strokeDashoffset="575px"
          strokeWidth="20px"
          strokeLinecap="round"
        />
        <circle
          cx="165px"
          cy="165px"
          r="125px"
          fill="#0e0e18"
          style={{ filter: "drop-shadow(0px 0px 8px rgb(0,0,0,0.4))" }}
        />
      </svg>
      <div className="absolute flex flex-col pb-5 text-center font-montserrat select-none">
        <div className="font-medium text-[24px] text-[#D2CCCC]">Focus</div>
        <div className="font-medium text-[60px] text-white leading-none">
          {durationToString(currentDuration)}
        </div>
        <div className="font-semibold text-[16px] text-[#D2CCCC] mt-1">
          {settings.endless
            ? "ENDLESS MODE"
            : "ROUND " + `${timer.currentRound} / ${settings.rounds}`}
        </div>
      </div>
    </div>
  );
};
export default Clock;
