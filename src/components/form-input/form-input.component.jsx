import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelClass = otherProps.value.length ? 'shrink' : '';
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />

      {label ? (
        <label
          htmlFor={otherProps.id}
          className={`${labelClass} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
