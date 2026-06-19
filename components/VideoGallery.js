import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

const PREVIEW_COUNT = 4;

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

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')
      .then((r) => r.json())
      .then(setVideos);
  }, []);

  const preview = videos.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {preview.map((video, index) => (
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

      {videos.length > PREVIEW_COUNT && (
        <div className="mt-8 text-center">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 bg-[#64B6AC] hover:bg-[#4fa09a] text-white font-inter font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 shadow-md"
          >
            <FaPlayCircle size={16} />
            See All Videos
          </Link>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
