"use client";
import { Dispatch, SetStateAction } from "react";
import { Files } from "@/components/file-upload-dropzone/DropzoneFullBlock";
import DropzoneFileCard from "@/components/file-upload-dropzone/DropzoneFileCard";
import { AnimatePresence } from "framer-motion";

type Props = {
  setFilesAction: Dispatch<SetStateAction<Files[]>>;
  files: Files[];
};
export default function DropzoneFileList({ setFilesAction, files }: Props) {
  return (
    <div className={"mt-5 flex flex-col gap-2.5 max-w-120 mx-auto w-full"}>
      <AnimatePresence mode={"popLayout"}>
        {files.map((file) => {
          return (
            <DropzoneFileCard
              key={file.id}
              file={file}
              setFileAction={setFilesAction}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
