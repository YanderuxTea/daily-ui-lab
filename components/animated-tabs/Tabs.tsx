"use client";
import { animatedTabsData } from "@/data/animated-tabs/animatedTabsData";
import TabTrigger from "@/components/animated-tabs/TabTrigger";
import { useState } from "react";
import TabContent from "@/components/animated-tabs/TabContent";

export default function Tabs() {
  const [selectTab, setSelectTab] = useState<{ id: number; content: string }>({
    id: 1,
    content:
      "Your workspace is running smoothly. All systems are operational and 3 active projects are on track for this sprint cycle.",
  });
  return (
    <div className={"flex flex-col gap-3 max-w-92.5 w-full"}>
      <div
        className={
          "flex flex-row border border-white/6 bg-white/4 p-1 rounded-[10px] overflow-clip"
        }
      >
        {animatedTabsData.map((tab) => {
          return (
            <TabTrigger
              key={tab.id}
              tab={tab}
              setSelectTabAction={setSelectTab}
              selectedTab={selectTab}
            />
          );
        })}
      </div>
      <TabContent content={selectTab.content} />
    </div>
  );
}
