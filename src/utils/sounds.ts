import { Howl } from "howler";

export const roundEndSound = new Howl({
  src: ["/round-end.wav"],
  preload: true,
  volume: 0.5,
});
