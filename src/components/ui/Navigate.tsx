import React from "react";
import { changeQuestion } from "../../utils/videoHelpers";
import { MdNavigateNext } from "react-icons/md";

type NavigateProps = {
  setIsVideoEnded: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  questionItems: number;
};

const Navigate: React.FC<NavigateProps>  =  ({
  setIsVideoEnded,
  currentIndex,
  setCurrentIndex,
  questionItems,
})  => {
  return (
    <MdNavigateNext
      size={50}
      color="#fff"
      className="navigate hidden absolute top-[50%] right-[16.5rem] bg-slate-900 rounded-md z-10"
      cursor={"pointer"}
      onClick={() => {
        setIsVideoEnded(false);
        changeQuestion("next", currentIndex, setCurrentIndex, questionItems);
      }}
    />
  );
};

export default Navigate;
