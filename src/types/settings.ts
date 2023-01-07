import { z } from "zod";
export const MAX_TIME = 150;
export const MAX_ROUNDS = 30;

export const settingsSchema = z.object({
  focusTime: z.number().refine((value) => value > 0 && value <= MAX_TIME, {
    message: `Focus time must at least 1 minute and less than ${MAX_TIME}`,
  }),
  shortBreakTime: z.number().refine((value) => value > 0 && value <= MAX_TIME, {
    message: `Short break time must at least 1 minute and less than ${MAX_TIME}`,
  }),
  longBreakTime: z.number().refine((value) => value > 0 && value <= MAX_TIME, {
    message: `Long break time must at least 1 minute and less than ${MAX_TIME}`,
  }),
  rounds: z.number().refine((value) => value > 0 && value <= MAX_ROUNDS, {
    message: `Rounds must at least 1 and less than ${MAX_ROUNDS}`,
  }),
  endless: z.boolean(),
});

export type Settings = Zod.infer<typeof settingsSchema>;
export type NumberKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];
