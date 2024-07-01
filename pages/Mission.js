import React from 'react';
import { AlignCenter } from 'react-feather';

const Mission = () => {
    return (
        <div>
            <h1 style={MissionHeading}>
                Our Mission
            </h1>
            <div style={imageContainerStyle}>
            <div style={imgDivStyle}>
                <img style={centeredImageStyle} src='/DeskLamp.png' alt="Mission Image" />
                <h3 style={headStyles}>
                    Quality Education
                </h3>
            </div>
            <div style={imgDivStyle}>
                <img style={centeredImageStyle} src='/DrawingCompass.png' alt="Mission Image" />
                <h3 style={headStyles}>
                    Modern Resources
                </h3>
            </div>
            <div style={imgDivStyle}>
                <img style={centeredImageStyle} src='/Telescope.png' alt="Mission Image" />
                <h3 style={headStyles}>
                    Advance Laboratories
                </h3>
            </div>
            <div style={imgDivStyle}>
                <img style={centeredImageStyle} src='/GraduationCap.png' alt="Mission Image" />
                <h3 style={headStyles}>
                    Successful Students
                </h3>
            </div>
            </div>
            <div>
                <p style={missionContentStyle}>
                    VNC Public School is dedicated to providing the highest quality education, 
                    ensuring that the resources and opportunities typically found in urban 
                    settings are accessible in our rural community at a significantly lower 
                    cost. Our commitment to excellence creates an unparalleled educational 
                    experience that goes far beyond traditional learning. At VNCPS, we believe 
                    in nurturing individual talents and fostering character development, 
                    creating an environment where students thrive academically, socially, 
                    and personally.
                    Embark on a transformative educational journey with us, where each day is 
                    filled with opportunities to learn, grow, and shape a brighter future. Our 
                    innovative approach to education blends modern teaching methods with a deep
                    respect for individual strengths, preparing students to excel in an ever-changing 
                    world. We are passionate about guiding students to discover their potential 
                    and empowering them to become confident, capable leaders.

                    <br />

                    Join us at VNC Public School, where education is a dynamic and engaging 
                    experience. Our supportive environment encourages curiosity, creativity, 
                    and critical thinking, ensuring that every student feels valued and inspired. 
                    Together, we create a vibrant community of learners dedicated to excellence 
                    and driven by a shared vision of success. At VNCPS, the journey of education 
                    is as important as the destination, and we are committed to making each step 
                    of that journey extraordinary. 
                </p>
            </div>
        </div>
    );
};

export default Mission;

const MissionHeading = {
    textAlign: 'center',
    fontSize: '45px',
    fontFamily: 'New Rocker, cursive'
};

const missionContentStyle = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '400',
    fontStyle: 'normal',
    margin: '10px',
    // backgroundColor: '#edfff3'
};

const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px 0', // Adjust the margin as needed
};

const centeredImageStyle = {
    maxWidth: '100px', // Set the max width in pixels
    width: '100%',
    height: 'auto',
    margin: '2px 75px'
    //boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.4)' 
};

const imgDivStyle = {
    marginTop: '10px',
    marginBottom: '15px'
}

const headStyles = {
    textAlign: 'center',
    fontSize: '25px',
    display: 'flex',
    justifyContent: 'center'
}
