import React from 'react';
import vid12 from "../assets/video-2.mp4"

const BackgroundVideo = ({ videoSource, children, blur }) => {
  return (
    <>
      <div className='container'>
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video-id"
          className='video' >
          {/* TODO make it accept multiple media types */}
          <source src={vid12} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
      </div>
      <span id="video-bottom"></span>
    </>
  )
}

export default BackgroundVideo