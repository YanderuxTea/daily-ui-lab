import {
  DM_Mono,
  DM_Sans,
  Geist,
  Inter,
  Montserrat,
  Manrope,
  Syne,
} from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});
export const geist = Geist({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});
export const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
});
export const dm_mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
export const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: "variable",
});
export const syne = Syne({
  subsets: ["latin"],
  weight: "variable",
});
