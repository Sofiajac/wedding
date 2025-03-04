import React from 'react';
import './styles.scss';

interface SelectProps {
  label: string;
  name: string;
  options: number[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  width?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  width,
}) => (
  <div className="select-container" style={{ width: width }}>
    <label htmlFor={name}>{label}</label>
    <div className="inner-container">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="select-arrow"></div>
    </div>
  </div>
);

export default Select;
