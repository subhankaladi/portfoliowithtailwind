"use client";

import React, { useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import Image from 'next/image';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Expert in HTML",
        "Expert in CSS",
        "Expert in TypeScript",
        "Expert in JavaScript",
        "Expert in React.Js",
        "Expert in Next.Js",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-main-page">
      <div className="flex justify-between items-center p-12 text-white text-lg flex-wrap">
        <div className="text-2xl font-bold font-sans">Portfolio.</div>
        <div className="flex space-x-4">
          <ul className="flex space-x-4 flex-wrap">
            <li className="border-2 border-teal-300 p-2 shadow-lg rounded-md hover:shadow-cyan-400">
              <Link href="/" className="text-white no-underline">Home</Link>
            </li>
            <li className="border-2 border-teal-300 p-2 shadow-lg rounded-md hover:shadow-cyan-400">
              <Link href="/about" className="text-white no-underline">About</Link>
            </li>
            <li className="border-2 border-teal-300 p-2 shadow-lg rounded-md hover:shadow-cyan-400">
              <Link href="/service" className="text-white no-underline">Service</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-28 mt-16 font-sans">
        <div className="text-white flex flex-col gap-2 p-12 max-w-lg">
          <div className="text-2xl">Hello It&apos;s Me</div>
          <div className="text-3xl font-bold">Subhan Kaladi</div>
          <div className="text-2xl">And I&apos;m <span className="text-cyan-400 auto-type"></span></div>
          <div className="mt-4 leading-relaxed">
            I am currently pursuing Software Engineering with a focus on AI. I am passionate about learning Generative AI and developing solutions using Docker, Ubuntu, and Python.
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/subhanallahkaladi" target="_blank" rel="noopener noreferrer">
              <Image src="/fb.webp" alt="fb-logo" width={40} height={40}/> 
            </a>
            <a href="https://www.instagram.com/subhan_kaladi/" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="insta-logo" width={40} height={40} />
            </a>
          </div>
        </div>
        
        <div className="hover:scale-105 transition-transform duration-300">
          <Image src="/SUBHAN.png" alt="subhan's photo" width={400} height={400} className="w-full h-full"/>
        </div>
      </div>

      <Link href="#" className="relative inline-block px-6 py-3 font-bold text-white transition-colors duration-400 bg-teal-400 no-underline overflow-hidden hover:text-white ml-10">
  Download CV
</Link>

    </div>
  );
};

export default Home;
