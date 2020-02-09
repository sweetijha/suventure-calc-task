import React, { useState } from "react";

export default function Input(props) {
  const { value, onChange } = props;
  return (
    <input
      className="input"
      disabled
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
