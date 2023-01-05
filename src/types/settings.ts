import { z } from "zod";

export const settingsSchema = z.object({
  focusTime: z.number().refine((value) => value > 0 && value <= 150, {
    message: "Focus time must at least 1 minute and less than 150",
  }),
  shortBreakTime: z.number().refine((value) => value > 0 && value <= 150, {
    message: "Short break time must at least 1 minute and less than 150",
  }),
  longBreakTime: z.number().refine((value) => value > 0 && value <= 150, {
    message: "Long break time must at least 1 minute and less than 150",
  }),
  rounds: z.number().refine((value) => value > 0 && value <= 30, {
    message: "Rounds must at least 1 and less than 30",
  }),
  endless: z.boolean(),
});

export type Settings = Zod.infer<typeof settingsSchema>;
