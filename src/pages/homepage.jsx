import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import Spotlight from "../component/ui/Spotlight";

export default function Homepage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased flex flex-col items-center justify-start">
      
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Background Spotlight */}
      <Spotlight className="top-0 left-0 md:-top-10 md:left-40" fill="white" />

      {/* Top Section - Name and Photo */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 mt-20 px-6 md:px-20 w-full">
        
        {/* Left Text */}
        <div className="flex flex-col items-start space-y-4 text-center md:text-left">
          <motion.span className="text-white/70 text-2xl font-extrabold">
            Hello I'm,
          </motion.span>

          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
            className="text-white text-4xl md:text-6xl font-titan-one-regular"
          >
            Sumit Kr. Singh
          </motion.h1>

          <p className="text-white/50 text-sm md:text-lg leading-relaxed">
            Web weaver skilled in JavaScript, React, MySQL, and Tailwind CSS.
            <br />
            I enjoy building clean, responsive web pages.
            <br />
            Currently hunting full-time opportunities to grow as a Web or Full Stack Developer.
          </p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[200px] sm:w-[250px] md:w-[300px] aspect-[3/4] flex items-center justify-center"
        >
          {/* Bars behind */}
          <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 z-0">
            <div className="bg-white/50 h-3 w-full rounded-full"></div>
            <div className="bg-white/40 h-3 w-full rounded-full"></div>
            <div className="bg-white/30 h-3 w-full rounded-full"></div>
            <div className="bg-white/20 h-3 w-full rounded-full"></div>
            <div className="bg-white/10 h-3 w-full rounded-full"></div>
          </div>

          {/* Image */}
          <img
            src="https://res.cloudinary.com/dq829orud/image/upload/v1745453701/1_e0nrit.png"
            alt="Profile"
            className="relative z-10 w-full h-auto object-contain rounded-md"
          />
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <div className="relative z-10 w-full px-6 md:px-20 py-10 mt-10">
        <div className="text-white font-semibold text-2xl mb-5 text-center md:text-left">
          My Tech Stack
        </div>

        <div className="bg-white/10 border border-white/20 p-6 rounded-xl">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <IoLogoJavascript />, color: "text-yellow-400", name: "JavaScript" },
              { icon: <FaReact />, color: "text-blue-400", name: "React.js" },
              { icon: <RiTailwindCssFill />, color: "text-blue-400", name: "Tailwind CSS" },
              { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML5" },
              { icon: <SiCss3 />, color: "text-blue-600", name: "CSS" },
              { icon: <FaJava />, color: "text-red-500", name: "Java" },
            ].map((tech, index) => (
              <div
                key={index}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-2xl bg-white/20 border min-w-[150px] hover:shadow-lg hover:shadow-white/30 hover:scale-105 transition-transform cursor-pointer ${tech.color}`}
              >
                {tech.icon}
                <span className="text-white text-xl font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
