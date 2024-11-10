"use client";

import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-800 my-20 py-12 px-2 h-screen relative left-0 right-0">
      <div className="w-screen mb-16"></div>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-72 items-center">
        <div className="rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-400/50 overflow-hidden mb-8 md:mb-0 hover:scale-105 transition-transform duration-300">
          <Image
            src="/subhan-ab.png"
            alt="subhan's photo"
            width={300} height={300}
            className="w-72 h-72 object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-white text-5xl font-bold mb-4 md:ml-24">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
          <p className="text-white text-lg font-bold leading-tight max-w-lg">
            I have hands-on experience with web development tools such as HTML, CSS, JavaScript, TypeScript, and React.js. My goal is to build innovative projects and solve real-world problems through software development.
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default About;
