import React from 'react';
import { AlignCenter } from 'react-feather';

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
            {/* <form style={formStyle}>
                <h2>Send Us a Message</h2>
                <div style={formGroupStyle}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" style={textareaStyle}></textarea>
                </div>
                <button type="submit" style={buttonStyle}>Submit</button>
            </form> */}
        </div>
    )
};

export default ContactUs;

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

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const formGroupStyle = {
    marginBottom: '20px',
    width: '100%',
    maxWidth: '600px',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const textareaStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

