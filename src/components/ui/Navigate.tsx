import React from "react";
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
  const isLastQuestion = currentIndex === questionItems - 1;

  return (
    <MdNavigateNext
      size={50}
      color={isLastQuestion ? "#555" : "#fff"}
      className={`navigate fixed w-[3rem] top-[15rem] right-[16.5rem] bg-slate-900 rounded-md z-10 
      ${!isAnswered || isLastQuestion ? "hidden" : ""}`}
      cursor={isLastQuestion ? "not-allowed" : "pointer"}
      onClick={() => {
        if (isLastQuestion) return;
        setIsVideoEnded(false);
        changeQuestion("next", currentIndex, setCurrentIndex, questionItems);
        setIsAnswered(false);
      }}
    />
  );
};

export default Navigate;
