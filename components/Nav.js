import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'ourmission', label: 'Our Mission' },
        { to: 'gallery', label: 'Gallery' },
        { to: 'about', label: 'About' },
        { to: 'links', label: 'Admissions', className: 'text-red-500' },
        { to: 'contactus', label: 'Contact Us' },
    ];

    return (
        <nav className="bg-[#64B6AC] p-5 flex justify-between items-center md:justify-center">
            {/* Mobile Menu Button */}
            <div className="text-2xl md:hidden cursor-pointer" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                    <ScrollLink
                        key={link.to}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        className={`nav-link ${link.className || ''}`}
                    >
                        {link.label}
                    </ScrollLink>
                ))}
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed inset-0 bg-[#64B6AC] transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out md:hidden overflow-hidden`}
            >
                <div className="flex justify-between items-center p-5 absolute top-0 left-0 right-0">
                    <h2 className="font-serif font-bold text-2xl text-white">Menu</h2>
                    <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                </div>

                <div className="flex flex-col items-start space-y-4 p-5 mt-12">
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className={`nav-link text-white ${link.className || ''}`}
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </ScrollLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
