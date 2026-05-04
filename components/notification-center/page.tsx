import { inter } from "@/lib/font";
import NotificationPanel from "@/components/notification-center/NotificationPanel";

export default function NCPage() {
  return (
    <main
      className={`bg-nc-bg text-nc-text-primary flex min-h-screen w-full ${inter.className} p-2.5`}
    >
      <NotificationPanel />
    </main>
  );
}
