"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Upload } from "lucide-react";
import { Files } from "@/components/file-upload-dropzone/DropzoneFullBlock";
import { v4 as uuid } from "uuid";

export type StatusDownload = "success" | "error" | "none";
type Props = {
  setFilesAction: Dispatch<SetStateAction<Files[]>>;
};
export default function DropzoneContainer({ setFilesAction }: Props) {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusDownload>("none");
  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setStatus("none");
    }, 2400);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [status]);
  function addFiles(files: FileList) {
    for (const file of files) {
      const sizeInMb = file.size / 1024 / 1024;
      const fileName = file.name;
      const fileType = file.type.startsWith("image")
        ? "image"
        : file.type.endsWith("pdf")
          ? "pdf"
          : "other";
      if (sizeInMb > 10) {
        setStatus("error");
        setFilesAction((prevState) => {
          return [
            {
              id: uuid(),
              name: fileName,
              type: fileType,
              size: file.size,
              status: "error",
            },
            ...prevState,
          ];
        });
        return;
      }
      setStatus("success");
      setFilesAction((prevState) => {
        return [
          {
            id: uuid(),
            name: fileName,
            type: fileType,
            size: file.size,
            status: "success",
          },
          ...prevState,
        ];
      });
    }
  }
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={isDragOver ? { scale: 1.015 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={
        "max-w-120 w-full rounded-2xl border-[1.5] border-dashed flex flex-col gap-4 items-center" +
        ` py-10 px-8 transition-colors duration-200 relative mx-auto ${
          isDragOver
            ? "border-dz-accent" + " bg-dz-surface-drag"
            : status === "success"
              ? "border-dz-success bg-dz-surface-success"
              : status === "error"
                ? "border-dz-error bg-dz-surface-error"
                : "border-dz-border-dashed" + " bg-dz-surface"
        }`
      }
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={isDragOver ? { scale: 1.15 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className={
          "w-14 aspect-square rounded-[14px] bg-dz-surface-alt border border-dz-border-light text-dz-accent flex" +
          " items-center justify-center"
        }
      >
        <Upload size={24} />
      </motion.div>
      <p className={"text-[15px] font-semibold"}>Drop files here</p>
      <p className={"text-[13px] font-normal text-dz-text-muted"}>
        or click to browse
      </p>
      <p className={"text-xs font-normal text-dz-text-time"}>
        PNG, JPG, PDF, DOC · max 10 MB
      </p>
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => {
          setIsDragOver(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          addFiles(e.dataTransfer.files);
        }}
        htmlFor={"input-file"}
        className={"absolute inset-0 cursor-pointer"}
      >
        <input
          multiple
          accept={
            "application/pdf, image/*,.doc," +
            " .docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          }
          type="file"
          id={"input-file"}
          className={"hidden"}
          onChange={(e) => {
            if (e.target.files) {
              addFiles(e.target.files);
            }
          }}
        />
      </label>
    </motion.div>
  );
}
