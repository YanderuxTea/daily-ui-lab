import { geist } from "@/lib/font";
import CommandInput from "@/components/command-palette/CommandInput";

export default function CPPage() {
  return (
    <main
      className={`${geist.className} bg-[#09090b] min-h-screen w-full flex items-start justify-center p-20 text-white`}
    >
      <CommandInput />
    </main>
  );
}
