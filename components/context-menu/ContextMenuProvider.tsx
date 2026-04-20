"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  ContextMenuContext,
  ContextMenuContextType,
} from "@/components/context-menu/ContextMenuContext";

export default function ContextMenuProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTriggered, setIsTriggered] = useState<boolean>(false);
  const [isTriggeredText, setIsTriggeredText] = useState<string>("");
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const menuRef = useRef<HTMLDivElement | null>(null);
  function handleTriggered(text: string) {
    if (text.length === 0) {
      return;
    }
    setIsTriggered(true);
    setIsTriggeredText(text);
  }
  const value: ContextMenuContextType = {
    setIsActive: setIsActive,
    isActive: isActive,
    setPosition: setPosition,
    x: position.x,
    y: position.y,
    refMenu: menuRef,
    isTriggered: isTriggered,
    handleTriggered: handleTriggered,
    setIsTriggeredText: setIsTriggeredText,
    isTriggeredText: isTriggeredText,
  };
  useEffect(() => {
    function handleOpenContextMenu(e: MouseEvent) {
      e.preventDefault();
      setIsActive(true);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const newX = Math.min(e.clientX, width - 220);
      requestAnimationFrame(() => {
        const heightMenu = (menuRef.current?.clientHeight || 0) + 2;
        if (heightMenu) {
          const newY = Math.min(e.clientY, height - heightMenu);
          setPosition({ x: newX, y: newY });
        }
      });
    }
    function handleCloseContextMenu(e: MouseEvent | KeyboardEvent) {
      if (
        e instanceof MouseEvent &&
        e.button === 0 &&
        e.target !== menuRef.current
      ) {
        setIsActive(false);
      }
      if (e instanceof KeyboardEvent && e.key === "Escape") {
        setIsActive(false);
      }
    }
    window.document.addEventListener("mousedown", handleCloseContextMenu);
    window.document.addEventListener("keydown", handleCloseContextMenu);
    window.document.addEventListener("contextmenu", handleOpenContextMenu);
    return () => {
      window.document.removeEventListener("mousedown", handleCloseContextMenu);
      window.document.removeEventListener("contextmenu", handleOpenContextMenu);
      window.document.removeEventListener("keydown", handleCloseContextMenu);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsTriggered(false);
      setIsTriggeredText("");
    }, 3000);
  }, [isTriggered]);
  return (
    <ContextMenuContext.Provider value={value}>
      {children}
    </ContextMenuContext.Provider>
  );
}
