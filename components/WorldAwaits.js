import Link from 'next/link';

const WorldAwaits = () => (
  <div className="relative overflow-hidden bg-[#0e3533]">

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

    <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left: text */}
        <div className="text-center md:text-left">
          <span className="inline-block bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Our Promise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-[1.1] mb-6">
            Great education<br />
            opens <span className="text-[#FBBF24]">every door.</span>
          </h2>
          <p className="font-inter text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            At VNC Public School we don't just teach - we build curious minds, strong character, and unshakeable confidence. Every student, Nursery to Class 12, leaves ready for whatever the world demands.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-inter font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 shadow-lg"
          >
            Apply for 2025-26 →
          </Link>

          {/* Three pillars */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-white/10">
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

        {/* Right: Constellation SVG */}
        <div className="hidden md:flex justify-center items-center" aria-hidden="true">
          <svg viewBox="0 0 380 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">

            {/* Constellation lines */}
            <line x1="190" y1="75" x2="100" y2="195" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
            <line x1="190" y1="75" x2="280" y2="195" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
            <line x1="100" y1="195" x2="190" y2="268" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
            <line x1="280" y1="195" x2="190" y2="268" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
            <line x1="190" y1="75" x2="316" y2="56" stroke="white" strokeOpacity="0.07" strokeWidth="1"/>
            <line x1="100" y1="195" x2="52" y2="128" stroke="white" strokeOpacity="0.07" strokeWidth="1"/>

            {/* Dashed orbit */}
            <circle cx="190" cy="75" r="68" stroke="white" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 10"/>

            {/* — Graduation cap (top center, amber) — */}
            <g transform="translate(190,75)">
              <polygon points="-48,-13 0,-27 48,-13 0,1" fill="#F59E0B" fillOpacity="0.92"/>
              <polygon points="-34,-13 0,-5 34,-13 0,-27" fill="#FBBF24" fillOpacity="0.6"/>
              <line x1="48" y1="-13" x2="48" y2="13" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="48" cy="15" r="4.5" fill="#F59E0B" fillOpacity="0.9"/>
              <rect x="-18" y="1" width="36" height="24" rx="4" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeOpacity="0.35" strokeWidth="1.5"/>
            </g>

            {/* — Book stack (bottom left, white) — */}
            <g transform="translate(100,195)">
              <rect x="-36" y="12" width="72" height="15" rx="3" fill="white" fillOpacity="0.82"/>
              <rect x="-30" y="-2" width="72" height="15" rx="3" fill="white" fillOpacity="0.60"/>
              <rect x="-24" y="-16" width="72" height="15" rx="3" fill="#64B6AC" fillOpacity="0.65"/>
              <line x1="-24" y1="-9" x2="-24" y2="27" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
              <line x1="-30" y1="5" x2="-30" y2="27" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
            </g>

            {/* — Pencil (bottom right, white) — */}
            <g transform="translate(280,195) rotate(-18)">
              <rect x="-6" y="-38" width="12" height="56" rx="3" fill="white" fillOpacity="0.82"/>
              <polygon points="-6,18 6,18 0,34" fill="#F59E0B" fillOpacity="0.9"/>
              <polygon points="-2,26 2,26 0,34" fill="#0e3533" fillOpacity="0.9"/>
              <rect x="-6" y="-46" width="12" height="10" rx="2" fill="#EA580C" fillOpacity="0.75"/>
              <rect x="-6" y="-38" width="12" height="5" fill="white" fillOpacity="0.15"/>
            </g>

            {/* — Globe (bottom center, white) — */}
            <g transform="translate(190,268)">
              <circle cx="0" cy="0" r="28" stroke="white" strokeOpacity="0.45" strokeWidth="1.5" fill="white" fillOpacity="0.05"/>
              <ellipse cx="0" cy="0" rx="11" ry="28" stroke="white" strokeOpacity="0.25" strokeWidth="1"/>
              <line x1="-28" y1="0" x2="28" y2="0" stroke="white" strokeOpacity="0.25" strokeWidth="1"/>
              <ellipse cx="0" cy="0" rx="28" ry="10" stroke="white" strokeOpacity="0.18" strokeWidth="1"/>
            </g>

            {/* Accent nodes */}
            <g transform="translate(316,56)">
              <circle cx="0" cy="0" r="16" fill="#64B6AC" fillOpacity="0.18" stroke="#64B6AC" strokeOpacity="0.45" strokeWidth="1.5"/>
              <circle cx="0" cy="0" r="7" fill="#64B6AC" fillOpacity="0.55"/>
            </g>
            <g transform="translate(52,128)">
              <circle cx="0" cy="0" r="12" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.18" strokeWidth="1"/>
              <circle cx="0" cy="0" r="5" fill="white" fillOpacity="0.45"/>
            </g>

            {/* Stars */}
            {[[36,38],[346,98],[56,278],[344,258],[158,28],[238,312],[310,180],[72,240]].map(([x, y], i) => (
              <g key={i} transform={`translate(${x},${y})`}>
                <polygon
                  points="0,-5 1.4,-1.4 5,-1.4 2,1 3.2,4.8 0,3 -3.2,4.8 -2,1 -5,-1.4 -1.4,-1.4"
                  fill="#FBBF24"
                  fillOpacity={i % 3 === 0 ? 0.7 : 0.4}
                />
              </g>
            ))}
          </svg>
        </div>

      </div>
    </div>
  </div>
);

export default WorldAwaits;
