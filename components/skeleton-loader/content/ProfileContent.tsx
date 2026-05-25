import { profileData } from "@/data/skeleton-loader/skeletonLoaderData";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import Skeleton from "../Skeleton";

export default function ProfileContent({ isLoader }: { isLoader: boolean }) {
  const {
    avatar,
    name,
    subText,
    buttonText,
    text,
    components,
    views,
    subscribers,
  } = profileData;
  return (
    <div className={cn("flex flex-col gap-4.5 ")}>
      <div
        className={cn("flex flex-wrap justify-between items-center gap-3.5")}
      >
        <div className={cn("flex flex-row gap-3.5 items-center")}>
          {isLoader ? (
            <Skeleton classname={"w-13 aspect-square rounded-full"} />
          ) : (
            <div
              className={cn(
                "select-none flex items-center justify-center rounded-full border-2 w-12 aspect-square text-lg text-sl-accent-purple font-semibold border-sl-accent-violet/44 bg-sl-highlight",
              )}
            >
              {avatar}
            </div>
          )}
          <div className={cn("flex flex-col", isLoader ? "gap-2" : "gap-0.75")}>
            {isLoader ? (
              <Skeleton classname={"w-35 h-3.5"} />
            ) : (
              <p className={cn("text-[15px] font-semibold")}>{name}</p>
            )}
            {isLoader ? (
              <Skeleton classname={"w-22.5 h-2.5"} />
            ) : (
              <p className={cn("text-xs text-sl-muted-lavender")}>{subText}</p>
            )}
          </div>
        </div>
        {isLoader ? (
          <Skeleton classname={"w-20 h-7.5"} />
        ) : (
          <button
            className={cn(
              "px-3.5 py-1.75 rounded-[10px] text-white font-semibold text-xs bg-sl-accent-violet cursor-pointer",
            )}
          >
            {buttonText}
          </button>
        )}
      </div>
      <div className={cn("flex flex-col gap-2")}>
        {isLoader ? (
          <>
            <Skeleton classname={"h-2.75 w-full"} />
            <Skeleton classname={"h-2.75 w-17/20"} />
            <Skeleton classname={"h-2.75 w-3/4"} />
          </>
        ) : (
          <p className={cn("text-sl-text-muted text-[13px] leading-1.6")}>
            {text}
          </p>
        )}
      </div>
      <div className={cn("grid grid-cols-3 gap-2.5")}>
        {Array.from([components, views, subscribers], (v) => v).map((v) => {
          return isLoader ? (
            <Skeleton
              classname={"flex-1 h-14"}
              key={`skeleton-${v.text}`}
            />
          ) : (
            <div
              key={`content-${v.text}`}
              className={cn(
                "h-15.75 flex-1 flex flex-col items-center gap-0.75 rounded-xl bg-sl-bg-header p-3 leading-none",
              )}
            >
              <p
                className={cn(
                  "text-lg font-semibold text-sl-accent-purple",
                  jetbrains_mono.className,
                )}
              >
                {v.count > 1000 ? v.count / 1000 + "k" : v.count}
              </p>
              <p className={cn("text-[11px] text-sl-muted-purple")}>{v.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
