import React from 'react';
import './styles.scss';

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string; // Optional error message
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  error,
}) => (
  <div className="input-container">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      autoComplete={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={error ? 'input-error' : ''}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
);

export default InputField;
