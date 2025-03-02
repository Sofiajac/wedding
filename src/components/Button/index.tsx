import React from "react";
import "./styles.scss";

interface ButtonProps {
  title: string;
  wide?: boolean;
}

function Button({ title, wide }: ButtonProps) {
  return <button className={wide ? "wide" : ""}>{title}</button>;
}
export default Button;
