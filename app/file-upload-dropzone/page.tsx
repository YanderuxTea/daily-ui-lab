import { inter } from "@/lib/font";
import DropzoneFullBlock from "@/components/file-upload-dropzone/DropzoneFullBlock";

export default function page() {
  return (
    <main
      className={`bg-dz-bg min-h-screen w-full ${inter.className} text-dz-text-primary flex items-center justify-center p-2.5`}
    >
      <DropzoneFullBlock />
    </main>
  );
}
