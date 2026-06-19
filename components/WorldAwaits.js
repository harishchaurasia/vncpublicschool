import Link from 'next/link';
import { FaGraduationCap, FaChalkboardTeacher, FaHeart, FaCompass } from 'react-icons/fa';

const WorldAwaits = () => (
  <div className="relative overflow-hidden bg-[#0e3533] flex-1 flex flex-col justify-center">

    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    {/* Amber glow top-right */}
    <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />
    {/* Teal glow bottom-left */}
    <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#64B6AC]/12 blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 md:pt-16 pb-10 md:pb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left: text */}
        <div className="text-center md:text-left">
          <span className="inline-block bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            Our Promise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-[1.1] mb-5">
            Great education<br />
            opens <span className="text-[#FBBF24]">every door.</span>
          </h2>
          <p className="font-inter text-white/60 text-base md:text-lg leading-relaxed mb-7 max-w-lg mx-auto md:mx-0">
            At VNC Public School we don't just teach - we build curious minds, strong character, and unshakeable confidence. Every student, Nursery to Class 12, leaves ready for whatever the world demands.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-inter font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200 shadow-lg"
          >
            Apply for 2025-26 →
          </Link>

          {/* Three pillars */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            {[
              { stat: 'K-12', label: 'Nursery to Class 12' },
              { stat: 'CBSE', label: 'Board curriculum' },
              { stat: 'GKP', label: 'Gorakhpur, UP' },
            ].map(({ stat, label }) => (
              <div key={stat} className="text-center md:text-left">
                <p className="font-display font-bold text-xl md:text-2xl text-white mb-0.5">{stat}</p>
                <p className="font-inter text-white/40 text-xs leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Promise pillars */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {[
            { Icon: FaGraduationCap,     color: '#FBBF24', title: 'Academic Excellence', desc: 'Consistent CBSE board results and Olympiad achievers - a track record that speaks for itself.' },
            { Icon: FaChalkboardTeacher, color: '#64B6AC', title: 'Dedicated Faculty',    desc: 'Trained teachers who know your child by name, not just by roll number.' },
            { Icon: FaHeart,             color: '#F87171', title: 'Holistic Growth',      desc: 'Sports, arts, leadership, and life skills - because college asks for more than a marksheet.' },
            { Icon: FaCompass,           color: '#818CF8', title: 'Career Counselling',   desc: 'Helping every student discover their strengths and chart a path that is truly theirs - not anyone else\'s.' },
          ].map(({ Icon, color, title, desc }) => (
            <div
              key={title}
              className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/[0.08] transition-colors duration-300"
            >
              <div style={{ color }} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06]">
                <Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-white/90 text-base leading-snug">{title}</h3>
              <p className="font-inter text-white/40 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
);

export default WorldAwaits;
