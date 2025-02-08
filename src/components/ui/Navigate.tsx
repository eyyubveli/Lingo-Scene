import React, { useEffect } from "react";
import { changeQuestion } from "../../utils/videoHelpers";
import { MdNavigateNext } from "react-icons/md";
import { NavigateProps } from "../../types/QuestionTypes";
import { useAnswer } from "../../context/AnswerContext";

const Navigate: React.FC<NavigateProps> = ({
  setIsVideoEnded,
  currentIndex,
  setCurrentIndex,
  questionItems,
}) => {
  const { isAnswered, setIsAnswered } = useAnswer();

  useEffect(() => {
    console.log(isAnswered);
  }, [isAnswered]);

  return (
    <MdNavigateNext
      size={50}
      color="#fff"
      className={` navigate absolute top-[50%] right-[-2rem] bg-slate-900 rounded-md z-10 ${
        !isAnswered ? "hidden" : ""
      }`}
      cursor={"pointer"}
      onClick={() => {
        setIsVideoEnded(false);
        changeQuestion("next", currentIndex, setCurrentIndex, questionItems);
        setIsAnswered((prev) => !prev);
      }}
    />
  );
};

export default Navigate;
