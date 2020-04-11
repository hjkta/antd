import React from "react";
import { Card } from "antd";

type CardProps = {
  children?: React.ReactNode;
};

const CCard = ({ children, ...props }: CardProps) => {
  return <Card {...props}>{children}</Card>;
};

export default CCard;
