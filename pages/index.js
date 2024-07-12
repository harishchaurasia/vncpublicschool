import Head from 'next/head';
import Header from '../components/Header';
import Mission from './Mission';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Ticker from '../components/Ticker';
import ImageCarousel from '../components/ImageCarousel';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Links from '../components/Links';
import ScrollToTopButton from '../components/ScrollToTop';
import DeskCard from '../components/Desk';
import { useState } from 'react';

export default function Home() {
  const [notice, setNotice] = useState('Admissions Open for 2024-25 Session!');

  return (
    <div className="min-h-screen relative">
      <section id="home">
        <Head>
          <title>VNC Public School</title>
          <link rel="icon" href="/logo.png" />
          <meta name="description" content="Empowering young minds for a brighter future" />
        </Head>
        <Header />
        <Nav />
        <Ticker notice={notice} />
      </section>
      <section id="carousel">
        <ImageCarousel />
      </section>
        <main className="main-style mx-0 p-0">
            <section id="ourmission" className="section mb-8 mt-8">
                <h1 className="mission-heading text-3xl md:text-4xl font-cursive font-bold text-center">Our Mission</h1>
                <Mission />
            </section>

            <section id="gallery" className="section mb-8">
                <h1 className="font-cursive mission-heading text-3xl md:text-4xl font-bold text-center mb-6">Gallery</h1>
                <Gallery />
            </section>

            <section id="about" className="section mb-8">
                <h1 className=" font-cursive mission-heading text-3xl md:text-4xl font-bold text-center mb-6">About</h1>
                <div className="text-center px-8">
                  <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl font-normal my-4 mx-2 leading-relaxed">
                  Our school is dedicated to providing high-quality education with a mission to uplift rural India. We offer 
                  a comprehensive curriculum, state-of-the-art facilities, and focus on holistic development, ensuring students 
                  excel academically and grow into well-rounded individuals. Our aim is to broaden their horizons and show them 
                  the vast opportunities available in the world. Committed to bridging the educational gap, we empower students 
                  with the knowledge and skills needed to thrive in a rapidly changing world. Let's meet the management team 
                  and listen to their vision.
                  </p>
                </div>
                <div className="desk-card flex flex-wrap justify-center gap-4">
                    <DeskCard
                        image="./principal.png"
                        name="Devi Devi"
                        position="Principal"
                        message="Welcome to our school. We are dedicated to providing the best education for our students."
                    />
                    <DeskCard
                        image="./principal.png"
                        name="Bharath Chaurasia"
                        position="Director"
                        message="Welcome to our school. We are dedicated to providing the best education for our students."
                    />
                    <DeskCard
                        image="./principal.png"
                        name="Shatrudhan Chaurasia"
                        position="Chairman"
                        message="Welcome to our school. We are dedicated to providing the best education for our students."
                    />
                </div>
            </section>

            <section id="links" className="section mb-8">
            <h1 className="font-cursive mission-heading text-3xl md:text-4xl font-bold text-center mb-6">Important Links</h1>
                <Links />
            </section>

            <section id="contactus" className="section mb-8">
                <h1 className="font-cursive mission-heading text-3xl md:text-4xl font-bold text-center mb-6">Connect With Us</h1>
                <Contact />
            </section>
        </main>
      <Footer />
    </div>
  );
}
