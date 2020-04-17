import React from "react";
import { PageHeader as DefaultPageHeader } from "antd";
import { PageHeaderProps as DefaultPageHeaderProps } from "antd/lib/page-header";
import styles from "./PageHeader.module.less";

const PageHeader: React.FC<DefaultPageHeaderProps> = ({ children, ...props }) => {
  return (
    <DefaultPageHeader className={styles["page-header"]} {...props}>
      {children}
    </DefaultPageHeader>
  );
};

export default PageHeader;
