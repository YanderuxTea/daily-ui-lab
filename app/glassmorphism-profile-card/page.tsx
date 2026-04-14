import Card from "@/components/glassmorphism-profile-card/Card";
import { inter } from "@/lib/font";

export default function GPCPage() {
  return (
    <main
      className={`min-h-screen w-full bg-linear-135 from-[#121212] to-[#1e1e2f] flex items-center justify-center ${inter.className}`}
    >
      <Card />
    </main>
  );
}
