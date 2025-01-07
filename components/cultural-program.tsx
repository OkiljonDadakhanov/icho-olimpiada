import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function CulturalProgram() {
  const excursions = [
    {
      title: "Tashkent Excursions",
      places: [
        { name: "Tashkent Metro", image: "/placeholder.svg" },
        { name: "Tashkent Museums", image: "/placeholder.svg" },
        { name: "Khast Imam Complex", image: "/placeholder.svg" },
      ],
    },
    {
      title: "Samarkand Excursions",
      places: [
        { name: "Registan Square", image: "/placeholder.svg" },
        { name: "Gur-Emir Mausoleum", image: "/placeholder.svg" },
        { name: "Shahi Zinda Complex", image: "/placeholder.svg" },
      ],
    },
  ];

  return (
    <section id="cultural-program" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Cultural and Social Programs
        </h2>

        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Chorvoq recreational area"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Excursions to iconic locations:
            </h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Historic Tashkent landmarks</li>
              <li>Chorvoq recreational area</li>
              <li>Samarkand</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Cultural Program:</h3>
            <p>
              Cultural evenings featuring Uzbek music, cuisine, and traditions.
            </p>
          </CardContent>
        </Card>

        {excursions.map((excursion) => (
          <div key={excursion.title} className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{excursion.title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {excursion.places.map((place) => (
                <Card key={place.name}>
                  <CardContent className="p-4">
                    <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={place.image}
                        alt={place.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center font-medium">{place.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
