import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AdmissionForm from '../components/AdmissionForm';

const steps = [
  {
    number: '01',
    title: 'Fill the Form',
    description: 'Complete the online admission form below with student and parent details.',
  },
  {
    number: '02',
    title: 'Document Verification',
    description: 'Visit the school with originals: birth certificate, previous marksheet, and 2 passport photos.',
  },
  {
    number: '03',
    title: 'Confirmation Call',
    description: "Our admissions team will call you within 2 working days to confirm your child's seat.",
  },
];

export default function Admissions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Admissions 2025-26 | VNC Public School</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Apply for admission to VNC Public School for the 2025-26 session. Nursery to Class 12." />
      </Head>

      <div className="sticky top-0 z-50">
        <Header />
        <Nav />
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#64B6AC] to-[#3d8f87] py-14 md:py-20 px-4 overflow-hidden relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="text-center md:text-left flex-1">
            <span className="inline-block bg-[#F59E0B] text-white text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Admissions Open
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-3">
              Join VNC Public School
            </h1>
            <p className="text-white/80 font-inter text-lg max-w-xl leading-relaxed">
              Session 2025-26 &nbsp;·&nbsp; Nursery to Class 12<br />
              Empowering young minds for a brighter future.
            </p>
          </div>
          {/* Illustration */}
          <div className="hidden md:block flex-shrink-0 w-56" aria-hidden="true">
            <svg viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Stars */}
              {[[20,20],[195,15],[205,120],[10,140],[110,10],[160,220]].map(([x,y],i) => (
                <polygon key={i} points={`${x},-5 ${x+2},0 ${x+7},0 ${x+3},3 ${x+5},8 ${x},5 ${x-5},8 ${x-3},3 ${x-7},0 ${x-2},0`}
                  transform={`translate(0,${y})`} fill="#FBBF24" fillOpacity="0.8"/>
              ))}
              {/* Pencil */}
              <g transform="translate(80,30) rotate(20)">
                <rect x="-8" y="-60" width="16" height="80" rx="3" fill="white" fillOpacity="0.9"/>
                <polygon points="-8,20 8,20 0,38" fill="#F59E0B"/>
                <polygon points="-2,30 2,30 0,38" fill="#1F2937" fillOpacity="0.8"/>
                <rect x="-8" y="-68" width="16" height="10" rx="2" fill="#EA580C" fillOpacity="0.8"/>
                <rect x="-8" y="-60" width="16" height="5" fill="#64B6AC" fillOpacity="0.4"/>
              </g>
              {/* Kid body */}
              <circle cx="140" cy="155" r="18" fill="white" fillOpacity="0.92"/>
              <rect x="126" y="173" width="28" height="36" rx="10" fill="white" fillOpacity="0.85"/>
              {/* Arms up in joy */}
              <path d="M126 182 Q108 168 105 155" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" strokeOpacity="0.9"/>
              <path d="M154 182 Q172 168 175 155" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" strokeOpacity="0.9"/>
              {/* Legs */}
              <path d="M132 208 Q128 226 124 232" stroke="white" strokeWidth="7" strokeLinecap="round" fill="none" strokeOpacity="0.9"/>
              <path d="M148 208 Q152 226 156 232" stroke="white" strokeWidth="7" strokeLinecap="round" fill="none" strokeOpacity="0.9"/>
              {/* Hair */}
              <path d="M122 152 Q128 138 140 136 Q152 138 158 152" fill="white" fillOpacity="0.35"/>
              {/* School bag */}
              <rect x="155" y="178" width="18" height="22" rx="5" fill="#F59E0B" fillOpacity="0.7" stroke="white" strokeWidth="1"/>
              <rect x="159" y="182" width="10" height="7" rx="2" fill="white" fillOpacity="0.4"/>
              {/* Ground shadow */}
              <ellipse cx="140" cy="240" rx="30" ry="8" fill="white" fillOpacity="0.12"/>
              {/* Books floating */}
              <rect x="30" y="80" width="36" height="26" rx="3" fill="#F59E0B" fillOpacity="0.7" transform="rotate(-12,48,93)"/>
              <rect x="34" y="84" width="36" height="26" rx="3" fill="white" fillOpacity="0.3" transform="rotate(-12,52,97)"/>
              <line x1="40" y1="89" x2="60" y2="86" stroke="white" strokeWidth="1.5" opacity="0.6" transform="rotate(-12,50,88)"/>
              <line x1="40" y1="94" x2="60" y2="91" stroke="white" strokeWidth="1.5" opacity="0.6" transform="rotate(-12,50,93)"/>
            </svg>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-start">

            {/* LEFT — sticky info sidebar */}
            <div className="lg:sticky lg:top-[210px]">

              <h2 className="text-2xl font-display font-bold text-gray-800 mb-1">How to Apply</h2>
              <p className="font-inter text-gray-400 text-sm mb-8">Simple 3-step process - done in under 5 minutes</p>

              {/* Timeline steps */}
              <div className="mb-8">
                {steps.map((step, i) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-[#64B6AC]/15 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#64B6AC] font-display font-bold text-sm">{step.number}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 bg-[#64B6AC]/20 my-1.5" />
                      )}
                    </div>
                    <div className={i < steps.length - 1 ? 'pb-7' : ''}>
                      <h3 className="font-display font-bold text-gray-800 text-base mb-1">{step.title}</h3>
                      <p className="font-inter text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info cards */}
              <div className="border-t border-gray-200 pt-7 space-y-4 mb-7">
                {[
                  { label: 'Classes Offered', value: 'Nursery - Class 12' },
                  { label: 'Session', value: '2025 - 2026' },
                  { label: 'Phone', value: '+91 70548 58403' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="font-inter text-xs text-gray-400 uppercase tracking-widest">{label}</span>
                    <span className="font-display font-semibold text-gray-700 text-sm">{value}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917054858403"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-inter font-bold text-sm py-3 rounded-xl transition-colors duration-200"
              >
                <svg viewBox="0 0 448 512" className="w-4 h-4 fill-current"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/></svg>
                Chat with us on WhatsApp
              </a>
            </div>

            {/* RIGHT — form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-8">
                Application Form
              </h2>
              <AdmissionForm />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
