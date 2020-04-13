import React from "react";
import { Card as AntCard } from "antd";
import styles from "./CardInfo.module.less";

console.log(styles);

type CardProps = {
  children?: React.ReactNode;
};

const CardInfo = ({ children, ...props }: CardProps) => {
  return (
    <AntCard className={styles.card} {...props}>
      {children}
    </AntCard>
  );
};

export default CardInfo;
