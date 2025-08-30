import React from "react";
import classNames from "classnames";
import s from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ children, className }: Props) => {
  return (
    <div className={classNames(s.section, className)}>
      {children}
    </div>
  );
};
