import React from "react";

export default function VideoThree() {
  const videoId = '3YpIJr_p7h0';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${videoId}`;

  return (
    <div className="tp-video-3-area" style={{
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        width: '100vw',
        height: '100vh',
        zIndex: 1,
      }}>
      <div className="tp-video-3-wrap p-relative" style={{ height: '100%' }}>
        <iframe
          className="play-video"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}
