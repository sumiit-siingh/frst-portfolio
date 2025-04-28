import React from "react"
import Spotlight from "../component/ui/Spotlight"
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "../component/ui/3d-card";

export default function () {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased flex flex-col items-center justify-start">

            {/* Background Grid */}
            <div className="pointer-events-none absolute inset-0 select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* Background Spotlight */}
            <Spotlight className="top-0 left-0 md:-top-10 md:left-40" fill="white" />
            <div className="flex flex-col mt-30 text-white relative w-full">
                {/* Wrapper div to center */}
                <div className="flex justify-center items-center">
                    <div className="bg-white/15 flex items-center justify-center rounded-full text-white/70 text-sm  pl-4 pr-4 p-1 text-outline max-w-fit">
                        Portfolio
                    </div>
                </div>

                <div className="mt-5 text-6xl text-white text-center font-bold text-outline font-poppins-regular">My Projects</div>
                <div className="text-white/30 text-center mt-5 text-xl text-outline">Explore a collection of my recent work across various technologies and domains.</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {[
                        {
                            image: "https://res.cloudinary.com/dq829orud/image/upload/v1745860856/dialogue-chat-clouds-speech-bubble-icon-from-lines-triangles-particle-style-design-low-poly-technology-devices-people-communication-concept-blue-background_587448-471_cfwt6m.jpg",
                            p_name: "Group Chatting App",
                            des: "Developed a real-time chatting application for real time chit chat. Integrated MySQL database using JDBC for user authentication and message storage. Implemented server-client architecture, efficient data handling, and responsive UI design.",
                            tools: "Java Swing, Socket Programming, JDBC, MySQL, NetBeans",
                            github_lnk: "https://github.com/sumiit-siingh/ChattingApplication",
                        },
                        {
                            image: "https://res.cloudinary.com/dq829orud/image/upload/v1745861039/Screenshot_2025-04-28_225336_ueqlrp.png",
                            p_name: "Marvel Inspired Entertainment Web",
                            des: "Build & deployed a Marvel-inspired entertainment web page. It involves designing responsive layouts, creating dynamic content sections, enhancing user experience, and optimizing performance.",
                            tools: "React, Tailwind CSS, HTML",
                            github_lnk: "https://marvel-psi-sable.vercel.app/",
                        },
                        {
                            image: "https://res.cloudinary.com/dq829orud/image/upload/v1745861149/Screenshot_2025-04-28_225534_ke94ap.png",
                            p_name: "Food, Chef, and Grocery Hub platform",
                            des: "Multi-service Platform where it connects you with professional chefs for home-cooked meals and delivers fresh groceries right to your door, offering convenience and quality in one platform.",
                            tools: "React, Tailwind CSS, Vite, HTML, Framer Motion",
                            github_lnk: "https://project-flavour.vercel.app/",
                        },
                        {
                            image: "https://res.cloudinary.com/dq829orud/image/upload/v1745861246/maxresdefault_efwyuo.jpg",
                            p_name: "Airline Management System",
                            des: "A comprehensive solution designed to streamline the operations of airlines daily routine.The system allows for easy handling of flight data, customer details, and booking transactions, ensuring smooth and efficient airline operations.",
                            tools: "Java, MySQL, JDBC, NetBeans, Swing",
                            github_lnk: "https://github.com/sumiit-siingh/AirlineManagementSystem",
                        },
                    ].map((item, index) => (
                        <div className="h-full ">
                            <CardContainer className="inter-var h-full cursor-pointer" key={index}>
                                <CardBody className="bg-[#282b30] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border h-full flex flex-col min-h-[550px]">

                                    {/* Image with 3D Hover Effect */}
                                    <CardItem translateZ={100} className="w-full mt-4">
                                        <motion.img
                                            src={item.image}
                                            alt="thumbnail"
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            whileHover={{
                                                scale: 1.1,
                                                rotateY: 1,
                                                transition: { type: "spring", stiffness: 300 },
                                            }}
                                        />
                                    </CardItem>

                                    {/* Title */}
                                    <CardItem className="text-xl font-bold text-red-400 text-outline mt-5">
                                        {item.p_name}
                                    </CardItem>

                                    {/* Description */}
                                    <CardItem as="p" className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                        {item.des}
                                    </CardItem>



                                    {/* Tools */}
                                    <CardItem className="mt-2 text-neutral-400 text-outline font-poppins-regular">
                                        <strong className="">Tools : </strong>{item.tools}
                                    </CardItem>

                                    {/* GitHub Link */}
                                    <div className="flex justify-center bg-white/10 items-center mt-4">
                                        <CardItem translateZ={20} as="a" href={item.github_lnk} target="_blank" className="px-4 py-2 rounded-xl text-sm  font-normal  ">
                                            View on GitHub →
                                        </CardItem>

                                        {/* <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                                    Sign up
                                </CardItem> */}
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}