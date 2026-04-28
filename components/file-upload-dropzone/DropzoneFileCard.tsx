"use client";
import {
  Files,
  TypeFile,
} from "@/components/file-upload-dropzone/DropzoneFullBlock";
import { Dispatch, SetStateAction, useState } from "react";
import { Check, File, FileText, Image, LucideIcon, X } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  file: Files;
  setFileAction: Dispatch<SetStateAction<Files[]>>;
};
export default function DropzoneFileCard({ file, setFileAction }: Props) {
  const mapConfigure: Record<TypeFile, { color: string; Icon: LucideIcon }> = {
    image: { color: "bg-[#161628] text-[#818CF8]", Icon: Image },
    pdf: { color: "bg-[#281616] text-[#F87171]", Icon: FileText },
    other: { color: "bg-[#18201A] text-[#4ADE80]", Icon: File },
  };
  const { color, Icon } = mapConfigure[file.type];
  const fileSize =
    file.size < 1024
      ? `${file.size} B`
      : file.size < 1024 * 1024
        ? `${(file.size / 1024).toFixed(1)} KB`
        : `${(file.size / 1024 / 1024).toFixed(1)} MB`;
  const [completed, setCompleted] = useState<boolean>(file.status === "error");
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05, type: "spring", stiffness: 280, damping: 22 }}
      exit={{
        opacity: 0,
        x: 16,
        height: 0,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      className={
        "bg-dz-surface-alt border border-dz-border rounded-[10px] py-2.5 px-4.5 flex items-start" +
        " gap-4 overflow-clip"
      }
    >
      <div
        className={`w-8 aspect-square rounded-lg ${color} flex items-center justify-center shrink-0`}
      >
        <Icon size={16} />
      </div>
      <div className={"flex flex-col w-full"}>
        <div className={"flex flex-row justify-between items-start w-full"}>
          <div className={"flex flex-col"}>
            <p className={"text-[13px] font-medium max-w-65 truncate"}>
              {file.name}
            </p>
            {file.status === "success" ? (
              <p className={"text-[11px] font-normal text-dz-text-dim mt-0.5"}>
                {fileSize}
              </p>
            ) : (
              <p className={"text-dz-error text-[11px] font-normal"}>
                File exceeds 10 MB limit
              </p>
            )}
          </div>
          {completed && (
            <button
              onClick={() =>
                setFileAction((prevState) =>
                  prevState.filter((f) => f.id !== file.id),
                )
              }
              className={
                "cursor-pointer w-5 aspect-square rounded-full flex items-center justify-center" +
                " text-dz-text-dim transition-colors duration-150 hover:bg-dz-error-bg hover:text-dz-error"
              }
            >
              <X size={12} />
            </button>
          )}
        </div>
        {file.status === "success" && (
          <div className={"flex flex-col"}>
            <div
              className={
                "w-full h-0.75 rounded-xs bg-dz-progress-track relative mt-2 flex"
              }
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                onAnimationComplete={() => setCompleted(true)}
                className={`absolute h-0.75 rounded-xs origin-left ${completed ? "bg-dz-success" : "bg-dz-accent"}`}
                transition={{ duration: 1.2, ease: "easeOut" }}
              ></motion.div>
            </div>
            {completed && (
              <p
                className={
                  "text-dz-success text-xs flex items-center flex-row gap-1 mt-1.5"
                }
              >
                <Check size={12} />
                Uploaded
              </p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
