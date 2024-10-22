import React from 'react';

const CustomInput = ({ field, form, ...props }) => {
  return (
    <div>
      <input {...field} {...props} />
      {form.touched[field.name] && form.errors[field.name] && (
        <div className="error" style={{ color: 'red' }}>{form.errors[field.name]}</div>
      )}
    </div>
  );
};

export default CustomInput;
