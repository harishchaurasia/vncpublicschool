import MissionCard from '../components/MissionCard';

const BookIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <path d="M8 6 Q20 2 20 20 Q20 2 32 6 L32 34 Q20 30 20 38 Q20 30 8 34 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="20" y1="5" x2="20" y2="37" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="11" y1="12" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="17" x2="18" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="22" y1="11" x2="29" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="22" y1="16" x2="29" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LaptopIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <rect x="6" y="8" width="28" height="18" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
    <rect x="10" y="12" width="20" height="10" rx="1" fill="currentColor" fillOpacity="0.2"/>
    <path d="M4 26 L36 26 L33 32 L7 32 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="17" y1="29" x2="23" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FlaskIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <path d="M15 6 L15 18 L7 32 Q6 36 20 36 Q34 36 33 32 L25 18 L25 6 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="15" y1="6" x2="25" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="15" cy="29" r="2.5" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="23" cy="33" r="2" fill="currentColor" fillOpacity="0.5"/>
    <circle cx="19" cy="26" r="1.5" fill="currentColor" fillOpacity="0.4"/>
    <line x1="15" y1="22" x2="25" y2="22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
  </svg>
);

const GradCapIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <polygon points="20,8 38,16 20,24 2,16" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M10 19 L10 30 Q20 34 30 30 L30 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <line x1="38" y1="16" x2="38" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="38" cy="27" r="2" fill="currentColor"/>
  </svg>
);

const Mission = () => (
  <div>
    <div className="text-center">
      <p className="font-inter text-sm sm:text-base md:text-lg font-normal mb-8 leading-relaxed text-gray-600 max-w-2xl mx-auto">
        VNC Public School is committed to delivering exceptional education through modern resources,
        experienced faculty, and a curriculum designed for the world of tomorrow. Our goal is to
        nurture individual talents, foster strong character, and create a supportive environment
        where every student thrives - academically, socially, and personally. Join us in building
        confident, capable leaders ready for whatever path they choose.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <MissionCard
        icon={<BookIcon />}
        heading="Quality Education"
        text="Providing top-notch education to nurture individual talents and foster character development."
      />
      <MissionCard
        icon={<LaptopIcon />}
        heading="Modern Resources"
        text="Providing access to cutting-edge technology, digital tools, and resources that prepare students for tomorrow."
      />
      <MissionCard
        icon={<FlaskIcon />}
        heading="Advance Laboratories"
        text="Equipping students with state-of-the-art laboratories to enhance their learning experience."
      />
      <MissionCard
        icon={<GradCapIcon />}
        heading="Successful Students"
        text="Guiding students to discover their potential and empowering them to become confident leaders."
      />
    </div>
  </div>
);

export default Mission;
