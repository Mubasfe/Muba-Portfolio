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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with 5+ years of experience in building 
              web applications. I love creating elegant solutions to complex problems and 
              I'm constantly learning new technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-400">5+ Years</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Projects</h4>
                <p className="text-gray-600 dark:text-gray-400">50+ Completed</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Clients</h4>
                <p className="text-gray-600 dark:text-gray-400">30+ Worldwide</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Countries</h4>
                <p className="text-gray-600 dark:text-gray-400">10+ Served</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">What I Do</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>✓ Full Stack Web Development</li>
                <li>✓ Responsive Web Design</li>
                <li>✓ API Development & Integration</li>
                <li>✓ Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;