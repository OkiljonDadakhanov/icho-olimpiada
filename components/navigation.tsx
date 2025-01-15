"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for hamburger and close icons
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-navy-900 font-bold text-2xl"
            >
              <Image
                src="/images/main.png" // Replace with the actual path to your logo
                alt="Logo"
                width={100} // Adjust the width of the logo
                height={100} // Adjust the height of the logo
                className="mr-2 ml-[28px]" // Adds some spacing between the logo and the text
              />
            </Link>

            {/* Hamburger Icon (Visible on Mobile) */}
            <button
              className="lg:hidden flex items-center text-3xl"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menu for Mobile */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute top-20 left-0 w-full bg-gray-900 text-white text-center py-6`}
            >
              <ul className="text-lg">
                <li className="py-3">
                  <Link
                    href="#about"
                    className="block hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                  >
                    About
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    href="#committee"
                    className="block hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                  >
                    Supervisory Committee
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    href="#schedule"
                    className="block hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                  >
                    Schedule
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    href="#scientific-committee"
                    className="block hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                  >
                    Scientific Committee
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    href="#locations"
                    className="block hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                  >
                    Locations
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    href="#contact"
                    className="block hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <Link
                href="#about"
                className="text-navy-900 text-xl hover:text-navy-700 hover:bg-gray-200 px-3 py-2 rounded transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="#committee"
                className="text-navy-900 text-xl hover:text-navy-700 hover:bg-gray-200 px-3 py-2 rounded transition-all duration-300"
              >
                Supervisory Committee
              </Link>

              <Link
                href="#schedule"
                className="text-navy-900 text-xl hover:text-navy-700 hover:bg-gray-200 px-3 py-2 rounded transition-all duration-300"
              >
                Schedule
              </Link>

              <Link
                href="#scientific-committee"
                className="text-navy-900 text-xl hover:text-navy-700 hover:bg-gray-200 px-3 py-2 rounded transition-all duration-300"
              >
                Scientific Committee
              </Link>

              <Link
                href="#locations"
                className="text-navy-900 text-xl hover:text-navy-700 hover:bg-gray-200 px-3 py-2 rounded transition-all duration-300"
              >
                Locations
              </Link>

              <Link
                href="#contact"
                className="text-navy-900 text-xl hover:text-navy-700 hover:bg-gray-200 px-3 py-2 rounded transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
