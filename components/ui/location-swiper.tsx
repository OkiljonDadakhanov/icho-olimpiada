"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// Event location data
const eventLocations = [
  {
    title: "Opening Ceremony",
    description:
      "The opening ceremony of the IChO 2026 will be held at the Congress Hall in Tashkent.",
    image: "/images/congresshall1.jpg",
    alt: "Congress Hall in Tashkent",
  },
  {
    title: "Opening Ceremony",
    description:
      "The opening ceremony of the IChO 2026 will be held at the Congress Hall in Tashkent.",
    image: "/images/congresshall2.jpg",
    alt: "Congress Hall in Tashkent",
  },
  {
    title: "Experimental Exam",
    description: `National University of Uzbekistan
    (Chemistry and Biology Faculties)`,
    image: "/images/nuu1.JPG",
    alt: "National University of Uzbekistan",
  },

  {
    title: "Experimental Exam",
    description: `National University of Uzbekistan
    (Chemistry and Biology Faculties)`,
    image: "/images/nuu2.JPG",
    alt: "National University of Uzbekistan",
  },

  {
    title: "Theoretical Exam",
    description: "Zakovat Arena in Tashkent",
    image: "/images/zakovat1.webp",
    alt: "Zakovat Arena in Tashkent",
  },

  {
    title: "Theoretical Exam",
    description: "Zakovat Arena in Tashkent",
    image: "/images/zakovat2.jpg",
    alt: "Zakovat Arena in Tashkent",
  },
  {
    title: "Closing Ceremony",
    description:
      "The closing ceremony of the Olympiad will be held at the Symposium Palace in Tashkent.",
    image: "/images/symponium1.jpg",
    alt: "Symposium Palace in Tashkent",
  },
  {
    title: "Closing Ceremony",
    description:
      "The closing ceremony of the Olympiad will be held at the Symposium Palace in Tashkent.",
    image: "/images/symponium2.jpg",
    alt: "Symposium Palace in Tashkent",
  },
];

export default function SwiperOrganizers() {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-center text-2xl font-bold mb-8">Event Locations</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Autoplay will not stop after user interaction
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper px-4"
      >
        {eventLocations.map((location, index) => (
          <SwiperSlide key={index}>
            <Card className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {location.title}
                </h3>
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={location.image}
                    alt={location.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-lg text-gray-600 min-h-[3.5rem]">
                  {location.description}
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
