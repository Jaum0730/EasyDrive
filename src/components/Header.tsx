
import { useState } from "react";
import { Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-brand-blue" />
            <span className="text-2xl font-bold text-gray-900">DriveEasy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-brand-blue transition-colors">Home</a>
            <a href="#cars" className="text-gray-700 hover:text-brand-blue transition-colors">Cars</a>
            <a href="#about" className="text-gray-700 hover:text-brand-blue transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors">Contact</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-brand-blue hover:bg-blue-700">Book Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-brand-blue transition-colors">Home</a>
              <a href="#cars" className="text-gray-700 hover:text-brand-blue transition-colors">Cars</a>
              <a href="#about" className="text-gray-700 hover:text-brand-blue transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full bg-brand-blue hover:bg-blue-700">Book Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
