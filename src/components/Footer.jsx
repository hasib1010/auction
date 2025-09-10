// components/Footer.js
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Logo and Copyright */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <h1 className="text-2xl font-bold tracking-wide">
                <span className="text-blue-400">S</span>
                <span className="text-yellow-300">U</span>
                <span className="text-red-400">P</span>
                <span className="text-green-400">E</span>
                <span className="text-purple-400">R</span>
                <span className="text-white ml-2">M</span>
                <span className="text-green-400">E</span>
                <span className="text-blue-400">D</span>
                <span className="text-yellow-300">I</span>
                <span className="text-red-400">A</span>
                <span className="text-white ml-2">B</span>
                <span className="text-red-400">R</span>
                <span className="text-green-400">O</span>
                <span className="text-blue-400">S</span>
                <span className="text-yellow-300">.</span>
              </h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Copyright © 2025 Super Media Bros | All Rights Reserved
            </p>
          </div>
          
          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Server status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Chat support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Follow us Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Follow us</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-3">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-3">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-3">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-3">
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;