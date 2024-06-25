
import React, { useEffect, useState } from 'react';
import { AlignCenter } from 'react-feather';


const Mission = () => {
    return (
        <div>
        <h1 style={MissionHeading}>
            Our Mission
        </h1>
        <div>
            <div className='successContainer'>
                <div>
                <img style={successVectorStyle} src='/success.jpg' alt="success vector, "/>
                </div>
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

                <br/>

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
    fontSize:'45px',
    fontFamily: 'New Rocker, cursive'
};


const missionContentStyle = {
    textAlign: 'center',
    //textStyle: 'justify', 
    justifyContent: 'center',
    fontSize:'18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '400',
    fontStyle: 'normal',
    margin: '10px'
};

const successVectorStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
};