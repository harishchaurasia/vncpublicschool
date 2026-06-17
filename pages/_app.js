import '../styles/globals.css';
import '../styles/Ticker.css';
import Head from 'next/head';
import { FaWhatsapp } from 'react-icons/fa';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/917054858403"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] hover:shadow-xl hover:scale-110 transition-all duration-200"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}

export default MyApp;