const WorldAwaits = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-[#64B6AC] to-[#3d8f87] py-14 md:py-20 px-6">

    {/* Decorative background circles */}
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
    <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />

    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">

      {/* Text */}
      <div className="flex-1 text-white text-center md:text-left">
        <span className="inline-block bg-[#F59E0B] text-white text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
          Our Promise
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
          Excellence begins here.<br />
          <span className="text-[#FBBF24]">The world is yours.</span>
        </h2>
        <p className="font-inter text-white/80 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          At VNC Public School, every child receives world-class education,
          modern resources, and the mentorship to reach their fullest potential -
          so no dream stays out of reach.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
          {[
            { icon: '🎓', label: 'Excellence' },
            { icon: '🚀', label: 'No limits' },
            { icon: '⭐', label: 'Every child' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full font-inter text-sm font-medium">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Illustration */}
      <div className="flex-shrink-0 w-64 md:w-80 hidden sm:block" aria-hidden="true">
        <svg viewBox="0 0 320 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-lg">

          {/* Globe */}
          <circle cx="170" cy="150" r="90" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"/>
          <ellipse cx="170" cy="150" rx="35" ry="90" stroke="white" strokeOpacity="0.25" strokeWidth="1" fill="none"/>
          <line x1="80" y1="150" x2="260" y2="150" stroke="white" strokeOpacity="0.25" strokeWidth="1"/>
          <ellipse cx="170" cy="150" rx="90" ry="28" stroke="white" strokeOpacity="0.2" strokeWidth="1" fill="none"/>

          {/* Child sitting — body */}
          <ellipse cx="128" cy="222" rx="28" ry="10" fill="white" fillOpacity="0.15"/>
          <path d="M116 200 Q108 218 100 225" stroke="white" strokeWidth="7" strokeLinecap="round"/>
          <path d="M140 200 Q148 218 156 225" stroke="white" strokeWidth="7" strokeLinecap="round"/>
          <rect x="114" y="172" width="28" height="32" rx="8" fill="white" fillOpacity="0.9"/>
          <circle cx="128" cy="158" r="16" fill="white" fillOpacity="0.95"/>
          <path d="M112 155 Q115 142 128 140 Q141 142 144 155" fill="white" fillOpacity="0.4"/>
          <path d="M114 180 Q96 188 90 196" stroke="white" strokeWidth="7" strokeLinecap="round"/>
          <path d="M142 180 Q158 188 163 196" stroke="white" strokeWidth="7" strokeLinecap="round"/>

          {/* Open book */}
          <path d="M86 195 Q128 185 170 195 L170 230 Q128 220 86 230 Z" fill="#F59E0B" fillOpacity="0.9"/>
          <path d="M170 195 Q212 185 254 195 L254 230 Q212 220 170 230 Z" fill="#FBBF24" fillOpacity="0.9"/>
          <line x1="170" y1="195" x2="170" y2="230" stroke="white" strokeWidth="2" strokeOpacity="0.6"/>
          <line x1="100" y1="210" x2="156" y2="207" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
          <line x1="100" y1="218" x2="156" y2="215" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
          <line x1="184" y1="207" x2="240" y2="210" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
          <line x1="184" y1="215" x2="240" y2="218" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>

          {/* Stars */}
          {[
            [52, 60], [270, 48], [290, 140], [58, 200], [240, 240], [80, 100]
          ].map(([x, y], i) => (
            <g key={i} transform={`translate(${x},${y})`}>
              <polygon points="0,-7 2,-2 7,-2 3,2 5,7 0,4 -5,7 -3,2 -7,-2 -2,-2" fill="#FBBF24" fillOpacity="0.85"/>
            </g>
          ))}

          {/* Rocket */}
          <g transform="translate(248,72) rotate(-30)">
            <path d="M0 -20 Q6 -8 6 4 L0 10 L-6 4 Q-6 -8 0 -20Z" fill="white" fillOpacity="0.9"/>
            <path d="M-6 6 Q-10 12 -8 16 L0 12 L8 16 Q10 12 6 6Z" fill="#EA580C" fillOpacity="0.9"/>
            <circle cx="0" cy="-4" r="3" fill="#64B6AC"/>
            <path d="M-6 2 L-12 8" stroke="white" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round"/>
            <path d="M6 2 L12 8" stroke="white" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round"/>
          </g>

          <circle cx="100" cy="75" r="5" fill="white" fillOpacity="0.6"/>
          <circle cx="240" cy="190" r="4" fill="#EA580C" fillOpacity="0.8"/>
          <circle cx="60" cy="160" r="3.5" fill="#FBBF24" fillOpacity="0.8"/>
        </svg>
      </div>
    </div>
  </div>
);

export default WorldAwaits;
