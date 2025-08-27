import React from "react";
import classNames from "classnames";
import s from "./styles.module.css";

type Style = "regular" | "rough";

type Props = {
  fontStyle?: Style;
  className?: string;
  children: React.ReactNode;
};

export const Paragraph = ({
  fontStyle = "regular",
  className,
  children,
  ...rest
}: Props) => {
  return (
    <p className={classNames(s.paragraph, s[fontStyle], className)} {...rest}>
      {children}
    </p>
  );
}


export const HighlightParagraph = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <Paragraph fontStyle="rough" className={classNames(s.highlight, className)}>
            {children}
        </Paragraph>
    )
}