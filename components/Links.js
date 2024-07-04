
import React from 'react';
import { Phone, Smartphone } from 'react-feather';

const LinksPage = () => {
  return (
    <div>
    <h1 style={MissionHeading}>
        Important Links 
    </h1>
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 style={admissionHead}>Admissions Open</h1>
        <a href="/apply" style={buttonStyle}>Apply Now</a>
      </div>
    </div>
    </div>
  );
};

export default LinksPage;


const MissionHeading = {
    textAlign: 'center',
    fontSize: '45px',
    fontFamily: 'New Rocker, cursive'
  };
  
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const sectionStyle = {
  marginBottom: '40px',
  textAlign: 'center',
};

const admissionHead = {
  fontSize: '25px',
  fontFamily: 'New Rocker, cursive',
  marginBottom: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '18px',
  color: '#fff',
  backgroundColor: '#007BFF',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
};

const subheadingStyle = {
  fontSize: '28px',
  fontFamily: 'Roboto, sans-serif',
  marginBottom: '20px',
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const iconStyle = {
  marginRight: '10px',
};

const linkStyle = {
  fontSize: '18px',
  color: '#007BFF',
  textDecoration: 'none',
};
