import React from 'react';
import './styles.scss';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className="radio-container">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="custom-radio"></span>
      <span className="radio-label">{label}</span>
    </label>
  );
};

export default RadioButton;
