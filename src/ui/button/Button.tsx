import React from "react";
import s from "./styles.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button className={`${s.button} ${className || ""}`} {...rest}>
      {children}
    </button>
  );
}