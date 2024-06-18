import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav style={navStyle}>
            <Link href="#ourmission" style={linkStyle}>Our Mission</Link>
            <Link href="#gallery" style={linkStyle}>Gallery</Link>
            <Link href="#about" style={linkStyle}>About</Link>
            <Link href="#achievements" style={linkStyle}>Achievements</Link>
            <Link href="#contactus" style={linkStyle}>Contact Us</Link>
        </nav>
    );
};

const navStyle = {
    background: '#64B6AC',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
};

const linkStyle = {
    color: 'black',
    fontSize: '18px',
    fontFamily: 'New Rocker, cursive',
    textTransform: 'capitalize',
    textDecoration: 'none',
    margin: '0 32px',
};

export default Nav;
