import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <img src="\logo.png" alt="School Logo" style={logoStyle} />
            <p style={textStyle}>VNC Public School</p>
        </footer>
    );
};

const footerStyle = {
    background: 'white',
    textAlign: 'right',
    padding: '20px 0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
};

const logoStyle = {
    width: '27px',
    height: '31px',
    verticalAlign: 'middle',
    marginBottom:'4px',
};

const textStyle = {
    display: 'inline',
    fontSize: '20px',
    fontFamily: 'New Rocker, cursive',
    textTransform: 'capitalize',
    marginLeft: '10px',
    marginRight:'20px',
};

export default Footer;
