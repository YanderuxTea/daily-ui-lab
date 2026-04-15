import { inter } from "@/lib/font";
import Card from "@/components/dashboard-activity-widget/Card";

export default function DAWPage() {
  return (
    <main
      className={`${inter.className} p-2.5 bg-[#0f172a] min-h-screen flex items-center justify-center`}
    >
      <Card />
    </main>
  );
}
