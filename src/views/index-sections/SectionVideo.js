import React from "react";
import ReactPlayer from "react-player/lazy";

function SectionVideo() {

  return (
    <>
      <div className="videoPlayerWrapper" style={{ backgroundColor: "#72540663", padding: 0 }}>
        <ReactPlayer
          // light="https://lighthouselekki.s3.us-east-2.amazonaws.com/LightHouse+4Min+Final_Small2.mp4"
          style={{ backgroundColor: 'black', padding: '5px' }}
          url="https://lighthouselekki.s3.us-east-2.amazonaws.com/LightHouse+4Min+Final_Small2.mp4"
          controls={true}
          pip={true}
          className="react-player"
          playsinline={true}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </>
  );
}

export default SectionVideo;
