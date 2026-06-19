import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaImages } from 'react-icons/fa';

const PREVIEW_COUNT = 4;

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then(setImages);
  }, []);

  const preview = images.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        {preview.map((image, index) => (
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

      {images.length > PREVIEW_COUNT && (
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#64B6AC] hover:bg-[#4fa09a] text-white font-inter font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 shadow-md"
          >
            <FaImages size={16} />
            See All Images
          </Link>
        </div>
      )}
    </div>
  );
};

export default Gallery;
