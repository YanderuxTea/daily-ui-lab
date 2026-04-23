import { dm_sans } from "@/lib/font";
import CardStepper from "@/components/multi-step-stepper/CardStepper";

export default function MSSPage() {
  return (
    <main
      className={`${dm_sans.className} bg-[#0a0a0f] flex items-center justify-center min-h-screen w-full p-2.5`}
    >
      <CardStepper />
    </main>
  );
}
