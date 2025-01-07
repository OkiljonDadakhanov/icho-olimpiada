import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Schedule } from "@/components/schedule";
import { Locations } from "@/components/locations";
import { CulturalProgram } from "@/components/cultural-program";
import { Organizers } from "@/components/organizers";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#8AB4DB] to-[#6B5B95]">
      <Navigation />
      <Hero />
      <Organizers />
      <Schedule />
      <Locations />
      <CulturalProgram />
      <Footer />
    </main>
  );
}
