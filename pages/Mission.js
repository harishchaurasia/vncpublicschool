import React from 'react';
import MissionCard from '../components/MissionCard';
import { Link as ScrollLink } from 'react-scroll';

const Mission = () => {
    return (
        <div>
            <div>
            <div>
                <p style={missionContentStyle}>
                VNC Public School is committed to delivering top-quality education by providing modern 
                resources and opportunities typically found in urban areas, all within our rural community. 
                Our goal is to nurture individual talents, foster character development, and create a 
                supportive environment where students thrive academically, socially, and personally. 
                Join us in our mission to cultivate confident, capable leaders prepared for the future.
                </p>
            </div>
            </div>
            <div style={imageContainerStyle}>
                <MissionCard 
                    imageSrc='/DeskLamp.png' 
                    heading='Quality Education' 
                    text='Providing top-notch education to nurture individual talents and foster character development.'
                />
                <MissionCard 
                    imageSrc='/DrawingCompass.png' 
                    heading='Modern Resources' 
                    text='Ensuring access to the latest resources and opportunities found in urban settings.'
                />
                <MissionCard 
                    imageSrc='/Telescope.png' 
                    heading='Advance Laboratories' 
                    text='Equipping students with state-of-the-art laboratories to enhance their learning experience.'
                />
                <MissionCard 
                    imageSrc='/GraduationCap.png' 
                    heading='Successful Students' 
                    text='Guiding students to discover their potential and empowering them to become confident leaders.'
                />
            </div>
        </div>
    );
};

export default Mission;


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
    flexWrap: 'wrap',
    padding: '10px',
    margin: '10px 0', // Adjust the margin as needed
};
