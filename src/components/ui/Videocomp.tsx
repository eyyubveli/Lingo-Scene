import React, { useRef } from "react";

interface VideoCompProps {
  questionItems: string;
  currentIndex: number;
  togglePlay: (videoRef: React.RefObject<HTMLVideoElement>) => void;
  setIsVideoEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Videocomp: React.FC<VideoCompProps> = ({
  questionItems,
  currentIndex,
  togglePlay,
  setIsVideoEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
