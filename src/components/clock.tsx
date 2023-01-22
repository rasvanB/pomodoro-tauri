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

import { cx } from "class-variance-authority";
import { useAtom } from "jotai";
import { useEffect, useMemo } from "react";
import {
  breakAtom,
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
  const [isBreak] = useAtom(breakAtom);
  const [, incrementTimer] = useAtom(incrementTimerAtom);
  const [, resetTimer] = useAtom(resetTimerAtom);
  const [, incrementRound] = useAtom(incrementRoundAtom);

  const timeLimit = timer.isShortBreak
    ? settings.shortBreakTime
    : timer.isLongBreak
    ? settings.longBreakTime
    : settings.focusTime;

  const currentDuration = useMemo(() => {
    return formatSeconds(minutesToSeconds(timeLimit) - timer.passedSeconds);
  }, [timer.passedSeconds, timeLimit]);

  const currentProgress = useMemo(() => {
    return (timer.passedSeconds / minutesToSeconds(timeLimit)) * 100;
  }, [timeLimit, timer.passedSeconds]);

  const arcOffset = useMemo(() => {
    return ARC_LENGTH * ((100 - currentProgress) / 100);
  }, [currentProgress]);

  useEffect(() => {
    if (timer.isRunning) {
      const interval = setInterval(() => {
        const timeLimitInSeconds = minutesToSeconds(timeLimit);
        if (timer.passedSeconds >= timeLimitInSeconds) {
          if (timer.currentRound < settings.rounds || settings.endless) {
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
      <svg
        className={cx(
          `-rotate-90 pt-2 mr-5 drop-shadow-[0_0_20px_rgba(129,31,255,0.1)]`,
          "dark:drop-shadow-[0_0_20px_rgba(31,255,38,0.1)]",
          "drop-shadow-[0_0_20px_rgba(129,31,255,0.1)]"
        )}
        style={{ width: SIZE + "px", height: SIZE + "px" }}
      >
        <circle
          cx={CENTER + "px"}
          cy={CENTER + "px"}
          r={RADIUS + "px"}
          fill="transparent"
          stroke={isBreak ? "#1f3622" : "#1f1f36"}
          strokeWidth={STROKE_WIDTH + "px"}
        />
        <circle
          cx={CENTER + "px"}
          cy={CENTER + "px"}
          r={RADIUS + "px"}
          fill="transparent"
          stroke={isBreak ? "#1ede04" : "#7000FF"}
          strokeDasharray={ARC_LENGTH + "px"}
          strokeDashoffset={arcOffset + "px"}
          strokeWidth={STROKE_WIDTH + "px"}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
        <circle
          cx={CENTER + "px"}
          cy={CENTER + "px"}
          r={RADIUS - 10 + "px"}
          fill={isBreak ? "#0e180e" : "#0e0e18"}
          style={{ filter: "drop-shadow(0px 0px 8px rgb(0,0,0,0.4))" }}
        />
      </svg>
      <div className="absolute flex flex-col text-center font-montserrat">
        <div className="font-medium text-[24px] text-[#D2CCCC]">
          {timer.isShortBreak
            ? "Short Break"
            : timer.isLongBreak
            ? "Long Break"
            : "Focus"}
        </div>
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
