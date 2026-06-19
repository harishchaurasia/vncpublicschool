import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then(setImages);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Photo Gallery | VNC Public School</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Photos from VNC Public School — events, classrooms, and campus life." />
      </Head>

      <div className="sticky top-0 z-50">
        <Header />
        <Nav />
      </div>

      <main className="flex-1 bg-[#E8F5F4] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#64B6AC]/20 text-[#64B6AC] text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Campus Life
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-gray-800 mb-3">Photo Gallery</h1>
            <div className="w-12 h-1 bg-[#64B6AC] mx-auto rounded-full" />
          </div>

          {images.length === 0 ? (
            <p className="text-center text-gray-500 font-inter py-16">No photos yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-md bg-gray-200 aspect-square group hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={`/gallery/${image}`}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
