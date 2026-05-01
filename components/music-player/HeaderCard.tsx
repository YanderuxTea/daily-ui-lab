import { MusicPlayerData } from "@/data/music-player/musicPlayerData";
import { cn } from "@/lib/utils";
import { Heart, Music } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
interface Props extends Omit<MusicPlayerData, "duration"> {
  setMusicData: Dispatch<SetStateAction<MusicPlayerData[]>>;
}
export default function HeaderCard({
  id,
  bg,
  name,
  author,
  like,
  setMusicData,
}: Props) {
  return (
    <div className={cn("flex flex-row justify-between items-center")}>
      <div className={cn("flex flex-row gap-3 items-center")}>
        <div
          className={cn(
            "flex items-center justify-center w-18 aspect-square rounded-[14px] text-white/50",
            bg,
          )}
        >
          <Music />
        </div>
        <div className={cn("flex flex-col")}>
          <p className={cn("text-mp-text-primary font-semibold text-[15px]")}>
            {name}
          </p>
          <p className={cn("text-mp-text-secondary font-normal text-[13px]")}>
            {author}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setMusicData((prev) => {
            return prev.map((music) => {
              if (music.id === id) {
                return {
                  ...music,
                  like: !music.like,
                };
              }
              return music;
            });
          });
        }}
        className={cn(
          "w-8 h-8 flex items-center justify-center cursor-pointer rounded-full transition-colors",
          like && "bg-mp-like-bg",
        )}
      >
        <Heart
          size={18}
          fill={like ? "#ff6b8a" : "transparent"}
          color={like ? "#ff6b8a" : "#55555f"}
          className={cn("transition-colors")}
        />
      </button>
    </div>
  );
}
