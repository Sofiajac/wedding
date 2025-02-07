import React from "react";
import "./styles.scss";

interface ButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  // disabled: boolean;
}

function Button({ title }: ButtonProps) {
  return <button>{title}</button>;
}
export default Button;
