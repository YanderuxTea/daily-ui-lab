"use client";
import { easeInOut, motion } from "framer-motion";
import { Bell } from "lucide-react";
import { Dispatch, RefObject, SetStateAction } from "react";

type Props = {
  count: number;
  setIsOpenAction: Dispatch<SetStateAction<boolean>>;
  refButton: RefObject<HTMLButtonElement | null>;
};
export default function NotificationButton({
  count,
  setIsOpenAction,
  refButton,
}: Props) {
  return (
    <button
      ref={refButton}
      onClick={() => {
        setIsOpenAction((prevState) => !prevState);
      }}
      className={
        "w-11 aspect-square border bg-nc-surface-alt border-nc-border-light flex items-center justify-center" +
        " text-nc-icon-bell transition-colors hover:bg-nc-surface-hover cursor-pointer rounded-xl relative"
      }
    >
      <Bell size={20} />
      {count > 0 && (
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, ease: easeInOut, repeat: Infinity }}
          className={
            "absolute w-4.5 aspect-square rounded-full bg-nc-accent origin-center" +
            " text-[10px]" +
            " font-bold" +
            " text-white" +
            " -top-1.5 -right-1.5 flex items-center justify-center"
          }
        >
          {count}
        </motion.div>
      )}
    </button>
  );
}
