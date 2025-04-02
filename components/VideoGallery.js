import React, { useEffect, useState } from 'react';

const VideoPlayer = ({ video }) => {
  if (video.type === 'youtube') {
    // Extract video ID from full URL
    const getYouTubeID = (url) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : url;
    };

    const videoId = getYouTubeID(video.videoId);

    return (
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  } else if (video.type === 'local') {
    return (
      <div className="aspect-w-16 aspect-h-9">
        <video
          controls
          className="w-full h-full"
          poster={video.thumbnail || undefined}
        >
          <source src={`/videos/${video.filename}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
};

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center p-5">
        {videos.map((video, index) => (
          <div key={index} className="m-2 rounded-lg overflow-hidden shadow-lg w-96 bg-white relative">
            <VideoPlayer video={video} />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery; 