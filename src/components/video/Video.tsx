import { useEffect, useRef, useState } from "react";
import { questionItems } from "../items/Items";
import { togglePlay } from "../../utils/videoHelpers";
import Transcript from "../transcript/Transcript";
import Videocomp from "../ui/Videocomp";
import Navigate from "../ui/Navigate";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      if (!isVideoEnded) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }
  }, [currentIndex, isVideoEnded]);

  return (
    <div className="text-center flex justify-center mt-5 aspect-16/9  flex-col items-center max-w-[50rem] mx-auto relative">
      <Videocomp
        questionItems={questionItems[currentIndex].src}
        togglePlay={togglePlay}
        setIsVideoEnded={setIsVideoEnded}
        videoRef={videoRef}
      />

      <Navigate
        setIsVideoEnded={setIsVideoEnded}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        questionItems={questionItems.length}
      />

      {isVideoEnded && <Transcript data={questionItems[currentIndex]} />}
    </div>
  );
};

export default Video;
