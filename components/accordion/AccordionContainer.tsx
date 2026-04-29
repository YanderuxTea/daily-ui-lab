"use client";
import { useState } from "react";
import { accordionData } from "@/data/accordion/accordionData";
import AccordionCard from "@/components/accordion/AccordionCard";

export default function AccordionContainer() {
  const [openId, setOpenId] = useState<string>("");
  return (
    <div className={"flex flex-col max-w-130 w-full gap-2"}>
      {accordionData.map((item) => {
        return (
          <AccordionCard
            openId={openId}
            setOpenIdAction={setOpenId}
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
}
