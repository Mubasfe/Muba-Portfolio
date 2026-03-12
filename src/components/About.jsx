import React from 'react';
import { User, Code, Briefcase, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          </div>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src='/logo.jpg'
              alt="Workspace"
              className="rounded-lg shadow-xl w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover mx-auto"
            />
            {/* Decorative icon on image */}
            <div className="absolute -bottom-4 -right-4 bg-blue-600 p-3 rounded-full shadow-lg">
              <Code className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who is Mubarek?
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h4 className="text-xl text-blue-600 dark:text-blue-400 font-bold">
                Software Developer
              </h4>
            </div>
            
            <div className="flex gap-3 mt-2">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate and self-motivated Software Developer 
                with a strong foundation in both front-end and back-end technologies.
                I enjoy translating complex problems into simple, elegant solutions 
                and collaborating with teams to bring impactful ideas to life. 
                Whether it's crafting responsive UIs or designing powerful APIs, 
                I am dedicated to creating high-quality software that makes a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;