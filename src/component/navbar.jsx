import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { IoHomeOutline } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FaNetworkWired } from "react-icons/fa";
import { RiContactsBook2Line } from "react-icons/ri";




const Navbar = () => {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleWidget = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`h-10  w-full flex  justify-center font-[Poppins] space-x-20 z-100 fixed top-0 left-0 select-none transition-all duration-3 mt-8 rounded-full ${scrolled ? "" : "bg-transparent"}`}>

            {/* Logo */}

            <div className='flex  bg-black p-10 rounded-full  items-center justify-center space-x-20 '>
                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="font-extrabold text-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex justify-around items-center">


                    <div className="relative w-30 h-12 border-5 border-white/20 rounded-full -rotate-35 ">
                        <div className="absolute inset-0 flex items-center justify-center rotate-35">
                            <h1 className="text-white font-beau-rivage-regular text-7xl  text-outline">Sumit</h1>
                        </div>
                    </div>

                </div>

                {/* Hamburger icon for mobile */}
                <div className='max-w-[40px]  translate-x-18'>
                    <div
                        className={`md:hidden w-fit  text-3xl text-white  cursor-pointer transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? '✖' : '☰'}
                    </div>
                </div>



                {/* Desktop Menu */}
                <div className="hidden md:flex items-center text-xl max-w-[100%]  gap-20 justify-around">

                    {[<IoHomeOutline />, <FontAwesomeIcon icon={faUser} />, <FaNetworkWired />, <RiContactsBook2Line />].map((item, i) => {
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
                        className="fixed  top-30 right-0 z-[9999] w-1/8 max-w-xs backdrop-blur-xl bg-white text-white py-4 rounded-l-3xl flex flex-col items-center space-y-4 md:hidden "
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
                            <button className="w-10 text-xl cursor-pointer text-blue-800 py-2 flex items-center justify-center rounded-full font-medium" onClick={() => {
                                window.open("https://www.linkedin.com/in/sumitkrsinghh/");
                                setIsMobileMenuOpen(false);
                            }}>
                                <FaLinkedin />
                            </button>
                            <button className="w-10 text-xl cursor-pointer text-black py-2 flex items-center justify-center rounded-full font-medium" onClick={() => {
                                window.open("https://github.com/sumiit-siingh");
                                setIsMobileMenuOpen(false);
                            }}>
                                <FaGithub />
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div >
    );
};

export default Navbar;
