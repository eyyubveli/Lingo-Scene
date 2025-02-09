type TimerProps = {
  time: number;
};

const Timer = ({ time }: TimerProps) => {
  return (
    <div className="fixed w-[3rem] right-[17rem] bg-white text-black py-2 rounded-md top-[2rem] text-2xl px-4 mr-2 text-center">
      {time}
    </div>
  );
};

export default Timer;
