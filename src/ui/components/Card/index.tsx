import React from "react";
import classNames from "classnames";
import { Card as DefaultCard } from "antd";
import { CardProps as DefaultCardProps } from "antd/lib/card";
import styles from "./Card.module.less";

type CardProps = DefaultCardProps & {
  padding?: boolean;
  className?: string;
  shadow?: boolean;
};
const Card: React.FC<CardProps> = ({
  children,
  padding = true,
  shadow,
  className,
  ...props
}) => {
  let cn = classNames(className, {
    [styles.card]: true,
    [styles["card_no-padding"]]: !padding,
    [styles["card_shadow"]]: shadow,
  });

  return (
    <DefaultCard className={cn} {...props}>
      {children}
    </DefaultCard>
  );
};

export default Card;
