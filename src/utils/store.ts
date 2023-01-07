import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Settings } from "../types/settings";

const initialSettings: Settings = {
  focusTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  rounds: 4,
  endless: false,
};

export const timerAtom = atom({
  passedSeconds: 0,
  currentRound: 1,
  isRunning: false,
});

export const settingsAtom = atomWithStorage("settings", initialSettings);
