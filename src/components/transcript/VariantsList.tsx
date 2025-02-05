import React, { useEffect, useState } from "react";
import { Question } from "../../types/QuestionTypes";
import { questionItems } from "../items/Items";

type VariantsListProps = {
  variants: string[];
  data: Question;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
  stopTimer: () => void;
};

const VariantsList = ({
  variants,
  data,
  setTimer,
  timer,
  stopTimer,
}: VariantsListProps) => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const count = Math.floor(100 / questionItems.length);
  const [point, setPoint] = useState<number>(0);

  useEffect(() => {
    if (timer === 0 && !isAnswered) {
      setIsAnswered(true);
      setPoint((prev) => prev - count);
      stopTimer();
    }
  }, [timer]);

  const checkAnswer = (isCorrect: boolean) => {
    if (isAnswered) {
      return;
    }

    setIsAnswered(true);
    stopTimer();

    if (isCorrect) {
      setPoint((prev) => prev + count);
    } else {
      setPoint((prev) => prev - count);
    }
  };

  return (
    <div className="flex gap-10 ml-auto mr-auto w-full">
      {variants.map((dt, index) => {
        const isCorrect = dt === data.variants[data.correctAnswer];

        return (
          <>
            <button
              key={index}
              type="button"
              className={`py-3 px-3 rounded-md w-[50%] transition-all duration-300 
              ${timer === 0
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : isAnswered
                    ? isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-white"
                }`}
              onClick={() => checkAnswer(isCorrect)}
              disabled={isAnswered}
            >
              {dt}
            </button>
          </>
        );
      })}
      <span className="absolute text-red-500  bg-white px-2 py-2 rounded-md text-xl left-10 top-[-20rem]">
        {point}
      </span>
      ;
    </div>
  );
};

export default VariantsList;
