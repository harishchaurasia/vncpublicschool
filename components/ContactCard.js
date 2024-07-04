import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactCard = ({ officeName, phone, whatsapp }) => {
    return (
        <div style={cardStyle}>
            <h3 style={officeNameStyle}>{officeName}</h3>
            <div style={contactItemStyle}>
                <a href={`https://wa.me/${whatsapp}`} style={whatsappButtonStyle}>
                    <FaWhatsapp style={{ marginRight: '5px', color: '#fff' }} />
                    WhatsApp Us
                </a>
            </div>
            <div style={contactItemStyle}>
                <a href={`tel:${phone}`} style={callButtonStyle}>
                    <FaPhoneAlt style={{ marginRight: '3px' }} />
                    {phone}
                </a>
            </div>

        </div>
    );
};

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '0px 35px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textAlign: 'center', // Center the card contents
};

const officeNameStyle = {
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '8px', 
    marginBottom: '35px',
    textAlign: 'center',
};

const contactItemStyle = {
    display: 'flex',
    justifyContent: 'center', // Center items horizontally within the container
    marginBottom: '20px',
};

const callButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  // Center the button horizontally
    backgroundColor: '#353935',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
};

const whatsappButtonStyle = {
    fontSize:'20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  // Center the button horizontally
    // backgroundColor: '#25D366',
    backgroundColor: '#64B6AC',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
};

export default ContactCard;
