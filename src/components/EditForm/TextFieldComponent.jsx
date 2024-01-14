import React from 'react';
import { shape, string, func } from 'prop-types';
import { TextField } from '@mui/material';

import '../../styles/main.css';

/**
 * TextFieldComponent is a reusable component that renders a TextField with a label.
 * @param {Object} field - The field object containing the label.
 * @param {string} value - The value of the TextField.
 * @param {function} onChange - The callback function to handle onChange event.
 * @returns {JSX.Element} - The rendered TextField component.
 */
const TextFieldComponent = ({ field, value, onChange }) => {
  // Extracting the label from the field prop
  const { label } = field;

  return (
    <TextField
      id={label.toLowerCase().replace(/\s/g, '-')}
      label={label}
      variant="filled"
      size="small"
      fullWidth={true}
      margin='normal'
      InputProps={{ disableUnderline: true }}
      className='input-field'
      value={value}
      name={label}
      onChange={onChange}
    />
  );
};
TextFieldComponent.propTypes = {
  field: shape({
    label: string.isRequired,
  }).isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
}

export default TextFieldComponent;