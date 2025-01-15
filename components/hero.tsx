import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 px-4 min-h-[800px] bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-indigo-500/30"
      id="about"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mainhero.jpg"
          alt="Chemistry Molecule"
          className="object-cover opacity-30"
          fill
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl mr-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-[80px]">
          {/* Highlighted Image Section */}
          <div className="relative h-[400px]">
            {/* Placeholder for the left part if necessary */}
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              International Chemistry Olympiad
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/flag.jpg"
                alt="Uzbekistan Flag"
                width={80}
                height={60}
                className="rounded"
              />
              <div>
                <p className="text-xl font-semibold">Tashkent, Uzbekistan</p>
                <p className="text-lg text-gray-600">10-20 July, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
