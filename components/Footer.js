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
                    <p style={contactTextStyle}>Address: Gajpur Bazaar Rd, Gajpur, Gorakhpur,</p>
                    <p style={contactTextStyle}>Uttar Pradesh, 273413, India.</p>
                    <p style={contactTextStyle}>Email: vncpublicgajpur@gmail.com</p>
                    <p style={contactTextStyle}>Phone: +91 7054858403</p>
                    <a href="https://wa.me/917054858403" style={iconStyle}><FaWhatsapp /></a>
                    <a href="https://www.instagram.com/vncpublicschool/" style={iconStyle}><FaInstagram /></a>
                    <a href="https://www.facebook.com/vncpublicschool/" style={iconStyle}><FaFacebook /></a>
                    <a href="https://www.linkedin.com/company/vnc-public-school/" style={iconStyle}><FaLinkedin /></a>
                </div>
                <div style={socialMediaSectionStyle}>

                </div>
            </div>
            <div style={copyrightStyle}>
                <p>Copyright © 2024 VNC Public School. All Rights Reserved. </p>
            </div>
        </footer>
    );
};

const footerStyle = {
    background: '#64B6AC',
    textAlign: 'center',
    padding: '05px 10px',
    width: '100%',
    position: 'absolute',
    bottom: '0px',
};

const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1800px',
    margin: '0px 15px',
};

const logoSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '150px',
    marginTop:'40px'
};

const logoStyle = {
    width: '140px',
    height: '160px',
    marginRight: '10px',
};

const schoolNameStyle = {
    fontSize: '55px',
    fontFamily: 'New Rocker, cursive',
    textTransform: 'capitalize',
};

const contactSectionStyle = {
    textAlign: 'left',
    marginBottom: '0px',
    marginLeft: '550px',
};

const contactTextStyle = {
    margin: '8px 5px',
    fontSize: '18px',
};

const socialMediaSectionStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'right',
    marginLeft: '370px',
};

const iconStyle = {
    margin: '0 10px',
    color: '#000',
    fontSize: '28px',
    textDecoration: 'none',
};

const copyrightStyle = {
    marginBottom: '0px',
    fontSize: '16px',
};

export default Footer;
