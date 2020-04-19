import React from "react";
import classNames from "classnames";
import { Card as DefaultCard } from "antd";
import { CardProps as DefaultCardProps } from "antd/lib/card";
import styles from "./Card.module.less";

type CardProps = DefaultCardProps & {
  noPadding?: boolean;
  className?: string;
};
const Card: React.FC<CardProps> = ({
  children,
  noPadding,
  className,
  ...props
}) => {
  let cn = classNames(className, {
    [styles.card]: true,
    [styles["card_no-padding"]]: noPadding,
  });

  return (
    <DefaultCard className={cn} {...props}>
      {children}
    </DefaultCard>
  );
};

export default Card;
