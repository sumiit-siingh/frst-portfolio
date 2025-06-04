import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { ImEmbed } from "react-icons/im";
import { FaUserGraduate } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import Spotlight from "../component/ui/Spotlight";
import PinContainer from "../component/ui/3d-pin";
import { CardContainer, CardBody, CardItem } from "../component/ui/3d-card";
export default function About() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased flex flex-col items-center justify-start">

            {/* Background Grid */}
            <div className="pointer-events-none absolute inset-0 select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* Background Spotlight */}
            <Spotlight className="top-0 left-0 md:-top-10 md:left-40" fill="white" />
            <div className="relative flex flex-col justify-center items-center pt-30 px-4 w-full gap-y-10">
                <a className=" flex justify-center text-sm sm:text-md font-semibold text-white/70 bg-white/10 rounded-xl px-4 py-1">About me</a>
                <a className="text-3xl sm:text-5xl font-bold text-white text-center">Know who I am</a>
                <p className="text-white/50 text-center max-w-xl text-sm sm:text-base">
                    I'm a Computer Science student passionate about creating innovative solutions through programming & technology.
                </p>

                <div className=" flex flex-col md:flex-row justify-between items-center gap-10  w-full max-w-6xl px-4 mt-[-120px]">
                    {/* <div className=" bg-white/10 flex p-4 rounded-lg w-full md:w-1/2 justify-center">
                        <div className="bg-white/20 h-72 w-full rounded-lg max-w-md"></div>
                    </div> */}

                    <div className="h-[40rem] w-full flex items-center justify-center">
                        <PinContainer title="poke-me" href="https://drive.google.com/file/d/1-3VLA0rkOjRcycc-dz4jUmNdoMvnL7WC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
                                    Resume Inside
                                </h3>
                                <div className="text-base  font-normal">
                                    <span className="text-slate-500">
                                        For my updated resume come here
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                            </div>
                        </PinContainer>
                    </div>

                    <div className="w-full ">
                        <p className="text-white font-semibold text-2xl sm:text-3xl mb-4">Hi,</p>
                        <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                            I'm <span className="font-semibold text-purple-400">Sumit S</span>, a final-year B.Tech Computer Science & Engineering student obsessed with building cool web experiences. <br />
                            I love working across the stack and have hands-on experience with JavaScript, React, Tailwind CSS, Vite, HTML, and MySQL. <br />
                            Currently seeking a full-time opportunity as a Web or Full Stack Developer to apply my skills and grow with a dynamic team.
                        </p>
                    </div>
                </div>

                <div className="w-full  flex flex-wrap flex-col items-center justify-center md:mt-[-100px]  ">
                    <div className="text-white text-2xl font-bold text-outline">Hands on Skills</div>
                    <div className="text-white/40 text-outline mt-10 ">These are the technologies and programming languages I've worked with and continue to develop expertise in.</div>
                </div>
                <div className="grid grid-cols-2 md:mt-15 mt-20 md:grid-cols-5 gap-6 justify-between items-center">
                    {[
                        { skill: "HTML", level: "Advanced" },
                        { skill: "CSS", level: "Advanced" },
                        { skill: "JavaScript", level: "Advanced" },
                        { skill: "React.js", level: "Advanced" },
                        { skill: "Tailwind css", level: "Advanced" },
                        { skill: "Vite", level: "Advanced" },
                        { skill: "Java", level: "Advanced" },
                        { skill: "OOPS", level: "Advanced" },
                        // { skill: "DBMS", level: "Adcanced" },
                        { skill: "MySQL", level: "Advanced" },
                        { skill: "SpringBoot", level: "Intermediate" },
                    ].map((item, index) => (
                        <CardContainer key={index} className="inter-var  mt-[-180px]" style={{ perspective: 1500 }}>
                            <CardBody className=" backdrop-blur-sm relative group/card hover:scale-115 transition-transform duration-500 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] bg-white/10 dark:border-white/[0.2] border-purple-300 w-40 h-25 md:w-48 md:h-28 rounded-xl  border flex items-center justify-center ">

                                {/* Inner div for floating content */}
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <CardItem
                                        translateZ={150}
                                        className="text-lg md:text-xl font-bold text-neutral-100 dark:text-white text-center"
                                    >
                                        {item.skill}
                                    </CardItem>

                                    <CardItem
                                        translateZ={200}
                                        as="p"
                                        className="text-purple-400 text-sm md:text-md bg-black/50 rounded-full px-3 py-1 text-center"
                                    >
                                        {item.level}
                                    </CardItem>
                                </div>

                            </CardBody>
                        </CardContainer>
                    ))}
                </div>



                <div><a className="text-white text-xl font-bold text-outline">More About me</a></div>
                <div className="grid grid-cols-1 md:grid-cols-2 pb-15 gap-5 md:w-full mx-auto">
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
                            className="flex flex-col gap-6 p-6 bg-[#282b30] rounded-xl shadow-lg text-gray-200 hover:scale-105 transition-transform cursor-pointer hover:shadow-md hover:shadow-purple-400"
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
