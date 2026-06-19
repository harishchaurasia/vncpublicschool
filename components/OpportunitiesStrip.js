import {
  FaSyringe, FaHardHat, FaFlask, FaPlane,
  FaPaintBrush, FaCode, FaMusic, FaRocket, FaInfinity,
} from 'react-icons/fa';

const careers = [
  { label: 'Doctor',    tagline: 'Heal lives',           color: '#F87171', Icon: FaSyringe },
  { label: 'Engineer',  tagline: 'Build the future',     color: '#34D399', Icon: FaHardHat },
  { label: 'Scientist', tagline: 'Discover tomorrow',    color: '#818CF8', Icon: FaFlask },
  { label: 'Pilot',     tagline: 'Reach new heights',    color: '#38BDF8', Icon: FaPlane },
  { label: 'Artist',    tagline: 'Create your world',    color: '#FB923C', Icon: FaPaintBrush },
  { label: 'Coder',     tagline: 'Power the digital age',color: '#22D3EE', Icon: FaCode },
  { label: 'Musician',  tagline: 'Move the world',       color: '#F472B6', Icon: FaMusic },
  { label: 'Astronaut', tagline: 'Explore the infinite', color: '#C084FC', Icon: FaRocket },
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
          Our students go on to become doctors, engineers, artists, pilots — and everything the world needs next.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {careers.map(({ label, tagline, color, Icon }) => (
          <div
            key={label}
            className="bg-gray-800 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center border border-gray-700/50 hover:border-gray-600 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-default"
          >
            <div style={{ color }} className="mb-3 flex items-center justify-center">
              <Icon size={44} />
            </div>
            <p className="font-inter font-bold text-white text-sm mb-1">{label}</p>
            <p className="font-inter text-gray-500 text-xs">{tagline}</p>
          </div>
        ))}

        {/* And many more */}
        <div className="bg-gray-800/50 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center border border-dashed border-gray-600 cursor-default">
          <div className="text-gray-500 mb-3">
            <FaInfinity size={40} />
          </div>
          <p className="font-inter font-bold text-gray-400 text-sm mb-1">And Many More</p>
          <p className="font-inter text-gray-600 text-xs">The sky is just the start</p>
        </div>
      </div>

      <p className="text-center font-inter text-xs text-gray-600 mt-10 uppercase tracking-widest">
        Every child at VNC deserves the chance to be extraordinary.
      </p>
    </div>
  </section>
);

export default OpportunitiesStrip;
