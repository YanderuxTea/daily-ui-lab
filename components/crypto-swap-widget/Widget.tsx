"use client";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownUp } from "lucide-react";
import { useState } from "react";
import Card from "./Card";
import Input from "./Input";
type Value = "ETH" | "USDT";
export default function Widget() {
  const courseETH = 3425.8;
  const courseUSDT = (1 / courseETH).toFixed(5);
  const [changeValue, setChangeValue] = useState<Value>("ETH");
  const [ethValue, setEthValue] = useState<string>("1");
  const [usdtValue, setUsdtValue] = useState<string>(
    (Number(ethValue) * courseETH).toFixed(2),
  );
  return (
    <div
      className={cn(
        "flex flex-col max-w-md w-full border border-csw-border bg-csw-bg-card p-6 rounded-3xl gap-5",
      )}
    >
      <p className={cn("text-lg font-semibold tracking-wide text-center")}>
        Обмен активов
      </p>
      <div
        className={cn(
          "relative flex flex-col gap-2 items-center justify-center",
        )}
      >
        <Card classname={cn(changeValue === "ETH" ? "order-1" : "order-2")}>
          <div className={cn("flex flex-row justify-between text-xs")}>
            <p className={cn("font-medium text-csw-text-secondary")}>
              {changeValue === "ETH" ? "Вы отдаете" : "Вы получаете"}
            </p>
            <p className={cn("text-csw-text-secondary")}>
              Баланс:
              <span className={cn("text-white", jetbrains_mono.className)}>
                {" "}
                1.45 ETH
              </span>
            </p>
          </div>
          <div className={cn("flex flex-row justify-between gap-4")}>
            <Input
              value={ethValue}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^\d*\.?\d*$/.test(value)) {
                  setEthValue(value);

                  const num = Number(value);
                  if (!isNaN(num)) {
                    setUsdtValue((num * courseETH).toFixed(2));
                  }
                }
              }}
            />
            <div
              className={cn(
                "px-3 py-1.5 border bg-csw-bg-card border-csw-border rounded-xl text-white font-bold tracking-wide text-sm",
              )}
            >
              ETH
            </div>
          </div>
        </Card>
        <Card classname={cn(changeValue === "USDT" ? "order-1" : "order-2")}>
          <div className={cn("flex flex-row justify-between text-xs")}>
            <p className={cn("font-medium text-csw-text-secondary")}>
              {changeValue === "USDT" ? "Вы отдаете" : "Вы получаете"}
            </p>
            <p className={cn("text-csw-text-secondary")}>
              Баланс:
              <span className={cn("text-white", jetbrains_mono.className)}>
                {" "}
                350.00 USDT
              </span>
            </p>
          </div>
          <div className={cn("flex flex-row justify-between gap-4")}>
            <Input
              value={usdtValue}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^\d*\.?\d*$/.test(value)) {
                  setUsdtValue(value);

                  const num = Number(value);
                  if (!isNaN(num)) {
                    setEthValue((num * Number(courseUSDT)).toFixed(2));
                  }
                }
              }}
            />
            <div
              className={cn(
                "px-3 py-1.5 border bg-csw-bg-card border-csw-border rounded-xl text-white font-bold tracking-wide text-sm",
              )}
            >
              USDT
            </div>
          </div>
        </Card>
        <AnimatePresence initial={false}>
          <motion.button
            key={changeValue}
            animate={{ rotate: 180 }}
            onClick={() =>
              setChangeValue((prev) => (prev === "ETH" ? "USDT" : "ETH"))
            }
            className={cn(
              "flex items-center justify-center text-csw-text-secondary hover:text-white absolute z-100 w-10 aspect-square border bg-csw-bg-card border-csw-border hover:border-csw-border-focus cursor-pointer rounded-xl transition-colors duration-150",
            )}
          >
            <ArrowDownUp size={18} />
          </motion.button>
        </AnimatePresence>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2.5 text-xs p-3.5 border rounded-xl text-csw-text-secondary border-csw-border/50",
        )}
      >
        <div className={cn("flex flex-row justify-between")}>
          <p>Курс обмена</p>
          <p className={cn("text-white font-medium", jetbrains_mono.className)}>
            {changeValue === "ETH"
              ? `1 ETH ≈ ${courseETH} USDT`
              : `1 USDT ≈ ${courseUSDT} ETH`}
          </p>
        </div>
        <div className={cn("flex flex-row justify-between")}>
          <p>Сетевая комиссия</p>
          <p
            className={cn(
              "text-csw-success font-medium",
              jetbrains_mono.className,
            )}
          >
            ~$2.40 (0.0007 ETH)
          </p>
        </div>
      </div>
      <button
        className={cn(
          "py-4 cursor-pointer transition-all duration-150 font-semibold text-sm bg-csw-accent active:scale-99 hover:bg-csw-accent/90 shadow-[0_0_10px] shadow-csw-accent rounded-2xl",
        )}
      >
        Обменять активы
      </button>
    </div>
  );
}
