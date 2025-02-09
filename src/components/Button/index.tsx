import React from "react";
import "./styles.scss";

interface ButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  // disabled: boolean;
  onClick: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}
export default Button;
