import React, { useRef, useState } from 'react';

const LiquidMetalGlobe = ({ className = 'h-80 w-80', onMediaReady, onMediaError }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoFailed, setIsVideoFailed] = useState(false);
  const didNotifyReadyRef = useRef(false);

  const notifyReady = () => {
    if (didNotifyReadyRef.current) return;
    didNotifyReadyRef.current = true;
    setIsVideoReady(true);
    onMediaReady?.();
  };

  return (
    <div className={`${className} relative isolate overflow-hidden rounded-full bg-black`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_35%,#d6d6d6_0%,#8f8f95_34%,#2c2c34_62%,#07070b_100%)]" />
      <video
        className={`absolute left-[53%] top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.95] object-cover object-center transition-opacity duration-300 ${
          isVideoReady && !isVideoFailed ? 'opacity-100' : 'opacity-0'
        }`}
        src="https://leefalk9yd9m859v.public.blob.vercel-storage.com/osa-intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={notifyReady}
        onLoadedData={notifyReady}
        onError={() => {
          setIsVideoFailed(true);
          onMediaError?.();
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default LiquidMetalGlobe;
