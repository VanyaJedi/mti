import * as React from "react";
import classNames from "classnames";
import s from "./styles.module.css";

type IconWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const IconWrapper: React.FC<IconWrapperProps> = ({ children, className }) => {
  return <div className={classNames(s.iconWrapper, className)}>{children}</div>;
};