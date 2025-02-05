import React, { useEffect, useState } from "react";
import { Question } from "../../types/QuestionTypes";
import { showSubtitle } from "../../utils/TranscriptHelpers";
import SubtitleButton from "./SubtitleButton";
import Button from "../ui/Button";
import HeaderWithLevel from "./HeaderWithLevel";
import VariantsList from "./VariantsList";
import Timer from "./Timer";
import Answer from "./Answer";
import { useTimer } from "../../hooks/useTimer";

type TranscriptProps = {
  data: Question;
};

const Transcript = ({ data }: TranscriptProps) => {
  const [title, setTitle] = useState<string>("");
  const { timer, showButtons, setShowButtons, setTimer, stopTimer, startTimer } = useTimer({
    initialTime: 10,
    title,
    onTimeEnd: () => setShowButtons(false),
  });

  return (
    <section className="shadow-lg w-[100%] mt-10 rounded-md py-5 text-left px-10">
      <HeaderWithLevel name={data.name} level={data.level} />
      <Button>Adding Favorites</Button>
      <div className="absolute bottom-[14rem] px-20 left-0 flex gap-4 justify-between w-[100%] ">
        {title === "open" && (
          <>
            <Answer answer={data.answer} />
            <Timer time={timer} />
          </>
        )}

        {showButtons ? (
          <>
            <SubtitleButton
              onToggle={(newTitle) => {
                showSubtitle(setTitle, setShowButtons, newTitle);
                startTimer();
              }}
            />
          </>
        ) : (
          <div className="flex gap-10 ml-auto mr-auto w-full">
            <Timer time={timer} />
            <VariantsList
              variants={data.variants}
              data={data}
              setTimer={setTimer}
              timer={timer}
              stopTimer={stopTimer}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Transcript;
