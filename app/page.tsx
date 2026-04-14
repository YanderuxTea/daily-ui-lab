import { montserrat } from "@/lib/font";
import Link from "next/link";

export default function MainPage() {
  return (
    <main
      className={`min-h-screen w-full bg-slate-900 flex flex-col gap-5 items-center justify-center ${montserrat.className}`}
    >
      <h1 className={"text-center font-bold text-neutral-200 text-2xl"}>
        Это главная страница. <br />
        Может быть, она поменяется в будущем :)
      </h1>
      <div className={"flex flex-col gap-1 w-300"}>
        <p className={"text-lg font-semibold text-neutral-300"}>Проекты:</p>
        <div className={"grid grid-cols-5 text-emerald-400"}>
          <Link
            href={"glassmorphism-profile-card"}
            className={
              "bg-blue-900/10 text-center px-2 py-1 rounded-md border border-blue-900/50 backdrop-blur-md" +
              " transition-all duration-150 ease-out hover:bg-blue-900/30 hover:border-blue-900/70 hover:scale-102"
            }
          >
            Карточка профиля(стекло)
          </Link>
        </div>
      </div>
    </main>
  );
}
