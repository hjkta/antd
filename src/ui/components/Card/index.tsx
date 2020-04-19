import React from "react";
import classNames from "classnames";
import { Card as DefaultCard } from "antd";
import { CardProps as DefaultCardProps } from "antd/lib/card";
import styles from "./Card.module.less";

type CardProps = DefaultCardProps & {
  noPadding?: boolean;
};
const Card: React.FC<CardProps> = ({ children, noPadding, ...props }) => {
  let className = classNames({
    [styles.card]: true,
    [styles["card_no-padding"]]: noPadding,
  });

  return (
    <DefaultCard className={className} {...props}>
      {children}
    </DefaultCard>
  );
};

export default Card;
