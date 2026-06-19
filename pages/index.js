import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Mission from './Mission';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Ticker from '../components/Ticker';
import ImageCarousel from '../components/ImageCarousel';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import Contact from '../components/Contact';
import DeskCard from '../components/Desk';
import WorldAwaits from '../components/WorldAwaits';
import OpportunitiesStrip from '../components/OpportunitiesStrip';
import { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

const SectionHead = ({ children, light }) => (
  <div className="text-center mb-10">
    <h2 className={`text-3xl md:text-4xl font-display font-bold mb-3 ${light ? 'text-white' : 'text-gray-800'}`}>
      {children}
    </h2>
    <div className={`w-12 h-1 mx-auto rounded-full ${light ? 'bg-white/50' : 'bg-[#64B6AC]'}`} />
  </div>
);

export default function Home() {
  const [notice] = useState('Admissions Open for 2025-26 Session  ·  Nursery to Class 12  ·  Apply Now');

  return (
    <div className="min-h-screen">
      <Head>
        <title>VNC Public School</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Empowering young minds for a brighter future" />
      </Head>

      <div id="home" className="sticky top-0 z-50">
        <Header />
        <Nav />
      </div>

      <Ticker notice={notice} />

      {/* Carousel — no background strip, white so it blends with the header */}
      <section id="carousel" className="bg-white">
        <ImageCarousel />
      </section>

      {/* Full-width brand statement */}
      <WorldAwaits />

      {/* Our Mission — slightly tinted so it feels distinct from white header */}
      <section id="ourmission" className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHead>Our Mission</SectionHead>
          <Mission />
        </div>
      </section>

      {/* Photo Gallery - teal wash, full width */}
      <section id="gallery" className="bg-[#E8F5F4] py-16">
        <div className="max-w-5xl mx-auto px-4 mb-10">
          <SectionHead>Photo Gallery</SectionHead>
        </div>
        <div className="px-2 md:px-3">
          <Gallery />
        </div>
      </section>

      {/* Video Gallery — warm white */}
      <section id="videos" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHead>Video Gallery</SectionHead>
          <VideoGallery />
        </div>
      </section>

      {/* About / Management — amber warmth */}
      <section id="about" className="bg-amber-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHead>About Us</SectionHead>
          <p className="font-inter text-base md:text-lg leading-relaxed text-gray-600 text-center max-w-3xl mx-auto mb-12">
            VNC Public School is dedicated to delivering high-quality education in a nurturing
            environment - a comprehensive curriculum, modern facilities, and a focus on holistic
            development, so every student excels academically and grows into a well-rounded individual.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DeskCard
              image="./principal.jpg"
              name="R. Ashish"
              position="Principal"
              message="Welcome to VNC Public School. It is my privilege to lead an institution that stands as a beacon of hope and learning for the children of this community. Education is not merely the transfer of knowledge - it is the kindling of curiosity, the building of character, and the awakening of potential. At VNC, every child feels valued, every question is encouraged, and every dream is taken seriously."
            />
            <DeskCard
              image="./director.jpg"
              name="Bharath Chaurasia"
              position="Director"
              message="Our vision is to offer a solid foundation for every child's educational journey. We combine modern technology with a stimulating learning environment to foster holistic development. Our school prepares students for national and international opportunities, ensuring each child can thrive and excel in whatever path they choose."
            />
            <DeskCard
              image="./chairman.jpg"
              name="Shatrudhan Chaurasia"
              position="Chairman"
              message="Every child is unique and special. Our philosophy is to nurture curiosity, imagination, and creativity, allowing each student to learn at their own pace. By building a genuine love for knowledge from an early age, we ensure education is a joyful experience - and our commitment is to provide an environment where every student carves their own path."
            />
          </div>
        </div>
      </section>

      {/* Career Opportunities — self-contained, slate surface */}
      <OpportunitiesStrip />

      {/* Admissions CTA — white background so the teal card stands out */}
      <section id="admissions-cta" className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#64B6AC] rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <span className="inline-block bg-white/20 text-white text-xs font-inter font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Now Open
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              Admissions 2025-26
            </h2>
            <p className="text-white/80 font-inter text-base mb-8 leading-relaxed">
              Nursery to Class 12 · Limited seats available<br />
              Apply online in under 5 minutes.
            </p>
            <Link
              href="/admissions"
              className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-white font-inter font-bold text-base px-8 py-3 rounded-full transition-colors duration-200 shadow-md"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact — teal surface for warmth */}
      <section id="contactus" className="bg-[#E8F5F4] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHead>Connect With Us</SectionHead>
          <Contact />
        </div>
      </section>

      <Analytics />
      <Footer />
    </div>
  );
}
