export const togglePlay = (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (videoRef.current) {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
};

export const changeQuestion = (
  direction: "next" | "prev",
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  questionItemsLength: number
) => {
  if (direction === "next") {
    if (currentIndex < questionItemsLength - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }
};
