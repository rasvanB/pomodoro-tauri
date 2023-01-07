import { Duration } from "../types/time";

export const formatSeconds = (seconds: number): Duration => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  return {
    hours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
};

export const minutesToSeconds = (minutes: number) => minutes * 60;

export const durationToString = (duration: Duration) => {
  const { hours, minutes, seconds } = duration;
  const hoursString = hours > 0 ? `${hours}:` : "";
  const minutesString =
    minutes > 0 ? (minutes < 10 ? `0${minutes}:` : `${minutes}:`) : "00:";
  const secondsString =
    seconds > 0 ? (seconds < 10 ? `0${seconds}` : `${seconds}`) : "00";

  return hoursString + minutesString + secondsString;
};
