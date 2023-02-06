import { Howl } from "howler";

export const roundEndSound = new Howl({
  src: ["public/round-end.wav"],
  preload: true,
  volume: 0.5,
});
