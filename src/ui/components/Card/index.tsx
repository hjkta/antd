import React from "react";
import { Card as DefaultCard } from "antd";
import { CardProps as DefaultCardProps } from "antd/lib/card";
import styles from "./Card.module.less";

type CardProps = DefaultCardProps & {
  noPadding?: boolean;
};
const Card: React.FC<CardProps> = ({ children, noPadding, ...props }) => {
  return (
    <DefaultCard className={noPadding ? styles["card-no-padding"] : styles.card} {...props}>
      {children}
    </DefaultCard>
  );
};

export default Card;
