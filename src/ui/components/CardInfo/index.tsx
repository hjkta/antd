import React from "react";
import { Card as AntCard } from "antd";
import styles from "./CardInfo.module.less";

type CardProps = {
  children?: React.ReactNode;
};

const CardInfo = ({ children, ...props }: CardProps) => {
  console.log(children);
  return (
    <AntCard className={styles.card} {...props}>
      {children}
      <div className={styles.card_body}></div>
    </AntCard>
  );
};

export default CardInfo;
