import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AdmissionForm from '../components/AdmissionForm';
import { FaGraduationCap, FaBookOpen, FaMapMarkerAlt } from 'react-icons/fa';

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
      <div className="bg-gradient-to-br from-[#64B6AC] to-[#3d8f87] py-6 md:py-8 px-4 relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left flex-1">
            <span className="inline-block bg-[#F59E0B] text-white text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Admissions Open
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-1">
              Enrol Your Child for 2025-26
            </h1>
            <p className="text-white/70 font-inter text-sm">
              Nursery to Class 12 · CBSE · Gorakhpur, UP
            </p>
          </div>
          {/* Stats */}
          <div className="hidden md:flex flex-col gap-2 flex-shrink-0">
            {[
              { Icon: FaGraduationCap, label: 'K-12', sub: 'Nursery to Class 12' },
              { Icon: FaBookOpen,      label: 'CBSE', sub: 'Board Curriculum' },
              { Icon: FaMapMarkerAlt,  label: 'GKP',  sub: 'Gorakhpur, UP' },
            ].map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2.5">
                <Icon size={16} className="text-[#FBBF24] flex-shrink-0" />
                <div>
                  <p className="text-white font-display font-bold text-sm leading-none">{label}</p>
                  <p className="text-white/55 font-inter text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
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
