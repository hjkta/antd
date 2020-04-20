import React from "react";
import NotificationCenter from "../NotificationCenter";
import { Layout, Avatar, Space, Dropdown, Badge } from "antd";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "./Header.module.less";

const { Header: AntHeader } = Layout;

interface IHeaderProps {
  children?: React.ReactNode;
}
const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <AntHeader className={styles.header}>
      {children}
      <div className={styles.userWrapper}>
        <Space size="large">
          <a href="#">
            <SettingOutlined />
          </a>

          <Dropdown overlay={<NotificationCenter />} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Badge count={4} dot>
                <BellOutlined />
              </Badge>
            </a>
          </Dropdown>

          <Space>
            <Avatar size="small" src="http://themepixels.me/dashforge/1.1/assets/img/img1.png" />
            <>Злобина О.</>
          </Space>
        </Space>
      </div>
    </AntHeader>
  );
};

export default Header;
