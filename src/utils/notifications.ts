import {
  isPermissionGranted,
  sendNotification,
} from "@tauri-apps/api/notification";

export const pushNotification = async (title: string, body: string) => {
  if (await isPermissionGranted()) {
    sendNotification({ title, body });
  }
};
