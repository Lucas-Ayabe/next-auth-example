import React from "react";
import { Props } from "./types";

const Field = ({
  label,
  identifier,
  onChange,
  value,
  name = value,
  type = "text",
  ...props
}: Props) => {
  return (
    <div className="field">
      <label className="label" htmlFor={identifier}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        name={name}
        id={identifier}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        {...props}
      />
    </div>
  );
};

export default Field;
