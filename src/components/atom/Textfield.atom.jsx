import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./Textfield.atom.css";

const Textfield = ({
  label,
  name,
  id,
  onBlur,
  onChange,
  value,
  placeholder,
  errorMessage,
  touched,
  isDisabled,
}) => {
  return (
    <Box
      sx={{
       display:"flex",
       flexDirection:"column",
       margin:"6px 0"
      }}
      noValidate
      autoComplete="off"
    >
        <div className="form">
          {/* <label className="label" htmlFor="robot">
          {label}
        </label> */}
          <TextField
          error={touched && errorMessage}
            label={label}
            type="text"
            fullWidth
            name={name}
            id={id}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={isDisabled}
          />
        </div>
        {touched && errorMessage && <div className="error">{errorMessage}</div>}
    </Box>
  );
};

export default Textfield;

