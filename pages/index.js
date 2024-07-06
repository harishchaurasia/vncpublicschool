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
import Links from '../components/Links';
import ScrollToTopButton from '../components/ScrollToTop';
import VisitCounter from '../components/VisitCounter';
import DeskCard from '../components/Desk';
import { useState } from 'react';

export default function Home() {
  const [notice, setNotice] = useState('Admissions Open for 2024-25 Session!');


  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '100px' }}>
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
      <ImageCarousel/>
      </section>
      <main style={mainStyle}>
                {/* Ensure the id attributes are correctly placed */}
                <section id="ourmission" style={missionSection}>
                <h1 style={MissionHeading}>
                Our Mission
                </h1>
                  <Mission />
                </section>
                <section id="gallery">
                <h1 style={MissionHeading}>
                  Gallery 
                </h1>
                  <Gallery />
                </section>
                <section id="about">
                <h1 style={MissionHeading}>
                  About 
                </h1>
                <div style = {deskCardStyle}>
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
                <section id="links">
                  <Links/>
                </section>
                <section id="contactus" style={contactSection}>
                <h1 style={MissionHeading}>
                  Connect With Us
                </h1>
                  <Contact />
                </section>
        </main>
        <Footer />
        <ScrollToTopButton />
    </div>
  );
}

const deskCardStyle = {
  display: "flex",
  margin: "10px 10px"
}
 
const MissionHeading = {
  textAlign: 'center',
  fontSize: '45px',
  fontFamily: 'New Rocker, cursive',
  marginTop:'0px',
  marginBottom:'0px'
};

const mainStyle = {
  padding: '250px',
  background: 'linear-gradient(116deg, #DCF3F3 0%, #D6F1DF 100%)',
  background: '#D6F1DF',
  minHeight: 'calc(100vh - 120px)', // Adjust based on your header and footer height
  marginBottom:'50px'
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