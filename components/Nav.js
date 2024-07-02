import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
    return (
        <nav style={navStyle}>
            <ScrollLink to="carousel" smooth={true} duration={500} style={linkStyle}>Home</ScrollLink>
            <ScrollLink to="ourmission" smooth={true} duration={500} style={linkStyle}>Our Mission</ScrollLink>
            <ScrollLink to="gallery" smooth={true} duration={500} style={linkStyle}>Gallery</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} style={linkStyle}>About</ScrollLink>
            <ScrollLink to="links" smooth={true} duration={500} style={linkStyle}>Important Links</ScrollLink>
            <ScrollLink to="contactus" smooth={true} duration={500} style={linkStyle}>Contact Us</ScrollLink>
        </nav>
    );
};

const navStyle = {
    background: '#64B6AC',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
    //position:'fixed'
};

const linkStyle = {
    color: 'black',
    fontSize: '18px',
    fontFamily: 'New Rocker, cursive',
    textTransform: 'capitalize',
    textDecoration: 'none',
    margin: '0 32px',
cursor: 'pointer'
};

export default Nav;