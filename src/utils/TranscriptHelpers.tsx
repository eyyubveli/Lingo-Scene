export const showSubtitle = (
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setShowButtons: React.Dispatch<React.SetStateAction<boolean>>,
  title: "open" | "hide"
) => {
  setTitle(title);
  setShowButtons(false);
};
