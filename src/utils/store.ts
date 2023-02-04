import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Settings } from "../types/settings";
import { pushNotification } from "./notifications";

const initialSettings: Settings = {
  focusTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  rounds: 4,
  longBreakInterval: 2,
  endless: false,
};

const initialTimer = {
  passedSeconds: 0,
  currentRound: 1,
  isRunning: false,
  isShortBreak: false,
  isLongBreak: false,
  shortBreaks: 0,
};

export const timerAtom = atom(initialTimer);

export const incrementTimerAtom = atom(null, (get, set) => {
  const prev = get(timerAtom);
  set(timerAtom, {
    ...prev,
    passedSeconds: prev.passedSeconds + 1,
  });
});

export const resetTimerAtom = atom(null, (get, set) =>
  set(timerAtom, initialTimer)
);

export const breakAtom = atom((get) => {
  const { isShortBreak, isLongBreak } = get(timerAtom);
  return isShortBreak || isLongBreak;
});
export const incrementRoundAtom = atom(null, (get, set) => {
  const prev = get(timerAtom);
  let [isShortBreak, isLongBreak] = [false, false];
  let { shortBreaks, currentRound } = prev;

  if (!prev.isLongBreak && !prev.isShortBreak) {
    if (shortBreaks === get(settingsAtom).longBreakInterval) {
      isLongBreak = true;
      shortBreaks = 0;
    } else {
      isShortBreak = true;
      shortBreaks++;
    }
    pushNotification(
      "Pomodoro Completed!",
      "Great job! Take a short break and come back refreshed."
    );
  } else {
    pushNotification(
      "Break Over!",
      "Time to get back to work. Focus and tackle the next task!"
    );
    if (currentRound >= get(settingsAtom).rounds) {
      set(timerAtom, initialTimer);
      return;
    }

    currentRound++;
  }

  set(timerAtom, {
    passedSeconds: 0,
    isRunning: false,
    currentRound,
    isShortBreak,
    isLongBreak,
    shortBreaks,
  });
});

export const settingsAtom = atomWithStorage("settings", initialSettings);
