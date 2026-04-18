import { inter } from "@/lib/font";
import MessageCard from "@/components/message-card/MessageCard";

export default function MCPage() {
  return (
    <main
      className={`bg-[#0F172A] min-h-screen w-full text-[#E5E7EB] ${inter.className} font-normal text-sm flex justify-center items-center p-2.5`}
    >
      <MessageCard />
    </main>
  );
}
