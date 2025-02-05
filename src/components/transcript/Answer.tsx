type AnswerProps = {
  answer: string;
}

const Answer = ({ answer }: AnswerProps) => {
  return (
    <div className="answer text-3xl text-white absolute z-1 left-[50%] translate-x-[-50%] top-[-6rem] select-none bg-black bg-opacity-30 px-4">
      {answer}
    </div>
  );
};

export default Answer;
