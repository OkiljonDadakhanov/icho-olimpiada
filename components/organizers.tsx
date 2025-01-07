import Image from "next/image";
export function Organizers() {
  return (
    <section
      id="organizers"
      className="py-20 px-4 bg-gray-50 border-t border-gray-200"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Organizers</h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold mb-4">Primary Organizer</h3>
          <p className="text-lg mb-6">
            Ministry of Preschool and School Education
          </p>

          <h3 className="text-xl font-semibold mb-4">Supporting Partners</h3>
          <p className="mb-6">
            The Ministry of Higher Education, Science and Innovation, The Agency
            of Specialized Educational Institutions and "Uz Chemistry Industry"
            companies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt={`Partner ${i}`}
                  width={200}
                  height={100}
                  className="max-w-[200px] h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium">
            Coordination with the Science Olympiad Center
          </p>
        </div>
      </div>
    </section>
  );
}
