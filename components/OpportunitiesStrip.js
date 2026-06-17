const careers = [
  {
    label: 'Doctor',
    tagline: 'Heal lives',
    color: '#F87171',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="24" cy="13" r="8" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 42 C10 32 38 32 38 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <rect x="20" y="27" width="8" height="13" rx="2" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="29" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="33" x2="28" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Engineer',
    tagline: 'Build the future',
    color: '#34D399',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="8" y="28" width="32" height="13" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="10" width="20" height="18" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="19" r="4" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="34" x2="12" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="34" x2="20" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="34" x2="28" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="36" y1="34" x2="36" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Scientist',
    tagline: 'Discover tomorrow',
    color: '#818CF8',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M18 8 L18 24 L10 38 Q10 42 24 42 Q38 42 38 38 L30 24 L30 8 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <line x1="18" y1="8" x2="30" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="19" cy="34" r="2.5" fill="currentColor" fillOpacity="0.7"/>
        <circle cx="27" cy="38" r="2" fill="currentColor" fillOpacity="0.55"/>
        <circle cx="23" cy="30" r="1.5" fill="currentColor" fillOpacity="0.45"/>
      </svg>
    ),
  },
  {
    label: 'Teacher',
    tagline: 'Shape minds',
    color: '#FCD34D',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="6" y="10" width="36" height="24" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <line x1="14" y1="19" x2="34" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14" y1="25" x2="26" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="8" cy="40" r="3" fill="currentColor" fillOpacity="0.5"/>
        <circle cx="40" cy="40" r="3" fill="currentColor" fillOpacity="0.5"/>
        <line x1="8" y1="34" x2="8" y2="37" stroke="currentColor" strokeWidth="2"/>
        <line x1="40" y1="34" x2="40" y2="37" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Pilot',
    tagline: 'Reach new heights',
    color: '#38BDF8',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M6 28 Q18 10 40 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M34 18 L44 22 L38 30 Z" fill="currentColor" fillOpacity="0.75"/>
        <path d="M14 22 L8 16 L16 14 Z" fill="currentColor" fillOpacity="0.45"/>
        <path d="M22 26 L18 36 L24 34 L26 38 L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="30" cy="20" r="3" fill="currentColor" fillOpacity="0.65"/>
      </svg>
    ),
  },
  {
    label: 'Artist',
    tagline: 'Create your world',
    color: '#FB923C',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="24" cy="22" r="14" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="18" r="3" fill="currentColor" fillOpacity="0.6"/>
        <circle cx="28" cy="15" r="2.5" fill="#FCD34D" fillOpacity="0.8"/>
        <circle cx="32" cy="24" r="2.5" fill="#34D399" fillOpacity="0.8"/>
        <circle cx="24" cy="30" r="2" fill="#F87171" fillOpacity="0.7"/>
        <path d="M12 38 Q20 34 24 36 Q28 38 36 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M36 34 L38 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Farmer',
    tagline: 'Feed the nation',
    color: '#4ADE80',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M24 40 L24 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 20 Q32 16 36 8 Q28 8 24 20" fill="currentColor" fillOpacity="0.55" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 26 Q16 22 12 14 Q20 12 24 26" fill="currentColor" fillOpacity="0.38" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10" y1="40" x2="38" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="36" cy="30" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M36 27 L36 24" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M33 28.5 L30.5 26.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M33 31.5 L30.5 33.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Astronaut',
    tagline: 'Explore the infinite',
    color: '#C084FC',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="24" cy="16" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="16" r="6" fill="white" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 26 Q12 40 24 40 Q36 40 34 26 Q30 28 24 28 Q18 28 14 26Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <line x1="14" y1="30" x2="8" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="34" y1="30" x2="40" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="20" y="32" width="8" height="4" rx="1" fill="currentColor" fillOpacity="0.45"/>
      </svg>
    ),
  },
];

const OpportunitiesStrip = () => (
  <section className="bg-gray-900 py-16 px-4">
    <div className="max-w-5xl mx-auto">

      <div className="text-center mb-12">
        <span className="inline-block bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Limitless Futures
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
          Your future has no ceiling.
        </h2>
        <div className="w-12 h-1 bg-[#64B6AC] mx-auto rounded-full mb-4" />
        <p className="font-inter text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Our students go on to become doctors, engineers, artists, pilots - and everything the world needs next.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {careers.map(({ label, tagline, color, svg }) => (
          <div
            key={label}
            className="bg-gray-800 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center border border-gray-700/50 hover:border-gray-600 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-default"
          >
            <div style={{ color }} className="mb-3 flex items-center justify-center">
              {svg}
            </div>
            <p className="font-inter font-bold text-white text-sm mb-1">{label}</p>
            <p className="font-inter text-gray-500 text-xs">{tagline}</p>
          </div>
        ))}
      </div>

      <p className="text-center font-inter text-xs text-gray-600 mt-10 uppercase tracking-widest">
        Every child at VNC deserves the chance to be extraordinary.
      </p>
    </div>
  </section>
);

export default OpportunitiesStrip;
