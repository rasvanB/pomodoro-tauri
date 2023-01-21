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
  isBreak: false,
});

export const incrementTimerAtom = atom(null, (get, set) => {
  const prev = get(timerAtom);
  set(timerAtom, {
    ...prev,
    passedSeconds: prev.passedSeconds + 1,
  });
});

export const resetTimerAtom = atom(null, (get, set) => {
  const prev = get(timerAtom);
  set(timerAtom, {
    ...prev,
    passedSeconds: 0,
    currentRound: 1,
    isRunning: false,
  });
});

export const incrementRoundAtom = atom(null, (get, set) => {
  const prev = get(timerAtom);
  set(timerAtom, {
    ...prev,
    currentRound: prev.isBreak ? prev.currentRound + 1 : prev.currentRound,
    passedSeconds: 0,
    isRunning: false,
    isBreak: !prev.isBreak,
  });
});

export const settingsAtom = atomWithStorage("settings", initialSettings);
