import React, { useState, useEffect, useCallback } from 'react';

const Carousel = ({ children, interval = 5000 }) => {
  const slides = React.Children.toArray(children);
  const count = slides.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prevIdx = (current - 1 + count) % count;
  const nextIdx = (current + 1) % count;

  const next = useCallback(() => setCurrent(c => (c + 1) % count), [count]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || count === 0) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [next, interval, paused, count]);

  if (count === 0) return null;

  const withClass = (idx, cls) =>
    React.cloneElement(slides[idx], { className: cls, style: {} });

  return (
    <section
      className="py-2 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 3-panel peek - desktop, full width */}
      <div className="hidden md:flex items-stretch gap-2 px-2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex-shrink-0 w-[20%] h-[22rem] lg:h-[26rem] xl:h-[30rem] rounded-xl overflow-hidden opacity-40 hover:opacity-65 transition-opacity focus:outline-none cursor-pointer"
        >
          {withClass(prevIdx, 'w-full h-full object-cover')}
        </button>

        <div className="flex-1 h-[22rem] lg:h-[26rem] xl:h-[30rem] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
          {withClass(current, 'w-full h-full object-cover')}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className="flex-shrink-0 w-[20%] h-[22rem] lg:h-[26rem] xl:h-[30rem] rounded-xl overflow-hidden opacity-40 hover:opacity-65 transition-opacity focus:outline-none cursor-pointer"
        >
          {withClass(nextIdx, 'w-full h-full object-cover')}
        </button>
      </div>

      {/* Single image - mobile */}
      <div className="md:hidden relative h-60 sm:h-72 mx-3 rounded-2xl overflow-hidden shadow-lg">
        {withClass(current, 'w-full h-full object-cover')}

        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/35 backdrop-blur-sm text-white text-xl font-bold flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/35 backdrop-blur-sm text-white text-xl font-bold flex items-center justify-center"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-[#64B6AC]'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
