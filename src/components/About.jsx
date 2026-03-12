import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
           <img
  src='/logo.jpg'
  alt="Workspace"
  className="rounded-lg shadow-xl w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover mx-auto"
/>
          </div>

     <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Who is Mubarek?
            </h3>
            <h4 className="text-xl text-blue-600 dark:text-blue-400 font-bold">
              Software Developer
            </h4>
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
    </section>
  );
};

export default About;