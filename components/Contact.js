import React from 'react';
import { AlignCenter } from 'react-feather';
import ContactCard from './ContactCard';
// import { Phone, Smartphone } from '@material-ui/icons';
import { Phone, Smartphone } from 'react-feather';

const ContactUs = () => {
    return (
        <div style={containerStyle}>
            <h1 style={MissionHeading}>
                Connect With Us
            </h1>
            <div style={contactInfoStyle}>
                <h2>Contact Information</h2>
                <p>VNC Public School</p>
                <p>Gajpur Bazaar Road, Kauriram</p>
                <p>Gorakhpur, Uttar Pradesh, 273413. </p>
                <p>Phone: +917054858403</p>
                <p>Email: vncpublicgajpur@gmail.com</p>
            </div>
            <div style={contactDivStyle}>
            <ContactCard 
                officeName="Principal's Office" 
                phone="+917054858403" 
                whatsapp="917054858403" 
            />
            <ContactCard 
                officeName="Fee Office" 
                phone="+91234567891" 
                whatsapp="0987654321" 
            />
            </div>
        </div>
    )
};

export default ContactUs;

const contactDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    margin: '0 20px',
};

const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
};

const MissionHeading = {
    textAlign: 'center',
    fontSize: '45px',
    fontFamily: 'New Rocker, cursive',
    marginBottom: '40px',
};

const contactInfoStyle = {
    textAlign: 'center',
    marginBottom: '40px',
};