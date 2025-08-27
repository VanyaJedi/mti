import React from "react";
import s from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ children, className }: Props) => {
  return <div className={`${s.section} ${className || ""}`}>{children}</div>;
}