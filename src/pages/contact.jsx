import React from "react";
import Spotlight from "../component/ui/Spotlight";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { Navigate, useNavigate } from 'react-router-dom'

export default function Contact() {
    return (
        <div>
            <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased flex flex-col items-center justify-start">

                {/* Background Grid */}
                <div className="pointer-events-none absolute inset-0 select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px]" />

                {/* Background Spotlight */}
                <Spotlight className="top-0 left-0 md:-top-10 md:left-40" fill="white" />
                <div className="relative mt-30 flex flex-col items-center justify-center">
                    <div className="text-white bg-white/20 pl-4 pr-4 p-1 rounded-full ">Get in touch</div>
                    <div className="text-white text-3xl font-bold mt-5">Contact Me</div>
                    <div className="text-white/40  text-center mt-5">Feel free to reach out to me for collaboration, questions, or just to say hello. I'm open to discussing new projects, creative ideas, or opportunities.</div>
                </div>
                <div className=" relative bg-[#282b30] mt-10 p-5">
                    <div className="text-white text-2xl font-semibold font-poppins-regular text-outline">Contact Information</div>
                    <div className="text-white/40">I'd love to hear from you. Whether you have a question, proposal, or just want to say hi.</div>
                    <div className="flex bg-white/10 mt-3 p-3">
                        <div className="flex items-center justify-center">
                          <a href="mailto:sumitsinghsakarari@gmail.com">
                            <MdOutlineMail className="text-5xl bg-white/20 rounded-full p-2 w-fit text-[#f43b57] " />
                             </a>
                        </div>
                       
                        <div className="flex flex-col ml-4">
                            <div className="text-white font-poppins-regular text-xl font-semibold  text-outline">Email</div>
                            <div className="text-white/40 font-poppins-regular ">sumitsinghsakarari@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex bg-white/10 mt-3 p-3">
                        <div className="flex items-center justify-center">
                            <a href="tel:+918887605464">
                                <IoCallOutline className="text-5xl bg-white/20 rounded-full p-2 w-fit text-green-400" />
                            </a>
                        </div>
                        <div className="flex flex-col ml-4">
                            <div className="text-white font-poppins-regular text-xl font-semibold text-outline">Phone</div>
                            <div className="text-white/40 font-poppins-regular">+91 8887605464</div>
                        </div>
                    </div>

                    <div className="flex bg-white/10 mt-3 p-3">
                        <div className="flex items-center justify-center">

                            <IoLocationOutline className="text-5xl bg-white/20 rounded-full p-2 w-fit text-[#2f78ef] " />
                        </div>
                        <div className="flex flex-col ml-4">
                            <div className="text-white font-poppins-regular text-xl font-semibold text-outline ">Location</div>
                            <div className="text-white/40 font-poppins-regular ">Lucknow, Uttar-pradesh, India</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center font-sem ibold text-outline m-5 text-white font-titan-one-regular text-xl">Connect with me on:</div>

                        <div className="flex justify-center space-x-5 mt-2">
                            {/* Twitter */}
                            <div className="cursor-pointer bg-white rounded-full p-3 flex items-center justify-center">
                                <button className="cursor-pointer" onClick={() => window.open('https://x.com/sumitsinghh_', '_blank')}>
                                    <FaXTwitter className="text-black text-2xl" />
                                </button>
                            </div>

                            {/* Instagram */}
                            <div className="cursor-pointer bg-white rounded-full p-3 flex items-center justify-center">
                                <button className="cursor-pointer" onClick={() => window.open('https://www.instagram.com/sumit.siingh_', '_blank')}>
                                    <FaInstagram className="text-pink-500 text-2xl" />
                                </button>
                            </div>

                            {/* Telegram */}
                            <div className="cursor-pointer bg-white rounded-full p-3 flex items-center justify-center">
                                <button className="cursor-pointer" onClick={() => window.open('https://t.me/mukhiya_jiiii', '_blank')}>
                                    <FaTelegram className="text-blue-500 text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}