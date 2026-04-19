import { dm_sans } from "@/lib/font";
import ControlToast from "@/components/toast-notification/ControlToast";
import ToastProvider from "@/components/toast-notification/ToastProvider";
import NotificationContainer from "@/components/toast-notification/NotificationContainer";

export default function TNPage() {
  return (
    <main
      className={`bg-[#0a0a0f] min-h-screen w-full flex items-center justify-center ${dm_sans.className}`}
    >
      <ToastProvider>
        <ControlToast />
        <NotificationContainer />
      </ToastProvider>
    </main>
  );
}
