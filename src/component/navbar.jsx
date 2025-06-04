import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Navbar = () => {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`h-20 w-full flex items-center justify-around font-[Poppins] px-4 z-[1000] fixed top-0 left-0 select-none transition-all duration-300 mt-2 rounded-full ${scrolled ? "shadow-md backdrop-blur" : "bg-transparent"}`}>
            
            {/* Logo */}
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="font-extrabold text-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex justify-around items-center"
            >
                {isHover ? (
                    <span className='font-limelight-regular text-white'>
                        Hell<span className="text-red-600">o </span>W
                        <span className="text-red-600">o</span>
                        <span>rld</span>
                    </span>
                ) : (
                    <div className="relative w-30 h-12 border-5 border-white/20 rounded-full -rotate-35 ">
                        <div className="absolute inset-0 flex items-center justify-center rotate-35">
                            <h1 className="text-white font-beau-rivage-regular text-7xl text-outline">Sumit</h1>
                        </div>
                    </div>
                )}
            </div>

            {/* Hamburger icon for mobile */}
            <div className="sm:hidden text-3xl text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
               {isMobileMenuOpen ? '✖' : '☰'}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex max-w-[100%] text-[15px] gap-16 justify-around">
                {["Home", "About me", "Projects", "Contact"].map((item, i) => {
                    const routes = ["/home", "/about-me", "/projects", "/contact"];
                    return (
                        <div
                            key={i}
                            className="cursor-pointer text-white text-outline transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-b-2"
                            onClick={() => navigate(routes[i])}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>

            {/* Social Icons Desktop */}
            <div className="hidden md:flex gap-4">
                <button className="cursor-pointer py-2 rounded-full font-medium hover:scale-105" onClick={() => window.open('https://www.linkedin.com/in/sumitkrsinghh/')}>
                    <FaLinkedin className='text-white text-xl rounded bg-black p-0' />
                </button>
                <button className="cursor-pointer px-6 py-2 rounded-full font-medium hover:scale-105" onClick={() => window.open('https://github.com/sumiit-siingh')}>
                    <FaGithub className='text-xl text-white' />
                </button>
            </div>

            {/* Mobile Side Panel */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed top-20 right-0 z-[9999] w-1/6 max-w-xs bg-black text-white py-4 rounded-l-3xl flex flex-col items-center space-y-4 md:hidden"
                >
                    {["🏠", "🙋‍♂️", "🗂️", "📞"].map((item, i) => {
                        const routes = ["/home", "/about-me", "/projects", "/contact"];
                        return (
                            <div
                                key={i}
                                className="cursor-pointer text-lg"
                                onClick={() => {
                                    navigate(routes[i]);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {item}
                            </div>
                        );
                    })}

                    <div className="flex flex-col gap-3 w-full items-center justify-center">
                        <button className="w-10 cursor-pointer text-white py-2 flex items-center justify-center rounded-full font-medium" onClick={() => {
                            window.open("https://www.linkedin.com/in/sumitkrsinghh/");
                            setIsMobileMenuOpen(false);
                        }}>
                            <FaLinkedin />
                        </button>
                        <button className="w-10 cursor-pointer text-white py-2 flex items-center justify-center rounded-full font-medium" onClick={() => {
                            window.open("https://github.com/sumiit-siingh");
                            setIsMobileMenuOpen(false);
                        }}>
                            <FaGithub />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;
