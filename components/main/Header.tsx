import Image from "next/image";
import Logo from "../../app/favicon.ico";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={
        "sticky top-0 p-4 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800/60 z-100"
      }
    >
      <div
        className={
          "flex flex-row justify-between w-full mx-auto max-w-7xl items-center "
        }
      >
        <Link href={"/"} className={"flex flex-row gap-3 items-center group"}>
          <Image
            loading={"eager"}
            src={Logo}
            alt="Logo"
            width={32}
            height={32}
            className={
              "rounded-lg rotate-15 group-hover:rotate-0 transition-transform duration-300"
            }
          />
          <span
            className={
              "hidden md:block uppercase text-[20px] font-bold text-slate-200"
            }
          >
            ui lab
          </span>
        </Link>
        <div
          className={
            "flex flex-row divide-x divide-slate-800 text-slate-400 text-xs font-medium"
          }
        >
          <Link
            target={"_blank"}
            href={"https://kwork.ru/user/teawithsuqar"}
            className={"pr-4 hover:text-emerald-400 transition-colors"}
          >
            Kwork
          </Link>
          <Link
            target={"_blank"}
            href={"https://github.com/YanderuxTea"}
            className={"pl-4 hover:text-emerald-400 transition-colors"}
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
