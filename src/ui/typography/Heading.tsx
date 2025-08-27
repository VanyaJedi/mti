import React, { JSX } from "react";
import classNames from "classnames";
import s from "./styles.module.css";

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Style = "regular" | "rough";

type Props = {
  level?: Level;
  fontStyle?: Style;
  className?: string;
  children: React.ReactNode;
};

export const Heading = ({
  level = 1,
  fontStyle = "regular",
  className,
  children,
  ...rest
}: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={classNames(s[`h${level}`], s[fontStyle], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}