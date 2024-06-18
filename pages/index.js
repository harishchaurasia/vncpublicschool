import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '100px' }}>
            <Head>
                <title>VNC Public School</title>
                <meta name="description" content="Empowering young minds for a brighter future" />
            </Head>
            <Header />
            <Nav />
            <main style={mainStyle}>
                {/* Main content goes here */}
            </main>
            <Footer />
        </div>
    );
}

const mainStyle = {
    padding: '20px',
    background: 'linear-gradient(116deg, #DCF3F3 0%, #D6F1DF 100%)',
    minHeight: 'calc(100vh - 120px)', // Adjust based on your header and footer height
};
