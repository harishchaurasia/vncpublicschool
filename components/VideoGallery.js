import React, { useEffect, useState } from 'react';

const VideoPlayer = ({ video }) => {
  const getYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url;
  };

  if (video.type === 'youtube') {
    const videoId = getYouTubeID(video.videoId);
    return (
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
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

  return (
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
  );
};

export default VideoGallery;
