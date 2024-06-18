import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <header style={headerStyle}>
            <div style={topRowStyle}>
                <div style={contactStyle}>
                    Phone: +91 7054858403 | Email: vncpublicgajpur@gmail.com
                </div>
                <div style={socialIconsStyle}>
                    <a href='mailto:vncpublicgajpur@gmail.com' style={{ textDecoration: 'none' }}>
                        <FaEnvelope style={iconStyle} />
                    </a>
                    <a href='https://www.facebook.com/vncpublicschool/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                        <FaFacebook style={iconStyle} />
                    </a>
                    <a href='https://www.instagram.com/vncpublicschool/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                        <FaInstagram style={iconStyle} />
                    </a>
                    <a href='https://www.linkedin.com/company/vnc-public-school/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                        <FaLinkedin style={iconStyle} />
                    </a>
                </div>
            </div>
            <hr style={lineStyle} />
            <div style={contentStyle}>
                {/* <img style={logoStyle} src="/logo.png" alt="School Logo" /> */}
                <a href="https://www.vncpublicschool.com" rel="noopener noreferrer">
                <img style={logoStyle} src="/logo.png" alt="School Logo" />
                </a>
                <div style={infoStyle}>
                    <h1 style={titleStyle}>VNC Public School</h1>
                    <p style={sloganStyle}>Empowering young minds for a brighter future</p>
                </div>
            </div>
        </header>
    );
};

const headerStyle = {
    background: 'white',
    padding: '20px 0px',
    position: 'relative',
};

const topRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 20px',
};

const contactStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
};

const socialIconsStyle = {
    display: 'flex',
    gap: '20px',
};

const iconStyle = {
    width: '33px',
    height: '33px',
    color: '#000000',
};

const lineStyle = {
    border: 'none',
    borderTop: '2px solid #64B6AC',
    margin: '20px 0',
};

const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const logoStyle = {
    width: '115px',
    height: '132px',
    borderRadius: '45px',
};

const infoStyle = {
    marginLeft: '20px',
};

const titleStyle = {
    margin: 0,
    fontSize: '75px',
    fontFamily: 'New Rocker, cursive',
    textTransform: 'capitalize',
    marginBottom: '8px',
};

const sloganStyle = {
    margin: '02px',
    fontSize: '23px',
    fontFamily: 'New Rocker, cursive',
    textTransform: 'capitalize',
    marginLeft: '70px',
};

export default Header;
