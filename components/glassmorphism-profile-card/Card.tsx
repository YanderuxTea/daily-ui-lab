export default function Card() {
  return (
    <div
      className={
        "p-7.5 text-white bg-white/3 rounded-3xl border border-white/10 w-87.5 flex flex-col text-center" +
        " transition-transform duration-300 hover:border-white/20 hover:-translate-y-1.25"
      }
    >
      <div
        className={
          "select-none flex items-center justify-center w-25 aspect-square rounded-full bg-linear-45 from-[#6366f1]" +
          " to-[#a855f7] text-[40px] mx-auto mb-5"
        }
      >
        👨‍💻
      </div>
      <h1 className={"font-semibold text-2xl mb-2"}>Александр А.</h1>
      <p
        className={
          "text-[#94a3b8] mb-6 uppercase tracking-[1px] text-sm font-normal"
        }
      >
        Full-stack Developer
      </p>
      <div className={"grid grid-cols-3 py-3.75 border-y border-white/10 mb-6"}>
        <p className={"font-semibold text-lg"}>
          42 <br />
          <span className={"text-xs text-[#64748b] font-normal"}>Проекта</span>
        </p>
        <p className={"font-semibold text-lg"}>
          1.2k <br />
          <span className={"text-xs text-[#64748b] font-normal"}>Звезды</span>
        </p>
        <p className={"font-semibold text-lg"}>
          89 <br />
          <span className={"text-xs text-[#64748b] font-normal"}>Kwork</span>
        </p>
      </div>
      <button
        className={
          "p-3 font-semibold bg-white transition-opacity duration-200 text-black rounded-xl cursor-pointer" +
          " hover:opacity-90 text-[13px]"
        }
      >
        Связаться
      </button>
    </div>
  );
}
