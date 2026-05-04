import AccordionContainer from "@/components/accordion/AccordionContainer";
import { dm_sans } from "@/lib/font";

export default function APage() {
  return (
    <main
      className={`flex flex-col min-h-screen bg-acc-bg text-acc-text-title w-full items-center justify-center ${dm_sans.className} p-2.5`}
    >
      <div className={"flex flex-col w-full max-w-130"}>
        <p className={"mb-2 text-xl font-medium"}>Frequently asked questions</p>
        <p className={"mb-8 text-[13px] text-acc-icon"}>
          Everything you need to know
        </p>
      </div>
      <AccordionContainer />
    </main>
  );
}
