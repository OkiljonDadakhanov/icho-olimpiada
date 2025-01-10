import Image from "next/image";

export function Organizers() {
  return (
    <section
      id="committee"
      className="py-20 px-4 bg-gray-50 border-t border-gray-200"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Supervisory Committee
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              name: "Xilola Umarova",
              title:
                "Minister of Pre-school and School Education, Chairman of the National Supervisory Committee",
              image: "/images/XilolaUmarova.jpg",
            },
            {
              name: "To'raboy Shermatov",
              title:
                "Director of Science Olympiad Center, Vice Chairman of the National Supervisory Committee",
              image: "/images/toraboy.jpg",
            },
            {
              name: "Alisher Ubbiyev",
              title:
                "Director of the Agency of Specialized Educational Institutions, Committee member",
              image: "/images/alisher.png",
            },
            {
              name: "Shavkat Umurzoqov",
              title: "Mayor of Tashkent, Committee member",
              image: "/images/shavkat.jpg",
            },
            {
              name: "Kongratbay Sharipov",
              title:
                "Minister of Higher Education, Science and Innovation, Committee member",
              image: "/images/kongratboy.jpg",
            },
            {
              name: "Ozodbek Nazarbekov",
              title: "Minister of Culture, Committee member",
              image: "/images/ozodbek.jpg",
            },
            {
              name: "Ilhom Maxkamov",
              title: "Minister of Transport, Committee member",
              image: "/images/ilxom.jpg",
            },
            {
              name: "Bahromjon Alovov",
              title: "Deputy Minister of Foreign Affairs, Committee member",
              image: "/images/bahrom.jpg",
            },
            {
              name: "Asilbek Xudayarov",
              title: "Minister of Health, Committee member",
              image: "/images/asilbek.jpg",
            },
            {
              name: "Odil Temirov",
              title: 'Chairman of the JSC "Uzkimyosanoat", Committee member',
              image: "/images/odil.jpg",
            },
            {
              name: "Po'lat Bobojonov",
              title: "Minister of the Interior, Committee member",
              image: "/images/polat.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg mt-4">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
