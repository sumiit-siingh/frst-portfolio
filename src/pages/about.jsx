import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { ImEmbed } from "react-icons/im";
import { FaUserGraduate } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import Spotlight from "../component/ui/Spotlight";

export default function About() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased flex flex-col items-center justify-start">

            {/* Background Grid */}
            <div className="pointer-events-none absolute inset-0 select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* Background Spotlight */}
            <Spotlight className="top-0 left-0 md:-top-10 md:left-40" fill="white" />
            <div className="relative flex flex-col justify-center items-center pt-30 px-4 w-full gap-y-10">
                <a className=" flex justify-center text-sm sm:text-md font-semibold text-white/70 bg-white/10 rounded-xl px-4 py-1">About me</a>
                <a className="text-3xl sm:text-5xl font-semibold text-white text-center">Know who I am</a>
                <p className="text-white/50 text-center max-w-xl text-sm sm:text-base">
                    I'm a Computer Science student passionate about creating innovative solutions through programming & technology.
                </p>

                <div className=" flex flex-col md:flex-row justify-between items-center gap-10 mt-10 w-full max-w-6xl px-4">
                    <div className=" bg-white/10 flex p-4 rounded-lg w-full md:w-1/2 justify-center">
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
                <div><a className="text-white text-xl  font-bold text-outline">More About me</a></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:w-full mx-auto">
                    {[
                        {
                            icon: <IoPersonOutline />,
                            label: "Personal Interests",
                            points: [
                                "Exploring new technologies",
                                "Solving algorithmic challenges",
                                "Open-source contributions",
                                "Web development projects",
                            ],
                        },
                        {
                            icon: <ImEmbed />,
                            label: "Coding Philosophy",
                            points: [
                                "Clean and maintainable code",
                                "Focus on user experience",
                                "Continuous learning and improvement",
                                "Building with scalability in mind",
                            ],
                        },
                        {
                            icon: <FaUserGraduate />,
                            label: "Education Journey",
                            points: [
                                "Computer Science fundamentals",
                                "Data structures and algorithms",
                                "Machine learning and AI",
                                "Self-taught web development",
                            ],
                        },
                        {
                            icon: <GoGoal />,
                            label: "Future Goals",
                            points: [
                                "Mastering advanced AI techniques",
                                "Building impactful web applications",
                                "Contributing to open-source projects",
                                "Exploring blockchain development",
                            ],
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-6 p-6 bg-[#1f2937] rounded-xl shadow-lg text-gray-200 hover:scale-105 transition-transform cursor-pointer hover:shadow-md hover:shadow-purple-400"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-[#374151] p-3 rounded-lg text-2xl text-purple-400">
                                    {item.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-outline">{item.label}</h2>
                            </div>
                            <ul className="space-y-3 pl-2">
                                {item.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-400 text-base">
                                        <span className="text-purple-400">o</span> {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
