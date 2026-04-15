"use client";

import { useState } from "react";
import { statsData } from "@/data/dashboard-activity-widget/statsData";
import { motion } from "framer-motion";

export default function Card() {
  const [currentPick, setCurrentPick] = useState<"week" | "month">("week");
  return (
    <div
      className={
        "border max-w-100 w-full p-6  bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col"
      }
    >
      <div className={"w-full mb-8 flex flex-row justify-between items-center"}>
        <h2 className={"font-semibold text-xl text-white"}>Активность</h2>
        <div
          className={
            "flex flex-row border p-1 font-medium text-xs rounded-xl border-white/5 bg-black/20"
          }
        >
          <button
            onClick={() => setCurrentPick("week")}
            className={`px-4 py-1.5 rounded-lg text-slate-400 cursor-pointer transition-colors ${currentPick === "week" && "bg-white/10"}`}
          >
            Неделя
          </button>
          <button
            onClick={() => setCurrentPick("month")}
            className={`px-4 py-1.5 rounded-lg text-slate-400 cursor-pointer transition-colors ${currentPick === "month" && "bg-white/10"}`}
          >
            Месяц
          </button>
        </div>
      </div>
      <div className={"flex flex-col gap-6"}>
        {statsData[currentPick].map((item, index) => {
          return (
            <div key={currentPick + index} className={"flex flex-col gap-2"}>
              <div className={"flex flex-row justify-between"}>
                <p className={"text-sm text-slate-300 font-medium"}>
                  {item.title}
                </p>
                <p className={"font-semibold text-white text-sm"}>
                  {item.value}%
                </p>
              </div>
              <div
                className={
                  "relative h-2 bg-white/5 rounded-full overflow-hidden"
                }
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                  className={`absolute bg-linear-to-r ${item.color} inset-y-0 rounded-full`}
                ></motion.div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={
          "border-t border-white/5 mt-8 pt-6 flex flex-row justify-between items-center"
        }
      >
        <div className={"flex flex-col"}>
          <p className={"text-slate-500 text-[10px] uppercase tracking-wider"}>
            Всего задач
          </p>
          <p className={"text-white text-lg font-semibold"}>
            {currentPick === "week" ? "124" : "542"}
          </p>
        </div>
        <button
          className={
            "cursor-pointer px-4 py-2 text-sm transition-colors bg-indigo-600 hover:bg-indigo-500 rounded-xl" +
            " font-medium text-white"
          }
        >
          Детали
        </button>
      </div>
    </div>
  );
}
