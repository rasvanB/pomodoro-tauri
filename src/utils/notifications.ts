import {
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";
export var permissionGranted = false;
export const setPermission = (b: boolean) => (permissionGranted = b);
export const pushNotification = (title: string, body: string) => {
  if (permissionGranted) {
    sendNotification({ title, body });
  }
};
