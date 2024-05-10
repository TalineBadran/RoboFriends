import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Textfield = ({
  label,
  name,
  id,
  onBlur,
  onChange,
  value,
  placeholder,
  errorMessage,
  touched
}) => {
  return (
    <Box
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
    <div className="input">
      <div className="form">
        <label className="label" htmlFor="robot">
          {label}
        </label>
        <TextField
          type="text"
          name={name}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
      {touched && errorMessage && <div className="error">{errorMessage}</div>}
    </div>
    </Box>
  );
};

export default Textfield;