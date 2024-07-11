// pages/_app.js
import '../styles/globals.css'; // Import the global CSS
import '../styles/Ticker.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;