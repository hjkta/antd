import React from "react";
import classNames from "classnames";
import { Row as DefaultRow } from "antd";
import { RowProps as DefaultRowProps } from "antd/lib/row";
import styles from "./Row.module.less";

type RowProps = DefaultRowProps & {
  className?: string;
  chart?: boolean;
};
const Row: React.FC<RowProps> = ({
  children,
  chart = false,
  className,
  ...props
}) => {
  let cn = classNames(className, {
    [styles["chart"]]: chart,
  });

  return (
    <DefaultRow className={cn} {...props}>
      {children}
    </DefaultRow>
  );
};

export default Row;
