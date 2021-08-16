import React from "react";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export type Props = InputProps & {
  label: string;
  identifier: string;
  type?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
};
