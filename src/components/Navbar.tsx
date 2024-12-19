import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="hidden lg:block bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-end space-x-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <span>+91 79 2658 2424</span>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <span>info@luxebathrooms.in</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>Prahladnagar, Ahmedabad</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">LUXE</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-blue-600 transition">Home</a>
            <a href="/products" className="text-gray-800 hover:text-blue-600 transition">Products</a>
            <a href="/services" className="text-gray-800 hover:text-blue-600 transition">Services</a>
            <a href="/about" className="text-gray-800 hover:text-blue-600 transition">About</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Home</a>
              <a href="/products" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Products</a>
              <a href="/services" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Services</a>
              <a href="/about" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">About</a>
              <a href="/contact" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;