import React, { createContext, useState, useContext } from "react";

interface AnswerContextType {
  isAnswered: boolean;
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnswerContext = createContext<AnswerContextType | undefined>(undefined);

export const AnswerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  return (
    <AnswerContext.Provider value={{ isAnswered, setIsAnswered }}>
      {children}
    </AnswerContext.Provider>
  );
};

export const useAnswer = () => {
  const context = useContext(AnswerContext);
  if (context === undefined) {
    throw new Error("useScore must be used within a AnswerContext");
  }
  return context;
};
