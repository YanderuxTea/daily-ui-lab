"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MessageCard() {
  const [isLike, setIsLike] = useState<boolean>(false);
  return (
    <div
      className={
        "w-full max-w-150 p-4 rounded-2xl bg-[#111827] border border-[#1F2937] transition-colors duration-200" +
        " hover:bg-[#1A2235] flex flex-col gap-3"
      }
    >
      <div className={"flex flex-row justify-between items-center"}>
        <div className={"flex flex-row items-center gap-3"}>
          <div
            className={
              "w-8 aspect-square rounded-[50%] flex items-center justify-center text-xl border border-[#1F2937]"
            }
          >
            🧑‍💻
          </div>
          <p className={"hover:underline font-semibold cursor-pointer"}>
            Александр
          </p>
        </div>
        <p className={"text-xs text-[#9CA3AF]"}>2ч назад</p>
      </div>
      <article className={"text-sm/5.25 text-left hyphens-auto"}>
        Я бы съел ещё французских булочек и запил бы их чёрным чаем. Съешь же
        ещё этих мягких французских булок, да выпей чаю.
      </article>
      <div
        className={"text-[13px] text-[#9CA3AF] font-medium inline-flex gap-1.5"}
      >
        <motion.button
          onClick={() => setIsLike(!isLike)}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className={
            `cursor-pointer transition-colors duration-150 focus:ring-2 outline-none focus:ring-[#6366F1] ${
              isLike
                ? "bg-[#6366F1] text-[#E5E7EB]"
                : "hover:bg-[#1F2937]" +
                  " active:bg-[#6366F1] hover:text-[#E5E7EB] active:text-[#E5E7EB]"
            } ` + " rounded-lg py-1.5 px-2.5 "
          }
        >
          Лайк
        </motion.button>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className={
            "cursor-pointer transition-colors duration-150 hover:bg-[#1F2937] hover:text-[#E5E7EB] focus:ring-2 outline-none focus:ring-[#6366F1]" +
            " rounded-lg py-1.5 px-2.5"
          }
        >
          Ответить
        </motion.button>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className={
            "cursor-pointer transition-colors duration-150 hover:bg-[#1F2937] hover:text-[#E5E7EB] focus:ring-2 outline-none focus:ring-[#6366F1]" +
            " rounded-lg py-1.5 px-2.5"
          }
        >
          Еще
        </motion.button>
      </div>
    </div>
  );
}
