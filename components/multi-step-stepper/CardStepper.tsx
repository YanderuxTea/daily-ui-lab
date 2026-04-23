"use client";
import { stepperData } from "@/data/multi-step-stepper/stepperData";
import { useEffect, useState } from "react";
import InputStepper from "@/components/multi-step-stepper/InputStepper";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Check, CircleCheckBig } from "lucide-react";

export default function CardStepper() {
  const [currentStep, setCurrentStep] = useState<{
    step: number;
    direction: number;
  }>({ step: 1, direction: 1 });
  const countStep = Object.entries(stepperData).length;
  const arraySteps = Object.values(stepperData);
  const { direction, step: stepCurrent } = currentStep;
  const configStep = () => {
    return stepperData[stepCurrent] ?? stepperData[1];
  };
  const { stepNumber, stepDescription, stepTitle, stepName, inputs } =
    configStep();
  const stepMotion = useMotionValue(stepCurrent);
  useEffect(() => {
    animate(stepMotion, stepCurrent, {
      type: "tween",
      duration: 0.4,
      ease: "easeInOut",
    });
  }, [stepCurrent, stepMotion]);
  const width = useTransform(stepMotion, [1, countStep], ["0%", "100%"]);
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };
  return (
    <div
      className={
        "bg-[#12121c] border border-white/7 rounded-2xl p-8 w-115 flex flex-col gap-12 text-white"
      }
    >
      <div className={"flex flex-col"}>
        <div className={"flex flex-row justify-between relative z-10"}>
          {arraySteps.map((step, i) => {
            return (
              <div
                key={`step-dot-${i}`}
                className={"flex flex-col items-center gap-1"}
              >
                <div
                  className={`relative w-7 aspect-square rounded-full flex items-center justify-center text-[11px] font-medium ${step.stepNumber < stepCurrent ? "border bg-[rgba(34,197,94,0.15)] border-[rgba(34,197,94,0.3)]" : stepCurrent === step.stepNumber ? "bg-[#3b82f6] text-white shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" : "border bg-white/6 border-white/8 text-[#475569]"}`}
                >
                  <span className={"relative z-10"}>
                    {step.stepNumber < stepCurrent ? (
                      <Check color={"#22c55e"} size={12} />
                    ) : (
                      step.stepNumber
                    )}
                  </span>
                  <div
                    className={
                      "bg-[#12121c] rounded-full inset-0 absolute -z-10"
                    }
                  ></div>
                </div>
                <p
                  className={`text-[11px] ${step.stepNumber < stepCurrent ? "text-[#22c55e]" : stepCurrent === step.stepNumber ? "text-[#f1f5f9]" : "text-[#475569]"}`}
                >
                  {step.stepTitle}
                </p>
              </div>
            );
          })}
        </div>
        <div
          className={
            "relative overflow-clip h-0.75 bg-white/6 -translate-y-6.25 rounded-full mr-6.5 ml-7.25"
          }
        >
          <motion.div
            className={
              "absolute inset-y-0 origin-left bg-[#3b82f6] rounded-full"
            }
            style={{ width: width }}
          ></motion.div>
        </div>
      </div>
      {stepCurrent === countStep + 1 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={"flex flex-col gap-3 items-center"}
        >
          <CircleCheckBig size={40} color={"#22c55e"} />
          <p className={"font-medium text-lg text-[#f1f5f9]"}>
            Account created!
          </p>
          <p className={"text-[13px] text-[#64748b]"}>
            Welcome aboard. Everything is set up.
          </p>
          <button
            onClick={() => {
              setCurrentStep({
                step: 1,
                direction: 1,
              });
            }}
            className={
              "cursor-pointer bg-white/4 border border-white/8 text-[13px] text-[#94a3b8] rounded-lg px-4 py-2" +
              " hover:bg-white/8 transition-colors duration-150"
            }
          >
            Start over
          </button>
        </motion.div>
      ) : (
        <>
          <div className={"flex flex-col gap-6 overflow-clip"}>
            <div className={"flex flex-col"}>
              <p className={"text-[#f1f5f9] text-lg font-medium"}>
                {stepTitle}
              </p>
              <p className={"text-[#64748b] text-[13px] leading-[1.6] mt-1"}>
                {stepDescription}
              </p>
            </div>
            <AnimatePresence mode={"wait"} custom={direction}>
              <motion.div
                variants={variants}
                custom={direction}
                initial={"enter"}
                animate={"center"}
                exit={"exit"}
                transition={{ duration: 0.2, type: "tween" }}
                key={`${stepCurrent}-${stepName}-${stepNumber}`}
                className={"flex flex-col gap-3"}
              >
                {inputs.map((input, i) => {
                  return (
                    <div
                      key={`input-stepper-${i}-${input.id}`}
                      className={"flex flex-col gap-1"}
                    >
                      <label
                        htmlFor={input.id}
                        className={"text-[#94a3b8] text-xs"}
                      >
                        {input.label}
                      </label>
                      <InputStepper
                        placeholder={input.placeholder}
                        type={input.type}
                        id={input.id}
                        autoComplete={"off"}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={"flex flex-row justify-between"}>
            {stepCurrent !== 1 ? (
              <button
                key={"back"}
                onClick={() => {
                  setCurrentStep((prevState) => {
                    return {
                      step: prevState.step - 1,
                      direction: -1,
                    };
                  });
                }}
                className={
                  "cursor-pointer bg-white/4 border border-white/8 text-[13px] text-[#94a3b8] rounded-lg px-4 py-2" +
                  " hover:bg-white/8 transition-colors duration-150"
                }
              >
                Back
              </button>
            ) : (
              <button
                key={"backHidden"}
                className={"border px-4 py-2 text-[13px] opacity-0"}
                disabled
              >
                Back
              </button>
            )}
            {stepCurrent === countStep ? (
              <button
                onClick={() => {
                  setCurrentStep((prevState) => {
                    return {
                      step: prevState.step + 1,
                      direction: 1,
                    };
                  });
                }}
                className={
                  "cursor-pointer bg-[#22c55e] text-white text-[13px] font-medium transition-colors duration-150" +
                  " px-4 py-2 rounded-lg hover:bg-[#16a34a]"
                }
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentStep((prevState) => {
                    return {
                      step: prevState.step + 1,
                      direction: 1,
                    };
                  });
                }}
                className={
                  "cursor-pointer bg-[#3b82f6] text-white text-[13px] font-medium rounded-lg px-4 py-2" +
                  " transition-colors duration-150 hover:bg-[#2563eb]"
                }
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
