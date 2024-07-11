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
    <div className="min-h-screen relative pb-24">
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
      <main className="main-style">
        <section id="ourmission" className="section">
          <h1 className="mission-heading">Our Mission</h1>
          <Mission />
        </section>
        <section id="gallery" className="section">
          <h1 className="mission-heading">Gallery</h1>
          <Gallery />
        </section>
        <section id="about" className="section">
          <h1 className="mission-heading">About</h1>
          <div className="desk-card flex-wrap justify-center gap-4">
            <DeskCard
              image="./principal.png"
              name="John Doe"
              position="Principal"
              message="Welcome to our school. We are dedicated to providing the best education for our students."
            />
            <DeskCard
              image="./principal.png"
              name="John Doe"
              position="Principal"
              message="Welcome to our school. We are dedicated to providing the best education for our students."
            />
            <DeskCard
              image="./principal.png"
              name="John Doe"
              position="Principal"
              message="Welcome to our school. We are dedicated to providing the best education for our students."
            />
          </div>
        </section>
        <section id="links" className="section">
          <Links />
        </section>
        <section id="contactus" className="section">
          <h1 className="mission-heading">Connect With Us</h1>
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
