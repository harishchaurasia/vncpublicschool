import MissionCard from '../components/MissionCard';
import { FaBookOpen, FaLaptop, FaFlask, FaGraduationCap } from 'react-icons/fa';

const Mission = () => (
  <div>
    <div className="text-center">
      <p className="font-inter text-sm sm:text-base md:text-lg font-normal mb-8 leading-relaxed text-gray-600 max-w-2xl mx-auto">
        VNC Public School is committed to delivering exceptional education through modern resources,
        experienced faculty, and a curriculum designed for the world of tomorrow. Our goal is to
        nurture individual talents, foster strong character, and create a supportive environment
        where every student thrives — academically, socially, and personally.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <MissionCard
        icon={<FaBookOpen size={32} />}
        heading="Quality Education"
        text="Providing top-notch education to nurture individual talents and foster character development."
      />
      <MissionCard
        icon={<FaLaptop size={32} />}
        heading="Modern Resources"
        text="Cutting-edge technology, digital tools, and resources that prepare students for tomorrow."
      />
      <MissionCard
        icon={<FaFlask size={32} />}
        heading="Advance Laboratories"
        text="Equipping students with state-of-the-art laboratories to enhance their learning experience."
      />
      <MissionCard
        icon={<FaGraduationCap size={32} />}
        heading="Successful Students"
        text="Guiding students to discover their potential and empowering them to become confident leaders."
      />
    </div>
  </div>
);

export default Mission;
