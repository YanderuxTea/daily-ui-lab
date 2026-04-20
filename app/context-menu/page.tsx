import { dm_sans } from "@/lib/font";
import PreviewContentContextMenu from "@/components/context-menu/PreviewContentContextMenu";
import ContextMenuProvider from "@/components/context-menu/ContextMenuProvider";

export default function CMPage() {
  return (
    <main
      className={`flex items-center justify-center bg-[#0a0a0f] min-h-screen w-full ${dm_sans.className} text-white`}
    >
      <ContextMenuProvider>
        <PreviewContentContextMenu />
      </ContextMenuProvider>
    </main>
  );
}
