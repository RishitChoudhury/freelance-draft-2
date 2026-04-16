import React from 'react';

const LiquidMetalGlobe = ({ className = 'h-80 w-80' }) => {
  return (
    <div className={`${className} relative isolate overflow-hidden rounded-full`}>
      <video
        className="absolute left-[53%] top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.95] object-cover object-center"
        src="https://leefalk9yd9m859v.public.blob.vercel-storage.com/osa-intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </div>
  );
};

export default LiquidMetalGlobe;
