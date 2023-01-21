/*
CALCULATIONS 
------------------------------
size = 100
strokeWidth = 10
center = size / 2
       = 100 / 2 = 50
radius = center - strokeWidth 
       = 50 - 10 = 40
progress = 0
arcLength = 2 * π * radius 
          = 2 * 3.14 * 40 = 251.2
arcOffset = arcLength * ((100 - progress) / 100) 
          = 251.2 * ((100 - 0) / 100) = 251.2
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

const SIZE = 330;
const STROKE_WIDTH = 20;
const CENTER = SIZE / 2;
const RADIUS = CENTER - STROKE_WIDTH - 10;
const ARC_LENGTH = Math.floor(2 * Math.PI * RADIUS);

const Clock = () => {
  const [settings] = useAtom(settingsAtom);
  const [timer, setTimer] = useAtom(timerAtom);
  const [, incrementTimer] = useAtom(incrementTimerAtom);
  const [, resetTimer] = useAtom(resetTimerAtom);
  const [, incrementRound] = useAtom(incrementRoundAtom);

  const currentDuration = useMemo(() => {
    return formatSeconds(
      minutesToSeconds(settings.focusTime) - timer.passedSeconds
    );
  }, [timer.passedSeconds, settings.focusTime]);

  const currentProgress = useMemo(() => {
    return Math.floor(
      (timer.passedSeconds / minutesToSeconds(settings.focusTime)) * 100
    );
  }, [timer.passedSeconds, settings.focusTime]);

  console.log(durationToString(currentDuration));
  console.log(currentProgress);
  console.log(currentDuration);

  const arcOffset = useMemo(() => {
    return ARC_LENGTH * ((100 - currentProgress) / 100);
  }, [currentProgress]);

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

  console.log(ARC_LENGTH, SIZE, STROKE_WIDTH, CENTER, RADIUS, arcOffset);

  return (
    <div className="flex justify-center items-center px-5 relative mt-5">
      <svg
        className={`-rotate-90 pt-2 mr-5 drop-shadow-[0_0_20px_rgba(129,31,255,0.1)] `}
        style={{ width: SIZE + "px", height: SIZE + "px" }}
      >
        <circle
          cx={CENTER + "px"}
          cy={CENTER + "px"}
          r={RADIUS + "px"}
          fill="transparent"
          stroke="#1f1f36"
          strokeWidth={STROKE_WIDTH + "px"}
        />
        <circle
          cx={CENTER + "px"}
          cy={CENTER + "px"}
          r={RADIUS + "px"}
          fill="transparent"
          stroke="#7000FF"
          strokeDasharray={ARC_LENGTH + "px"}
          strokeDashoffset={arcOffset + "px"}
          strokeWidth={STROKE_WIDTH + "px"}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
        <circle
          cx={CENTER + "px"}
          cy={CENTER + "px"}
          r={RADIUS - 10 + "px"}
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
