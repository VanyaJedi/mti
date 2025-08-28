import * as React from "react";
import classNames from "classnames";
import s from "./styles.module.css";

type IconWrapperProps = {
  children: React.ReactNode;
  className?: string;
  style?: 'light' | 'dark'
};

export const IconWrapper: React.FC<IconWrapperProps> = ({ children, className, style="light" }) => {
  return <div className={classNames(s.iconWrapper, className, s[style])}>{children}</div>;
};