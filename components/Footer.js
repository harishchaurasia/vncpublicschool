import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <div style={logoSectionStyle}>
                    <img src="/logo.png" alt="School Logo" style={logoStyle} />
                    <p style={schoolNameStyle}>VNC Public School</p>
                </div>
                <div style={contactSectionStyle}>
                    <p style={contactTextStyle}>Address: 123 Main Street, City, Country</p>
                    <p style={contactTextStyle}>Email: info@vncpublicschool.com</p>
                    <p style={contactTextStyle}>Phone: (123) 456-7890</p>
                </div>
                <div style={socialMediaSectionStyle}>
                    <a href="https://www.facebook.com" style={iconStyle}><FaFacebook /></a>
                    <a href="https://www.instagram.com" style={iconStyle}><FaInstagram /></a>
                    <a href="https://www.whatsapp.com" style={iconStyle}><FaWhatsapp /></a>
                    <a href="https://www.linkedin.com" style={iconStyle}><FaLinkedin /></a>
                </div>
            </div>
            <div style={copyrightStyle}>
                <p>Copyright © 2024 VNC PUBLIC SCHOOL. All Rights Reserved</p>
            </div>
        </footer>
    );
};

const footerStyle = {
    background: '#64B6AC',
    textAlign: 'center',
    padding: '0px 10px',
    width: '100%',
    position: 'absolute',
    bottom: 0,
};

const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    // margin: '0 auto',
    margin:'10px 10px'
};

const logoSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
};

const logoStyle = {
    width: '180px',
    height: '200px',
    marginRight: '10px',
};

const schoolNameStyle = {
    fontSize: '20px',
    fontFamily: 'New Rocker, cursive',
    textTransform: 'capitalize',
};

const contactSectionStyle = {
    textAlign: 'left',
    marginBottom: '10px',
};

const contactTextStyle = {
    margin: '5px 0',
    fontSize: '14px',
};

const socialMediaSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
};

const iconStyle = {
    margin: '0 10px',
    color: '#fff',
    fontSize: '24px',
    textDecoration: 'none',
};

const copyrightStyle = {
    marginTop: '20px',
    fontSize: '14px',
};

export default Footer;
