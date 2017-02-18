import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const EmailTextField = ({value, errorText, onChange}) => {
  const handleOnChange = (event, value) => {
    onChange(value);
  };

  return (
    <TextField
             value={value}
             errorText={errorText}
             floatingLabelText="Email"
             primary
             fullWidth
             onChange={handleOnChange}
             errorStyle={{ float: 'left' }} />
  );
};

EmailTextField.propTypes = {
  value: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailTextField;
