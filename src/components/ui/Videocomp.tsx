import React from "react";
import { VideoCompProps } from "../../types/QuestionTypes";

const Videocomp: React.FC<VideoCompProps> = ({
  questionItems,
  togglePlay,
  setIsVideoEnded,
  videoRef
}) => {
  return (
    <div className="text-center flex justify-center mt-5 aspect-16/9 flex-col items-center max-w-[50rem] mx-auto relative">
      <video
        ref={videoRef}
        width="800"
        onClick={() => togglePlay(videoRef)}
        className="rounded-md"
        onEnded={() => setIsVideoEnded(true)}
      >
        <source src={questionItems} type="video/mp4" />
      </video>
    </div>
  );
};

export default Videocomp;
