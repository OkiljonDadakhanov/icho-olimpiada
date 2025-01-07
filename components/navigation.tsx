import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-navy-900 font-bold text-xl">
            58th IChO
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-navy-900 hover:text-navy-700">
              About
            </Link>
            <Link
              href="#organizers"
              className="text-navy-900 hover:text-navy-700"
            >
              Organizers
            </Link>
            <Link
              href="#schedule"
              className="text-navy-900 hover:text-navy-700"
            >
              Schedule
            </Link>
            <Link
              href="#locations"
              className="text-navy-900 hover:text-navy-700"
            >
              Locations
            </Link>
            <Button variant="default" className="text-blue-300">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
