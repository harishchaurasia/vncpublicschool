import React from 'react';
import MissionCard from '../components/MissionCard';

const Mission = () => {
  return (
    <div className="p-4">
      <div className="text-center px-8">
        <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl font-normal my-4 mx-2 leading-relaxed">
          VNC Public School is committed to delivering top-quality education by providing modern
          resources and opportunities typically found in urban areas, all within our rural community.
          Our goal is to nurture individual talents, foster character development, and create a
          supportive environment where students thrive academically, socially, and personally.
          Join us in our mission to cultivate confident, capable leaders prepared for the future.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <MissionCard
          imageSrc="/DeskLamp.png"
          heading="Quality Education"
          text="Providing top-notch education to nurture individual talents and foster character development."
        />
        <MissionCard
          imageSrc="/DrawingCompass.png"
          heading="Modern Resources"
          text="Ensuring access to the latest resources and opportunities found in urban settings."
        />
        <MissionCard
          imageSrc="/Telescope.png"
          heading="Advance Laboratories"
          text="Equipping students with state-of-the-art laboratories to enhance their learning experience."
        />
        <MissionCard
          imageSrc="/GraduationCap.png"
          heading="Successful Students"
          text="Guiding students to discover their potential and empowering them to become confident leaders."
        />
      </div>
    </div>
  );
};

export default Mission;
