import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Locations() {
  return (
    <section id="locations" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Event Locations
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Theoretical Part</h3>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="New Uzbekistan University"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg">New Uzbekistan University</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Laboratory Part</h3>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="National University of Uzbekistan"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg">
                National University of Uzbekistan
                <br />
                <span className="text-sm text-muted-foreground">
                  (Chemistry, Physics, Biology Faculties)
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
