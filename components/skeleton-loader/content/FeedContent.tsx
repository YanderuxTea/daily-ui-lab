import { feedData } from "@/data/skeleton-loader/skeletonLoaderData";
import { cn } from "@/lib/utils";
import Skeleton from "../Skeleton";

export default function FeedContent({ isLoader }: { isLoader: boolean }) {
  const { avatar, name, ago, tag, text } = feedData;
  return (
    <div className={cn("flex flex-row gap-3 items-start")}>
      {isLoader ? (
        <Skeleton classname={"w-9.5 aspect-square rounded-full"} />
      ) : (
        <div
          className={cn(
            "border w-9 aspect-square flex items-center justify-center rounded-full text-xs text-sl-accent-violet font-semibold border-sl-accent-violet/44 bg-sl-accent-violet/22",
          )}
        >
          {avatar}
        </div>
      )}
      <div className={cn("flex flex-col gap-1.5 relative flex-1")}>
        {!isLoader && (
          <div
            className={cn(
              "text-[10px] px-2 py-0.5 font-medium text-sl-accent-violet border border-sl-accent-violet/33 bg-sl-accent-violet/22 top-0 right-0 absolute rounded-md",
            )}
          >
            {tag}
          </div>
        )}
        <div className={cn("flex flex-row gap-2 items-center")}>
          {isLoader ? (
            <Skeleton classname={"h-2.75 w-25"} />
          ) : (
            <p className={cn("text-[13px] font-semibold")}>{name}</p>
          )}
          {isLoader ? (
            <Skeleton classname={"h-2.5 w-12.5"} />
          ) : (
            <p className={cn("text-[11px] text-sl-muted-purple")}>{ago}</p>
          )}
        </div>
        <div className={cn("flex flex-col gap-2")}>
          {isLoader ? (
            <>
              <Skeleton classname={"h-2.5 w-full"} />
              <Skeleton classname={"h-2.5 w-3/4"} />
              <Skeleton classname={"mt-1 p-22.5 w-full"} />
            </>
          ) : (
            <p className={cn("text-[13px] leading-1.5 text-sl-text-muted")}>
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
