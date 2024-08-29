import React from 'react';

const InputWithLabel = ({ 
  label, 
  type = 'text', 
  className, 
  labelClassName, 
  id, 
  placeholder, 
  value, 
  onChange, 
  ...props 
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default InputWithLabel;
