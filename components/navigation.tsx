"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for hamburger and close icons
import Link from "next/link"; 
import { Button } from "@/components/ui/button"; 

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-navy-900 font-bold text-xl">
              58th IChO
            </Link>

            {/* Hamburger Icon (Visible on Mobile) */}
            <button
              className="lg:hidden flex items-center text-2xl"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menu for Mobile */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute top-16 left-0 w-full bg-gray-900 text-white text-center py-4`}
            >
              <ul>
                <li className="py-2">
                  <a href="#home" className="block hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li className="py-2">
                  <a href="#schedule" className="block hover:text-gray-300">
                    Schedule
                  </a>
                </li>
                <li className="py-2">
                  <a href="#locations" className="block hover:text-gray-300">
                    Locations
                  </a>
                </li>
                <li className="py-2">
                  <a href="#contact" className="block hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#about" className="text-navy-900 hover:text-navy-700">
                About
              </Link>
              <Link href="#schedule" className="text-navy-900 hover:text-navy-700">
                Schedule
              </Link>
              <Link href="#organizers" className="text-navy-900 hover:text-navy-700">
                Organizers
              </Link>
              <Button variant="default">Register</Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
