import { HandleProps, CombinedProps } from "../types/QuestionTypes";

export const handleTimerExpire = ({
  isAnswered,
  setIsAnswered,
  setPoints,
  count,
  stopTimer,
}: HandleProps) => {
  if (!isAnswered) {
    setIsAnswered(true);
    setPoints((prev) => prev - count);
    stopTimer();
  }
};

export const checkAnswer = ({
  isCorrect,
  isAnswered,
  setIsAnswered,
  setPoints,
  count,
  stopTimer,
}: CombinedProps) => {
  if (isAnswered) return;

  setIsAnswered(true);
  stopTimer();

  setPoints((prev) => (isCorrect ? prev + count : prev - count));
};
