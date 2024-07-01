import React from 'react';

const MissionCard = ({ imageSrc, heading, text }) => {
    return (
        <div style={cardStyle}>
            <img style={cardImageStyle} src={imageSrc} alt={heading} />
            <h3 style={cardHeadingStyle}>{heading}</h3>
            <p style={cardTextStyle}>{text}</p>
        </div>
    );
};

export default MissionCard;

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '25px',
    textAlign: 'center',
    maxWidth: '200px',
    margin: '35px',
    boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
    // backgroundColor: '#fff'
    backgroundColor: '#edfff3'
};

const cardImageStyle = {
    maxWidth: '100px',
    width: '100%',
    height: 'auto',
    marginBottom: '10px'
};

const cardHeadingStyle = {
    fontSize: '20px',
    margin: '10px 0'
};

const cardTextStyle = {
    fontSize: '16px'
};
