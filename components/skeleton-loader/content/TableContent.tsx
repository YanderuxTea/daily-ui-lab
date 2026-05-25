import { tableData } from "@/data/skeleton-loader/skeletonLoaderData";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import Skeleton from "../Skeleton";
import StatusTag from "../StatusTag";

export default function TableContent({
  isLoader,
  formatter,
}: {
  isLoader: boolean;
  formatter: Intl.DateTimeFormat;
}) {
  return (
    <div className={cn("flex flex-col overflow-x-auto")}>
      <div
        className={cn(
          "grid grid-cols-[2fr_2fr_1fr_1fr] uppercase gap-2.5 text-[11px] font-semibold text-sl-muted-purple tracking-[0.06em] border-b border-sl-border-dark pb-3",
        )}
      >
        {isLoader ? (
          Array.from({ length: 4 }, (v, i) => i).map((i) => {
            return (
              <Skeleton
                classname={"flex-1 h-2.5"}
                key={`header-table-${i}`}
              />
            );
          })
        ) : (
          <>
            <p>Пользователь</p>
            <p>Роль</p>
            <p>Статус</p>
            <p>Дата</p>
          </>
        )}
      </div>

      {tableData.map((item, index) => {
        return (
          <div
            className={cn(
              "grid grid-cols-[2fr_2fr_1fr_1fr] gap-2.5 py-2.5 border-b border-sl-border-dark items-center",
            )}
            key={`item-table-${index}`}
          >
            <div className={cn("flex flex-row gap-2 items-center")}>
              {isLoader ? (
                <>
                  <Skeleton classname={"w-6 aspect-square rounded-full"} />
                  <Skeleton classname={"w-full h-2.5"} />
                </>
              ) : (
                <>
                  <div
                    className={cn(
                      "flex items-center justify-center w-6 aspect-square rounded-full font-bold text-[9px]",
                      item.colorAvatar,
                    )}
                  >
                    {item.avatar}
                  </div>
                  <p
                    className={cn(
                      "font-medium text-xs text-sl-accent-lavender",
                    )}
                  >
                    {item.name}
                  </p>
                </>
              )}
            </div>
            {isLoader ? (
              <Skeleton classname={"w-full h-2.5"} />
            ) : (
              <p className={cn("text-xs text-sl-muted-lavender")}>
                {item.role}
              </p>
            )}
            {isLoader ? (
              <Skeleton classname={"h-5.5 w-full"} />
            ) : (
              <StatusTag status={item.status} />
            )}
            {isLoader ? (
              <Skeleton classname={"h-2.5 w-full"} />
            ) : (
              <p
                className={cn(
                  "text-[11px] text-sl-muted-purple",
                  jetbrains_mono.className,
                )}
              >
                {formatter.format(item.date).replace("г.", "")}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
