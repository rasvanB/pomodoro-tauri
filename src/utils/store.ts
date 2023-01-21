import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Settings } from "../types/settings";

const initialSettings: Settings = {
  focusTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  rounds: 4,
  longBreakInterval: 2,
  endless: false,
};

export const timerAtom = atom({
  passedSeconds: 0,
  currentRound: 1,
  isRunning: false,
});

export const incrementTimerAtom = atom(null, (get, set) => {
  const { passedSeconds, currentRound, isRunning } = get(timerAtom);
  set(timerAtom, {
    passedSeconds: passedSeconds + 1,
    currentRound,
    isRunning,
  });
});

export const resetTimerAtom = atom(null, (get, set) => {
  set(timerAtom, {
    passedSeconds: 0,
    currentRound: 1,
    isRunning: false,
  });
});

export const incrementRoundAtom = atom(null, (get, set) => {
  const prev = get(timerAtom);
  set(timerAtom, {
    currentRound: prev.currentRound + 1,
    passedSeconds: 0,
    isRunning: false,
  });
});

export const settingsAtom = atomWithStorage("settings", initialSettings);
