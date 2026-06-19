import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
};

const VideoPlayer = ({ video }) => {
  const [playing, setPlaying] = useState(false);

  if (video.type === 'youtube') {
    const videoId = getYouTubeID(video.videoId);
    if (!playing) {
      return (
        <div
          className="aspect-video relative cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={video.title || 'Video thumbnail'}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-200">
            <FaPlayCircle size={64} className="text-white drop-shadow-lg" />
          </div>
        </div>
      );
    }
    return (
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  if (video.type === 'local') {
    return (
      <div className="aspect-video">
        <video controls className="w-full h-full" poster={video.thumbnail || undefined}>
          <source src={`/videos/${video.filename}`} type="video/mp4" />
        </video>
      </div>
    );
  }

  return null;
};

export default function VideosPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')
      .then((r) => r.json())
      .then(setVideos);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Video Gallery | VNC Public School</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Videos from VNC Public School - events, achievements, and campus life." />
      </Head>

      <div className="sticky top-0 z-50">
        <Header />
        <Nav />
      </div>

      <main className="flex-1 bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#64B6AC]/20 text-[#64B6AC] text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Watch & Learn
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-gray-800 mb-3">Video Gallery</h1>
            <div className="w-12 h-1 bg-[#64B6AC] mx-auto rounded-full" />
          </div>

          {videos.length === 0 ? (
            <p className="text-center text-gray-500 font-inter py-16">No videos yet - check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 border-t-4 border-t-[#64B6AC] shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <VideoPlayer video={video} />
                  {(video.title || video.description) && (
                    <div className="p-4 border-t border-gray-100">
                      {video.title && (
                        <h3 className="font-display font-bold text-gray-800 text-base mb-1">{video.title}</h3>
                      )}
                      {video.description && (
                        <p className="text-gray-500 font-inter text-sm leading-relaxed">{video.description}</p>
                      )}
                    </div>
                  )}
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
