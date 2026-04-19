"use client";
import useToast from "@/components/toast-notification/useToast";

export default function ControlToast() {
  const toast = useToast();
  return (
    <div
      className={
        "flex flex-col gap-3 text-[#f1f5f9] text-center text-xs font-medium"
      }
    >
      <p>Click to trigger notifications</p>
      <div className={"grid grid-cols-4 text-[16px] gap-2"}>
        <button
          onClick={() =>
            toast.addNotification(
              "success",
              "Your profile has been updated successfully.",
            )
          }
          className={
            "border rounded-md px-2.5 py-1.25 cursor-pointer hover:opacity-80 bg-green-400/30 text-green-400"
          }
        >
          Success
        </button>
        <button
          onClick={() =>
            toast.addNotification("error", "Could not connect to the server.")
          }
          className={
            "border rounded-md px-2.5 py-1.25 cursor-pointer hover:opacity-80 bg-red-400/30 text-red-400"
          }
        >
          Error
        </button>
        <button
          onClick={() =>
            toast.addNotification("warning", "You are at 90% of your quota.")
          }
          className={
            "border rounded-md px-2.5 py-1.25 cursor-pointer hover:opacity-80 bg-yellow-400/30 text-yellow-400"
          }
        >
          Warning
        </button>
        <button
          onClick={() =>
            toast.addNotification("info", "Version 2.4.0 is ready to install.")
          }
          className={
            "border rounded-md px-2.5 py-1.25 cursor-pointer hover:opacity-80 bg-blue-400/30 text-blue-400"
          }
        >
          Info
        </button>
      </div>
      <p className={"text-[#94a3b8]"}>
        Hover a toast to pause · click × to dismiss
      </p>
    </div>
  );
}
