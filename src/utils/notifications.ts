import {
  isPermissionGranted,
  sendNotification,
} from "@tauri-apps/api/notification";

type NotificationType = "round" | "break";

type Notification = {
  title: string;
  body: string;
};

const notificationBody: Record<NotificationType, Notification> = {
  round: {
    title: "Pomodoro Completed!",
    body: "Great job! Take a short break and come back refreshed.",
  },
  break: {
    title: "Break Over!",
    body: "Time to get back to work. Focus and tackle the next task!",
  },
};

export const pushNotification = async (notificationType: NotificationType) => {
  if (await isPermissionGranted()) {
    sendNotification(notificationBody[notificationType]);
  }
};
