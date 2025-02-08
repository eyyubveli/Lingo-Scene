export interface Question {
  name: string;
  src: string;
  level: string;
  answer: string;
  variants: string[];
  correctAnswer: number;
}
export interface VideoCompProps {
  questionItems: string;
  currentIndex: number;
  togglePlay: (videoRef: React.RefObject<HTMLVideoElement>) => void;
  setIsVideoEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

export type HandleProps = {
  isAnswered: boolean;
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean>>;
  setPoint: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  stopTimer: () => void;
};

type AnswerProps = {
  isCorrect: boolean;
};

export type CombinedProps = HandleProps & AnswerProps;

export type VariantsListProps = {
  variants: string[];
  data: Question;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
  stopTimer: () => void;
};
