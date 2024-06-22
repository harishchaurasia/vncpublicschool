
import React from 'react';



const Mission = () => {
    return (
        <div>
        <h1 style={MissionHeading}>
            Our Mission
        </h1>
        <div>
            <p style={missionContentStyle}>
                VNC Public School is dedicated to delivering top-tier education, 
                bringing the resources and opportunities of urban schools to our 
                rural community at an affordable cost. Embark on a transformative 
                educational journey where learning transcends textbooks. As a 
                beacon of innovation, we focus on character development and the 
                nurturing of individual talents. 
                
                <br/>
                Join us in crafting a brighter, 
                empowered future as we inspire students to excel within a dynamic 
                and supportive environment. At VNCPS, every day is a chance to 
                learn, grow, and shape the leaders of tomorrow.
            </p>
        </div>
        </div>
    );
};

export default Mission;


// const MissionDivStyle = {
//     textAlign: 'center',
//     fontSize:'25px',
//     fontFamily: 'New Rocker, cursive'
// };

const MissionHeading = {
    textAlign: 'center',
    fontSize:'45px',
    fontFamily: 'New Rocker, cursive'
};


const missionContentStyle = {
    textAlign: 'center',
    fontSize:'20px',
    fontFamily: 'Lora, serif',
    fontWeight: 'bold'
};

