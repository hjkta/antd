import React from "react";
import classNames from "classnames";
import { Col as DefaultCol } from "antd";
import { ColProps as DefaultColProps } from "antd/lib/col";
import styles from "./Col.module.less";

type ColProps = DefaultColProps & {
  className?: string;
  chart?: boolean;
};
const Col: React.FC<ColProps> = ({
  children,
  chart = false,
  className,
  ...props
}) => {
  let cn = classNames(className, {
    [styles["chart"]]: chart,
  });

  return (
    <DefaultCol className={cn} {...props}>
      {children}
    </DefaultCol>
  );
};

export default Col;
