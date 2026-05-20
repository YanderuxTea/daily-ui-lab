"use client";
import { cn } from "@/lib/utils";
import Avatar from "./Avatar";
import { SizeData } from "./page";
import { useState } from "react";

export default function AvatarGroup({ sizeData }: { sizeData: SizeData }) {
  const { sizeDesc, size, avatars, textSize } = sizeData;
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className={cn("flex flex-col gap-4 items-center")}>
      <p
        className={cn(
          "uppercase text-[11px] text-ag-ink font-medium tracking-widest text-center",
        )}
      >
        {sizeDesc}
      </p>
      <div
        className={cn("flex flex-row")}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {avatars.map((avatar, index) => {
          return (
            <Avatar
              textSize={textSize}
              index={index}
              isHover={isHover}
              key={avatar.id + size}
              avatar={avatar}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
}
