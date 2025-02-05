type TimerProps = {
  time: number;
};

const Timer = ({ time }: TimerProps) => {
  return (
    <div className="absolute right-0 bg-white text-black py-2 rounded-md top-[-20rem] text-2xl px-4 mr-4">
      {time}
    </div>
  );
};

export default Timer;
