import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='"button text-right my-4 py-2 bg-red-500 px-3 text-white rounded-sm'>
      {children}
    </button>
  );
};

export default Button;
