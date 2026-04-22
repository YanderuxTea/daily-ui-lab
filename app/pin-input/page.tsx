import OTPInput from "@/components/pin-input/OTPInput";
import { dm_sans } from "@/lib/font";

export default function OTPPage() {
  return (
    <main
      className={`bg-[#0a0a0f] flex items-center justify-center min-h-screen w-full text-white ${dm_sans.className} flex-col gap-6 p-2.5 overflow-clip`}
    >
      <p className={"text-[#f1f5f9] text-lg font-medium"}>
        Two-factor authentication
      </p>
      <p className={"text-[#475569] text-[13px] font-normal"}>
        Enter the 6-digit code sent to your device
      </p>
      <OTPInput />
      <p className={"text-[#334155] text-[11px] font-normal text-center"}>
        Hint: correct code is 123456 <br /> You can paste string length is 6
        chars
      </p>
    </main>
  );
}
