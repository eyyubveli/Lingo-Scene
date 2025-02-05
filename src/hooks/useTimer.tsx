import React, { useState, useEffect } from "react";

interface UseTimerProps {
  initialTime: number;
  title: string;
  onTimeEnd?: () => void;
}

export const useTimer = ({ initialTime, title, onTimeEnd }: UseTimerProps) => {
  const [timer, setTimer] = useState<number>(initialTime);
  const [showButtons, setShowButtons] = useState<boolean>(true);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (timer > 0 && isRunning) {
      const id = window.setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(id);
            if (onTimeEnd) onTimeEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setIntervalId(id);

      return () => {
        if (id) clearInterval(id);
      };
    }
  }, [title, isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    setTimer(initialTime);
    setIsRunning(false);
  };

  return {
    timer,
    showButtons,
    setShowButtons,
    setTimer,
    stopTimer,
    resetTimer,
    startTimer, 
  };
};
