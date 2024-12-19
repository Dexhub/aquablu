import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LUXE</h3>
            <p className="text-gray-400">
              Transforming spaces into luxurious sanctuaries since 1995.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition">Products</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+91 79 2658 2424</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>info@luxebathrooms.in</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>Prahladnagar, Ahmedabad</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
              <a href="#" className="hover:text-pink-400 transition"><Instagram /></a>
              <a href="#" className="hover:text-blue-300 transition"><Twitter /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;