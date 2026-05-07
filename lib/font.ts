import {
  DM_Mono,
  DM_Sans,
  Fira_Code,
  Geist,
  Golos_Text,
  IBM_Plex_Mono,
  Inter,
  JetBrains_Mono,
  Manrope,
  Montserrat,
  Onest,
  Plus_Jakarta_Sans,
  Space_Grotesk,
  Space_Mono,
  Syne,
  Unbounded,
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
export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
});
export const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const onest = Onest({
  subsets: ["cyrillic", "latin"],
  weight: "variable",
});
export const fira_code = Fira_Code({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});
export const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});
export const golos_text = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});
export const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});
export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "variable",
});
export const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
