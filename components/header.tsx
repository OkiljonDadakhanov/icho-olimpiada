import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">ICHO 2025</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">jhjkhsd</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#sponsors">Sponsors</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
