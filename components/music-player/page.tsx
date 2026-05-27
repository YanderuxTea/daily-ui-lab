import PlayerCard from "@/components/music-player/PlayerCard";
import { space_grotesk } from "@/lib/font";
import { cn } from "@/lib/utils";

export default function MPCPage() {
  return (
    <main
      className={cn(
        "bg-nc-bg flex-1 flex items-center justify-center w-full p-2.5",
        space_grotesk.className,
      )}
    >
      <PlayerCard />
    </main>
  );
}
