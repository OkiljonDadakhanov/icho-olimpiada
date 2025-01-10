// src/components/Sponsors.tsx
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
}

const Sponsors = () => {
  const sponsors: Sponsor[] = [
    {
      name: "O'zbekiston oliy ta'lim fan va innovatsiyalar vazirligi",
      logo: "/icons/oliy.png",
    },
    {
      name: "Ixtisoslashtirilgan ta'lim muassasalari agentligi",
      logo: "/icons/agentlik.png", // Replace with your actual image paths
    },
    {
      name: "Uzkimyosanoat",
      logo: "/icons/uzkimyosanoat.png", // Replace with your actual image paths
    },
    {
      name: "Maktabgacha va maktab ta'limi vazirligi",
      logo: "/icons/maktabgacha.png", // Replace with your actual image paths
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white py-10 px-5">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Sponsors & Partners
      </h2>
      <div className="flex justify-around gap-16 flex-wrap">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex items-center">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={200} // Increased size of the logos
              height={200} // Increased size of the logos
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <Separator className="bg-gray-700 h-px mt-6 w-full" />
    </div>
  );
};

export default Sponsors;
