import { useEffect, useState } from "react";
import { VariantsListProps } from "../../types/QuestionTypes";
import { questionItems } from "../items/Items";
import { handleTimerExpire, checkAnswer } from "../../utils/checkHelpers";
import { useScore } from "../../context/ScoreContext";
import { useAnswer } from "../../context/AnswerContext";

const VariantsList = ({
  variants,
  data,
  timer,
  stopTimer,
}: VariantsListProps) => {
  const { isAnswered, setIsAnswered } = useAnswer();
  const count = Math.floor(100 / questionItems.length);
  const { points, setPoints } = useScore();

  useEffect(() => {
    if (timer === 0) {
      handleTimerExpire({
        isAnswered,
        setIsAnswered,
        setPoints,
        count,
        stopTimer,
      });
    }
  }, [timer]);

  return (
    <div className="flex gap-10 ml-auto mr-auto w-full">
      {variants.map((dt, index) => {
        const isCorrect = dt === data.variants[data.correctAnswer];

        return (
          <button
            key={index}
            type="button"
            className={`py-3 px-3 rounded-md w-[50%] transition-all duration-300 
              ${
                timer === 0
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : isAnswered
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-white"
              }`}
            onClick={() =>
              checkAnswer({
                isCorrect,
                isAnswered,
                setIsAnswered,
                setPoints,
                count,
                stopTimer,
              })
            }
            disabled={isAnswered}
          >
            {dt}
          </button>
        );
      })}
      <span className="absolute text-red-500 bg-white px-2 py-2 rounded-md text-xl left-10 top-[-20rem]">
        {points}
      </span>
    </div>
  );
};

export default VariantsList;
