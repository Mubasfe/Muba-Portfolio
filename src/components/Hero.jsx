import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">John Doe</span>
            </h2>
            <h3 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
              I build exceptional and accessible digital experiences for the web. 
              Passionate about creating intuitive and responsive user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-lg transition-colors duration-300">
                Contact Me
              </button>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Updated Image Section */}
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img 
                  src='/logo.jpg' 
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Profile';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;