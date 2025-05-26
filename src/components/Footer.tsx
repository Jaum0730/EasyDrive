
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-brand-blue" />
              <span className="text-2xl font-bold">DriveEasy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for premium car rentals. Experience the freedom of the road with our exceptional fleet and service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#cars" className="text-gray-400 hover:text-white transition-colors">Our Fleet</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Economy Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Vehicles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electric Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Long-term Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Fleet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Airport Pickup</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <span className="text-gray-400">123 Business Avenue, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-blue" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-blue" />
                <span className="text-gray-400">info@driveeasy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 DriveEasy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
