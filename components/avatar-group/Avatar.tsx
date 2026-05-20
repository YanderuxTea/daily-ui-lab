"use client";
import { AvatarType } from "@/data/avatar-group/avatarGroupData";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function Avatar({
  avatar,
  size,
  isHover,
  index,
  textSize,
}: {
  index: number;
  avatar: AvatarType;
  size: number;
  isHover: boolean;
  textSize: number;
}) {
  const { name, avatar: avatarText, color } = avatar;
  const [hoverAvatar, setHoverAvatar] = useState<boolean>(false);
  return (
    <motion.div
      onMouseEnter={() => setHoverAvatar(true)}
      onMouseLeave={() => setHoverAvatar(false)}
      whileHover={{ y: -6, scale: 1.12 }}
      layout
      className={cn(
        "ring-4 rounded-full ring-ag-darkest flex items-center justify-center select-none cursor-pointer relative",
        color,
        isHover ? "mx-1" : "-mx-1",
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        zIndex: index,
        fontSize: `${textSize}px`,
      }}
    >
      <span>{avatarText}</span>
      <AnimatePresence>
        {hoverAvatar && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -4 }}
            className={cn(
              "absolute bottom-full px-2.5 py-1.25 border rounded-lg text-xs bg-ag-darker border-ag-border text-ag-primary font-medium",
            )}
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
