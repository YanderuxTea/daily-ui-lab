import { dm_sans } from "@/lib/font";
import Tabs from "@/components/animated-tabs/Tabs";

export default function ATPage() {
  return (
    <main
      className={`flex items-center justify-center bg-[#0a0a0f] min-h-screen w-full ${dm_sans.className} text-[#94a3b8] p-2.5`}
    >
      <Tabs />
    </main>
  );
}
