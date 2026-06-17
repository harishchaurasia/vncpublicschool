import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';

const scrollLinks = [
  { id: 'home', label: 'Home' },
  { id: 'ourmission', label: 'Our Mission' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About' },
  { id: 'contactus', label: 'Contact Us' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  const close = () => setIsOpen(false);

  const NavItem = ({ id, label, className = '', onClick }) => {
    const cls = `nav-link ${className}`;
    if (isHome) {
      return (
        <ScrollLink to={id} smooth duration={500} className={cls} onClick={onClick}>
          {label}
        </ScrollLink>
      );
    }
    return (
      <a href={`/#${id}`} className={cls} onClick={onClick}>
        {label}
      </a>
    );
  };

  return (
    <>
      <nav className="bg-[#64B6AC] px-4 md:px-6 py-3 flex justify-between items-center md:justify-center shadow-md">
        {/* School name on mobile (left) */}
        <span className="md:hidden font-cursive text-white text-lg leading-none select-none">
          VNC Public School
        </span>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {scrollLinks.map((link) => (
            <NavItem key={link.id} id={link.id} label={link.label} className="text-white hover:text-gray-100" />
          ))}
          <Link
            href="/admissions"
            className="font-inter font-bold text-sm text-white bg-[#F59E0B] hover:bg-[#D97706] px-5 py-2 rounded-full transition-colors duration-200 shadow-sm"
          >
            Admissions
          </Link>
        </div>

        {/* Hamburger (mobile, right side) */}
        <button
          className="md:hidden text-white text-2xl p-1 focus:outline-none"
          onClick={() => setIsOpen(v => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile drawer — slides in from right */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-[#64B6AC] shadow-2xl z-50 md:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/20">
          <span className="font-cursive text-white text-lg leading-none">VNC Public School</span>
          <button
            onClick={close}
            className="text-white text-xl p-1 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Drawer links */}
        <div className="flex flex-col items-center gap-1 px-5 pt-4 flex-1 overflow-y-auto">
          {scrollLinks.map((link) => (
            <NavItem
              key={link.id}
              id={link.id}
              label={link.label}
              className="text-white text-base font-inter py-3 border-b border-white/15 w-full text-center block"
              onClick={close}
            />
          ))}
          <Link
            href="/admissions"
            onClick={close}
            className="mt-4 w-full text-center font-inter font-bold text-sm text-white bg-[#F59E0B] hover:bg-[#D97706] py-3 px-4 rounded-full transition-colors duration-200 block"
          >
            Admissions
          </Link>
        </div>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-white/20 text-white/70 text-xs text-center font-inter">
          +91 70548 58403
        </div>
      </div>
    </>
  );
};

export default Nav;
