import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

type Gap = "0" | "4" | "8" | "16" | "24" | "32";

type FlexProps = {
  children: ReactNode;
  direction?: "row" | "column";
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: "nowrap" | "wrap";
  gap?: Gap;
  className?: string;
};

export const Flex = ({
  children,
  direction = "row",
  justify = "start",
  align = "stretch",
  wrap = "nowrap",
  gap = "0",
  className,
}: FlexProps) => {
  return (
    <div
      className={classNames(
        styles.flex,
        styles[`dir-${direction}`],
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        styles[`wrap-${wrap}`],
        styles[`gap-${gap}`],
        className
      )}
    >
      {children}
    </div>
  );
};
