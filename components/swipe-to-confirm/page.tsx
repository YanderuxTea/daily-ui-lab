"use client";
import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { ChevronRight, LogOut, Trash2 } from "lucide-react";
import Widget from "./Widget";

export default function STCPage() {
  return (
    <main
      className={cn(
        "flex flex-1 justify-center items-center p-2.5 text-swc-text bg-swc-bg",
        inter.className,
      )}
    >
      <div className={cn("flex flex-col gap-2.5 w-full items-center")}>
        <Widget
          classnameFill={"bg-swc-primary-fill/50"}
          classnameSwiper={"bg-swc-primary"}
          classnameTag={"bg-swc-primary/15 text-[#60a5fa]"}
          title={"Опубликовать изменения"}
          subText={"Изменения будут применены в продакшн среде"}
          tag={"Primary"}
          textFor={"публикации"}
          icon={ChevronRight}
          textComplete={"Изменения опубликованы"}
        />
        <Widget
          classnameFill={"bg-swc-danger-fill/50"}
          classnameSwiper={"bg-swc-danger"}
          classnameTag={"bg-swc-danger/15 text-[#f87171]"}
          title={"Удалить аккаунт"}
          subText={"Действие необратимо - все данные будут удалены"}
          tag={"Danger"}
          textFor={"удаления"}
          icon={Trash2}
          textComplete={"Аккаунт удален"}
        />
        <Widget
          classnameFill={"bg-swc-warning-fill/50"}
          classnameSwiper={"bg-swc-warning"}
          classnameTag={"bg-swc-warning/15 text-[#fbbf24]"}
          title={"Завершить сеанс"}
          subText={"Все несохранённые данные будут утеряны"}
          tag={"Warning"}
          textFor={"завершения"}
          icon={LogOut}
          textComplete={"Сеанс завершен"}
        />
      </div>
    </main>
  );
}
