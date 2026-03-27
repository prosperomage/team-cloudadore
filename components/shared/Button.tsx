import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div
      className=" px-6 py-2.5 text-white font-medium rounded-lg hover:opacity-90 transition-opacity  cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
