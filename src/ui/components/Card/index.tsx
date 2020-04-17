import React from "react";
import { Card as AntCard } from "antd";
import { CardProps as DefaultCardProps } from "antd/lib/card";
import styles from "./Card.module.less";

const Card: React.FC<DefaultCardProps> = ({ children, ...props }) => {
  return (
    <AntCard className={styles.card} {...props}>
      {children}
    </AntCard>
  );
};

export default Card;
