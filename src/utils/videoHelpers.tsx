import { useAnswer } from "../context/AnswerContext";

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
    setCurrentIndex((prevIndex) =>
      prevIndex < questionItemsLength - 1 ? prevIndex + 1 : 0
    );
  } else if (direction === "prev") {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : questionItemsLength - 1
    );
  }
};
