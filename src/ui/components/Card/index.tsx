import React from "react";
import { Card as AntCard } from "antd";

type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children, ...props }: CardProps) => {
  return <AntCard {...props}>{children}</AntCard>;
};

export default Card;
