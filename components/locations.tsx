// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
import SwiperOrganizers from "./ui/location-swiper";

export function Locations() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="locations">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Event Locationsssss
        </h2>

        <SwiperOrganizers />
      </div>
    </section>
  );
}
