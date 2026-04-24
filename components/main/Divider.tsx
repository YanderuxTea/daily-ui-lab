export default function Divider({ count }: { count: number }) {
  return (
    <div
      className={
        "border-b flex justify-end border-slate-800 text-slate-200 py-2 font-medium text-sm"
      }
    >
      Работ: {count}
    </div>
  );
}
