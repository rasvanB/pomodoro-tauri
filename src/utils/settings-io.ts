import { writeTextFile, readTextFile, BaseDirectory } from "@tauri-apps/api/fs";
import { Settings, settingsSchema } from "../types/settings";

export const saveSettings = async (settings: Settings) => {
  const json = JSON.stringify(settings);
  await writeTextFile(
    {
      contents: json,
      path: "settings.json",
    },
    { dir: BaseDirectory.App }
  );
};

export const loadSettings = async (): Promise<Settings | null> => {
  const json = await readTextFile("settings.json", { dir: BaseDirectory.App });
  const jsonData = JSON.parse(json);
  const result = settingsSchema.safeParse(jsonData);
  if (result.success) {
    return result.data;
  } else {
    return null;
  }
};
