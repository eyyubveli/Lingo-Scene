import { MdOutlineSubtitles, MdOutlineSubtitlesOff } from "react-icons/md";

interface SubtitleButtonProps {
  onToggle: (newTitle: "open" | "hide") => void;
}

const SubtitleButton = ({ onToggle }: SubtitleButtonProps) => {
  return (
    <>
      <MdOutlineSubtitles
        size={40}
        color="#27445D"
        cursor={"pointer"}
        className="w-[50%] h-14 bg-white rounded-sm"
        onClick={() => onToggle("open")}
      />
      <MdOutlineSubtitlesOff
        size={40}
        color="#27445D"
        cursor={"pointer"}
        onClick={() => onToggle("hide")}
        className="w-[50%] h-14 bg-white rounded-sm"
      />
    </>
  );
};

export default SubtitleButton;
