// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Mission from './Mission';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Ticker from '../components/Ticker';
import ImageCarousel from '../components/ImageCarousel';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';


import { useState } from 'react';


export default function Home() {
  const [notice, setNotice] = useState('Admissions Open for 2024-25 Session!');


  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '100px' }}>
      <Head>
        <title>VNC Public School</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Empowering young minds for a brighter future" />
      </Head>
      <Header />
      <Nav />
      <Ticker notice={notice} />
      <ImageCarousel/>
      <main style={mainStyle}>
                {/* Ensure the id attributes are correctly placed */}
                <section id="ourmission" style={missionSection}>
                    <Mission />
                </section>
                <section id="gallery">
                <Gallery />
                </section>
                <section id="about">
                    {/* About content goes here */}
                </section>
                <section id="achievements">
                    {/* Achievements content goes here */}
                </section>
                <section id="contactus" style={contactSection}>
                <Contact />
                </section>
            </main>
      <Footer />
    </div>
  );
}

const mainStyle = {
  padding: '20px',
  background: 'linear-gradient(116deg, #DCF3F3 0%, #D6F1DF 100%)',
  background: '#D6F1DF',
  minHeight: 'calc(100vh - 120px)', // Adjust based on your header and footer height
};

const lineStyle = {
  border: 'none',
  borderTop: '2px solid #64B6AC',
  margin: '10px 0',
};

const missionSection = {
    // backgroundColor: '#edfff3'
}

const contactSection = {
  
}