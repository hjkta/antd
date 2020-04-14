import React from "react";
import { Card as AntCard } from "antd";
import styles from "./Card.module.less";

type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children, ...props }: CardProps) => {
  return (
    <AntCard className={styles.card} {...props}>
      {children}
    </AntCard>
  );
};

export default Card;
