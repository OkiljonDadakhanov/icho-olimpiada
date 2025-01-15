"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function AnimateScroll() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (in ms)
      offset: 200, // Offset (in px)
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return null;
}
