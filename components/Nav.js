import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="bg-[#64B6AC] p-5 flex justify-between items-center md:justify-center">
                <div className="text-2xl md:hidden cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <div className="hidden md:flex space-x-8">
                    <ScrollLink to="home" smooth={true} duration={500} className="nav-link">Home</ScrollLink>
                    <ScrollLink to="ourmission" smooth={true} duration={500} className="nav-link">Our Mission</ScrollLink>
                    <ScrollLink to="gallery" smooth={true} duration={500} className="nav-link">Gallery</ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500} className="nav-link">About</ScrollLink>
                    <ScrollLink to="links" smooth={true} duration={500} className="nav-link">Important Links</ScrollLink>
                    <ScrollLink to="contactus" smooth={true} duration={500} className="nav-link">Contact Us</ScrollLink>
                </div>
            </nav>
            <div className={`fixed inset-0 bg-[#64B6AC] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden overflow-hidden`}>
                <div className="flex justify-between items-center p-5 absolute top-0 left-0 right-0">
                    <h2 className="font-serif font-bold text-2xl text-white">Menu</h2>
                    <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-2 p-5 mt-12">
                    <ScrollLink to="home" smooth={true} duration={500} className="nav-link text-white" onClick={toggleMenu}>Home</ScrollLink>
                    <ScrollLink to="ourmission" smooth={true} duration={500} className="nav-link text-white" onClick={toggleMenu}>Our Mission</ScrollLink>
                    <ScrollLink to="gallery" smooth={true} duration={500} className="nav-link text-white" onClick={toggleMenu}>Gallery</ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500} className="nav-link text-white" onClick={toggleMenu}>About</ScrollLink>
                    <ScrollLink to="links" smooth={true} duration={500} className="nav-link text-white" onClick={toggleMenu}>Important Links</ScrollLink>
                    <ScrollLink to="contactus" smooth={true} duration={500} className="nav-link text-white" onClick={toggleMenu}>Contact Us</ScrollLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;
