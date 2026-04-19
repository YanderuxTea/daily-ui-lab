import { useContext } from "react";
import { ToastContext } from "@/components/toast-notification/ToastContext";

export default function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Компонент не обернут в провайдер уведомлений");
  }
  return context;
}
