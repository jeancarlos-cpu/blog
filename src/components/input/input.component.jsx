import React from "react";
import "./input.syles.scss";

export default function Input({ handleChange, ...otherProps }) {
  return <input className="input" {...otherProps} onChange={handleChange} />;
}
