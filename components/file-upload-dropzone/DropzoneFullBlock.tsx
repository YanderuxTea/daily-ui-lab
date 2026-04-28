"use client";
import DropzoneContainer, {
  StatusDownload,
} from "@/components/file-upload-dropzone/DropzoneContainer";
import { useState } from "react";
import DropzoneFileList from "@/components/file-upload-dropzone/DropzoneFileList";

export type TypeFile = "pdf" | "image" | "other";
export type Files = {
  id: string;
  size: number;
  name: string;
  type: TypeFile;
  status: StatusDownload;
};
export default function DropzoneFullBlock() {
  const [files, setFiles] = useState<Files[]>([]);
  return (
    <div className={"flex flex-col w-full"}>
      <DropzoneContainer setFilesAction={setFiles} />
      <DropzoneFileList files={files} setFilesAction={setFiles} />
    </div>
  );
}
