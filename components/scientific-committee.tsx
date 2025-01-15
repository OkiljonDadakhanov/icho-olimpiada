import Image from "next/image";

export function ScientificCommittee() {
  return (
    <section
      id="scientific-committee"
      className="py-20 px-4 bg-white border-t border-gray-200"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Scientific Committee
        </h2>

        <div className="flex flex-row items-center justify-center gap-8 mb-12">
          {/* Xamza */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg relative">
              <Image
                src="/images/xamza.jpg"
                alt="Xamza Turobov"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="font-semibold text-xl mt-4">Prof. Xamza Turobov</h3>
            <p className="text-sm text-gray-600">
              Chairman of the Scientific Committee
            </p>
          </div>

          {/* Committee Member */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg relative">
              <Image
                src="/images/profile.png"
                alt="From foreign country"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="font-semibold text-xl mt-4">From foreign country</h3>
            <p className="text-sm text-gray-600">Committee member</p>
          </div>
        </div>

        {/* Additional committee members */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-center mb-12">
          {[
            {
              name: "From foreign country",
              title: "Committee member",
              image: "/images/profile.png",
            },
            {
              name: "From foreign country",
              title: "Committee member",
              image: "/images/profile.png",
            },
            {
              name: "From foreign country",
              title: "Committee member",
              image: "/images/profile.png",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg relative">
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

        {/* Detailed committee members */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              name: "Acad. Shamansur Sagdullaev",
              title:
                "Director of Institute of Plan Chemistry. Committee member",
              image: "/images/shamansur.jpg",
            },
            {
              name: "Prof. Burkhon Elmuradov",
              title:
                "Deputy Director for Research and Innovation of Institute of Plant Chemistry, Committee member",
              image: "/images/profile.png ",
            },
            {
              name: "Prof. Khamid Khodjaniyazov",
              title:
                "Leading Researcher of Complex Compounds Lab., A.S. Sadykov Bioorganic Chemistry Institute, Committee member",
              image: "/images/khamid.png",
            },
            {
              name: "Prof. Abdujalol Sidikov",
              title:
                "Tashkent institute of chemical technologies, Committee member",
              image: "/images/profile.png",
            },
            {
              name: "Bekzod Boltayev",
              title: "ICHO Gold Medalist – 2013, 2014, Committee member",
              image: "/images/bekzod.jpg",
            },
            {
              name: "Xamidullo To'xtayev",
              title: "IMCHO Gold Medalist – 2012, Committee member",
              image: "/images/xamidullo.jpg",
            },
            {
              name: "Muzaffar Maksumov",
              title: "Graduate of the University of Siegen, Committee member",
              image: "/images/muzaffar.jpg",
            },
            {
              name: "Malik Abdul Rehman",
              title: "Acting head of department, Associate Professor",
              image: "/images/malik.jpg",
            },
            {
              name: "Javlon Muxsumov",
              title: "ICHO Silver Medalist – 2014, Committee member",
              image: "/images/javlon.jpg",
            },
            {
              name: "Abdulloh Mahmudov",
              title: "ICHO Gold Medalist – 2023, Committee member",
              image: "/images/abdulloh.jpg",
            },
            {
              name: "Mirumid Mirakbarov",
              title: "ICHO Silver Medalist – 2020, Committee member",
              image: "/images/mirumid.jpg",
            },
            {
              name: "Ameen Shahid",
              title: "Assistant Professor",
              image: "/images/ameen.jpg",
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
