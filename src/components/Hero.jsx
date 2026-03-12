import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/cv.pdf'; // Make sure to place your CV file in the public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mubarek_CV.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle contact navigation
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image Section - First on mobile, right on desktop */}
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img 
                  src='/logo.jpg' 
                  alt="Mubarek - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Mubarek';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text Content - Second on mobile, left on desktop */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mubarek</span>
            </h2>
            <h3 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
              I build exceptional and accessible digital experiences for the web. 
              Passionate about creating intuitive and responsive user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={handleContactClick}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-lg transition-colors duration-300"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:amlakieab4@gmail.com"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;