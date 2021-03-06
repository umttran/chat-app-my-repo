import React from "react";

import "./Input.css";

function Input({ type, name, onChange }) {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
    />
  )
}

export default Input;