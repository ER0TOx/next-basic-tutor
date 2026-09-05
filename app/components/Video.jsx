import React from "react";

function Video({src}) {
  return (
    <div className="video-group">
      <video autoPlay muted loop playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
