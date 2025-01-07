export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-sm">
              The 58th IChO International Chemistry Olympiad will take place in
              Tashkent, Uzbekistan from 10-20 July 2026. It will bring together
              young chemists from around the globe to compete in chemistry
              challenges, fostering scientific collaboration and learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#schedule" className="hover:underline">
                  Program of Events
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:underline">
                  Event Locations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">
              <span className="block mb-2">
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-blue-400 hover:underline"
                >
                  info@example.com
                </a>
              </span>
              <span className="block mb-2">
                Phone:{" "}
                <a href="tel:+998338751305" className="hover:underline">
                  +998 33 875 1305
                </a>
              </span>
              <span className="block">
                Address: New Uzbekistan University, Tashkent, Uzbekistan
              </span>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
