import { musicPlayerData } from "@/data/music-player/musicPlayerData";
import { cn } from "@/lib/utils";
import {
  List,
  Pause,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  setIsPause: Dispatch<SetStateAction<boolean>>;
  isPause: boolean;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setRandom: Dispatch<SetStateAction<boolean>>;
  random: boolean;
  randomChoice: () => void;
};
export default function Tools({
  setIsPause,
  isPause,
  setCurrentIndex,
  setRandom,
  random,
  randomChoice,
}: Props) {
  return (
    <div className={cn("flex flex-row items-center justify-between")}>
      <button
        onClick={() => {
          setRandom((prev) => !prev);
        }}
        className={cn(
          "w-6 h-6 flex items-center justify-center cursor-pointer transition-all duration-150 active:scale-88 origin-center",
          random ? "text-mp-accent" : "text-mp-text-muted",
        )}
      >
        <Shuffle size={16} />
      </button>
      <button
        onClick={() => {
          if (random) {
            randomChoice();
          } else {
            setCurrentIndex((prev) => {
              if (prev === 0) {
                return musicPlayerData.length - 1;
              } else {
                return prev - 1;
              }
            });
          }
        }}
        className={cn(
          "w-7 h-7 flex items-center justify-center text-mp-text-muted cursor-pointer transition-all duration-150 active:scale-88 origin-center",
        )}
      >
        <SkipBack size={20} />
      </button>
      <button
        onClick={() => setIsPause((prev) => !prev)}
        className={cn(
          "w-12 h-12 flex items-center justify-center text-white cursor-pointer rounded-full bg-mp-accent transition-all duration-150 hover:bg-mp-accent-hover active:scale-93",
          isPause
            ? "shadow-[0_4px_20px_rgba(124,106,255,0.25)]"
            : "shadow-[0_4px_28px_rgba(124,106,255,0.45)]",
        )}
      >
        {isPause ? (
          <Play
            size={18}
            fill={"#fff"}
          />
        ) : (
          <Pause
            size={18}
            fill={"#fff"}
          />
        )}
      </button>
      <button
        onClick={() => {
          if (random) {
            randomChoice();
          } else {
            setCurrentIndex((prev) => {
              if (prev === musicPlayerData.length - 1) {
                return 0;
              } else {
                return prev + 1;
              }
            });
          }
        }}
        className={cn(
          "w-7 h-7 flex items-center justify-center text-mp-text-muted cursor-pointer transition-all duration-150 active:scale-88 origin-center",
        )}
      >
        <SkipForward size={20} />
      </button>
      <button
        className={cn(
          "w-6 h-6 flex items-center justify-center text-mp-text-muted cursor-pointer transition-all duration-150 active:scale-88 origin-center",
        )}
      >
        <List size={16} />
      </button>
    </div>
  );
}
