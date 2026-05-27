import {
  avatarGroupData,
  AvatarType,
} from "@/data/avatar-group/avatarGroupData";
import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import AvatarGroup from "./AvatarGroup";
type Size = "sm" | "md" | "lg";
export type SizeData = {
  sizeDesc: string;
  size: number;
  avatars: AvatarType[];
  textSize: number;
};
type MapSize = Record<Size, SizeData>;
export default function page() {
  const mapSize: MapSize = {
    sm: {
      sizeDesc: "Small",
      size: 32,
      avatars: avatarGroupData.slice(0, 4),
      textSize: 10,
    },
    md: {
      sizeDesc: "Medium",
      size: 44,
      avatars: avatarGroupData.slice(0, 5),
      textSize: 14,
    },
    lg: {
      sizeDesc: "Large",
      size: 56,
      avatars: avatarGroupData.slice(0, 6),
      textSize: 18,
    },
  };
  return (
    <main
      className={cn(
        "flex flex-col items-center justify-center bg-ag-darkest p-2.5 w-full flex-1 gap-10",
        onest.className,
      )}
    >
      <p className={cn("text-center font-medium text-ag-medium")}>
        Этот компонент лучше тестировать на ПК. <br />
        Можно навестись мышкой
      </p>
      <div className={cn("flex flex-col gap-5")}>
        <AvatarGroup sizeData={mapSize["sm"]} />
        <AvatarGroup sizeData={mapSize["md"]} />
        <AvatarGroup sizeData={mapSize["lg"]} />
      </div>
    </main>
  );
}
