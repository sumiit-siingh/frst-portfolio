import React, { useRef } from "react";
import Spotlight from "../component/ui/Spotlight";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FaXTwitter, FaInstagram, FaTelegram } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { PiCallBellBold } from "react-icons/pi";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_vk2smqs', 'template_kit97kb', form.current, 'igcQB2_r4aUcarDfx')
            .then(() => {
                alert('Message sent successfully!');
                form.current.reset();
            })
            .catch((error) => {
                alert('Failed to send message.');
                console.error(error);
            });
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased flex flex-col items-center justify-start">
            {/* Grid Background */}
            <div className="pointer-events-none absolute inset-0 select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px]" />
            {/* Spotlight */}
            <Spotlight className="top-0 left-0 md:-top-10 md:left-40" fill="white" />

            {/* Heading */}
            <div className="relative mt-40 flex flex-col items-center text-center px-4">
                <div className="text-white bg-white/20 px-4 py-1 rounded-full">Get in touch</div>
                <h1 className="text-white text-3xl font-bold mt-5">Contact Me</h1>
                <p className="text-white/40 mt-5 max-w-2xl">
                    Feel free to reach out to me for collaboration, questions, or just to say hello.
                    I'm open to discussing new projects, creative ideas, or opportunities.
                </p>
            </div>

            {/* Contact Section */}
            <div className="relative flex flex-col md:flex-row justify-around w-full px-4 mt-10 gap-8">
                {/* Contact Info */}
                <div className="bg-[#282b30] md:w-[45%] w-full p-6 rounded-lg shadow-md">
                    <h2 className="text-white text-2xl font-semibold">Contact Information</h2>
                    <p className="text-white/40 mt-2">
                        I'd love to hear from you. Whether you have a question, proposal, or just want to say hi.
                    </p>

                    {/* Email */}
                    <div className="flex items-start bg-white/10 mt-4 p-3 rounded-md">
                        <MdOutlineMail className="text-4xl bg-white/20 rounded-full p-2 text-[#f43b57]" />
                        <div className="ml-4">
                            <div className="text-white text-lg font-semibold">Email</div>
                            <div className="text-white/40 break-all max-w-full overflow-hidden text-sm">
                                sumitsinghsakarari@gmail.com
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start bg-white/10 mt-4 p-3 rounded-md">
                        <IoCallOutline className="text-4xl bg-white/20 rounded-full p-2 text-green-400" />
                        <div className="ml-4">
                            <div className="text-white text-lg font-semibold">Phone</div>
                            <div className="text-white/40 text-sm">+91 8887605464</div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start bg-white/10 mt-4 p-3 rounded-md">
                        <IoLocationOutline className="text-4xl bg-white/20 rounded-full p-2 text-[#2f78ef]" />
                        <div className="ml-4">
                            <div className="text-white text-lg font-semibold">Location</div>
                            <div className="text-white/40 text-sm">Lucknow, Uttar Pradesh, India</div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-center text-white text-xl font-semibold mt-6 mb-2">Connect with me on:</h3>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://x.com/sumitsinghh_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-3 rounded-full"
                            >
                                <FaXTwitter className="text-black text-xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/sumit.siingh_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-3 rounded-full"
                            >
                                <FaInstagram className="text-pink-500 text-xl" />
                            </a>
                            <a
                                href="https://t.me/mukhiya_jiiii"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-3 rounded-full"
                            >
                                <FaTelegram className="text-blue-500 text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-[45%] bg-[#282b30] p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-[#282b30] bg-white p-2 rounded shadow">Contact Me</h2>
                        <PiCallBellBold className="text-black bg-white text-3xl p-2 rounded shadow" />
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="p-2 border border-[#282b30] rounded bg-white placeholder-[#282b30] focus:outline-none"
                        />
                        <input
                            type="tel"
                            name="user_phone"
                            placeholder="Mobile Number"
                            required
                            className="p-2 border border-[#282b30] rounded bg-white placeholder-[#282b30] focus:outline-none"
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="p-2 border border-[#282b30] rounded bg-white placeholder-[#282b30] focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#ff2727] text-white py-2 rounded hover:bg-[#838c9b] shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
