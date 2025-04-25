import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col justify-center items-center pt-20 px-4 w-full gap-y-5">
        <a className="flex justify-center text-sm sm:text-md font-semibold text-white/70 bg-white/10 rounded-xl px-4 py-1">About me</a>
        <a className="text-3xl sm:text-5xl font-semibold text-white text-center">Know who I am</a>
        <p className="text-white/50 text-center max-w-xl text-sm sm:text-base">
          I'm a Computer Science student passionate about creating innovative solutions through programming & technology.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10 w-full max-w-6xl px-4">
          <div className="bg-white/10 flex p-4 rounded-lg w-full md:w-1/2 justify-center">
            <div className="bg-white/20 h-72 w-full rounded-lg max-w-md"></div>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-white font-semibold text-2xl sm:text-3xl mb-4">Hi,</p>
            <p className="text-white/40 text-base sm:text-lg leading-relaxed">
              I'm <span className="font-semibold text-purple-400">Sumit S</span>, a final-year B.Tech Computer Science & Engineering student obsessed with building cool web experiences. <br />
              I love working across the stack and have hands-on experience with JavaScript, React, Tailwind CSS, Vite, HTML, and MySQL. <br />
              Currently seeking a full-time opportunity as a Web or Full Stack Developer to apply my skills and grow with a dynamic team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
