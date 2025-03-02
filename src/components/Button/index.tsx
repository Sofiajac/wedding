import React from "react";
import "./styles.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
  wide?: boolean;
}

function Button({ title, wide, onClick }: ButtonProps) {
  return (
    <button
      className={wide ? "wide" : ""}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
export default Button;
