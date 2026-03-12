// components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Portfolio Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Mubarek's Portfolio</h3>
            <p className="text-gray-400 text-sm mb-4">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
            <div className="space-y-1">
              
              <a 
                href="https://example.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
              >
                github.com/Mubasfe
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Education', 'Work', 'Experience'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-cyan-400" />
                <span className="text-sm">+251 9 26 81 75 50</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-cyan-400" />
                <span className="text-sm">mubasoftware430@gmail.com</span>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-cyan-400" />
                <span className="text-sm">Adiss Abeba, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Mubarek's Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;