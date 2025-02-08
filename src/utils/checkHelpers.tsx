import { HandleProps, CombinedProps } from "../types/QuestionTypes";

export const handleTimerExpire = ({
  isAnswered,
  setIsAnswered,
  setPoint,
  count,
  stopTimer,
}: HandleProps) => {
  if (!isAnswered) {
    setIsAnswered(true);
    setPoint((prev) => prev - count);
    stopTimer();
  }
};

export const checkAnswer = ({
  isCorrect,
  isAnswered,
  setIsAnswered,
  setPoint,
  count,
  stopTimer,
}: CombinedProps) => {
  if (isAnswered) return;

  setIsAnswered(true);
  stopTimer();

  setPoint((prev) => (isCorrect ? prev + count : prev - count));
};
