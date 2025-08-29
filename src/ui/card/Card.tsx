import React from "react";
import classNames from "classnames";
import s from "./styles.module.css";

type Props = {
  top: React.ReactNode;
  bottom: React.ReactNode;
  className?: string;
};

export const Card = ({ top, bottom, className }: Props) => {
  return (
    <article className={classNames(s.card, className)}>
      {top}
      {bottom}
    </article>
  );
};