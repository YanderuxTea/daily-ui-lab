import { montserrat } from "@/lib/font";
import MainProvider from "@/components/main/MainProvider";
import SearchBlock from "@/components/main/SearchBlock";
import ContainerComponents from "@/components/main/ContainerComponents";

export default function MainPage() {
  return (
    <main
      className={`min-h-screen w-full bg-[#020617] ${montserrat.className} px-4 py-10`}
    >
      <div className={"max-w-7xl mx-auto w-full flex flex-col gap-6 "}>
        <MainProvider>
          <SearchBlock />
          <ContainerComponents />
        </MainProvider>
      </div>
    </main>
  );
}
