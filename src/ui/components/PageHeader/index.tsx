import React from "react";
import { PageHeader as DefaultPageHeader } from "antd";
import { PageHeaderProps as DefaultPageHeaderProps } from "antd/lib/page-header";
import styles from "./PageHeader.module.less";

const Header: React.FC<DefaultPageHeaderProps> = ({ children, ...props }) => {
  return (
    <DefaultPageHeader className={styles["ant-page-header"]} {...props}>
      {children}
    </DefaultPageHeader>
  );
};

export default Header;
