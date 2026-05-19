import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  viewDate: Date;
  setViewDate: Dispatch<SetStateAction<Date>>;
  formatterHeader: Intl.DateTimeFormat;
};
export default function HeaderCalendar({
  viewDate,
  setViewDate,
  formatterHeader,
}: Props) {
  return (
    <div className={cn("flex flex-row justify-between items-center")}>
      <button
        onClick={() =>
          setViewDate(
            (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1),
          )
        }
        className={cn(
          "w-7.5 aspect-square flex items-center justify-center cursor-pointer transition-colors duration-200 text-mec-muted rounded-lg hover:text-mec-purple hover:bg-mec-primary",
        )}
      >
        <ChevronLeft size={16} />
      </button>
      <p className={cn("font-semibold text-[15px]")}>
        {formatterHeader.format(viewDate).charAt(0).toUpperCase() +
          formatterHeader.format(viewDate).slice(1).replace("г.", "")}
      </p>
      <button
        onClick={() =>
          setViewDate(
            (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1),
          )
        }
        className={cn(
          "w-7.5 aspect-square flex items-center justify-center cursor-pointer transition-colors duration-200 text-mec-muted rounded-lg hover:text-mec-purple hover:bg-mec-primary",
        )}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
