import React from 'react';
import './styles.scss';

interface ButtonProps {
  title: string;
  onClick?: ((e: React.FormEvent<HTMLButtonElement>) => void) | (() => void);
  type?: 'submit' | 'reset' | 'button';
  wide?: boolean;
}

function Button({ title, onClick, type = 'button', wide }: ButtonProps) {
  return (
    <button type={type} className={wide ? 'wide' : ''} onClick={onClick}>
      {title}
    </button>
  );
}
export default Button;
