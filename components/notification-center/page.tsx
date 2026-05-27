import { inter } from "@/lib/font";
import NotificationPanel from "@/components/notification-center/NotificationPanel";

export default function NCPage() {
  return (
    <main
      className={`bg-nc-bg text-nc-text-primary flex flex-1 w-full ${inter.className} p-2.5`}
    >
      <NotificationPanel />
    </main>
  );
}
