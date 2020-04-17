import React from "react";
import { Layout, Avatar, Space, Popover, Badge } from "antd";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "./Header.module.less";

const { Header: AntHeader } = Layout;

interface IHeaderProps {}
const Header: React.FC<IHeaderProps> = () => {
  return (
    <AntHeader className={styles.header}>
      <div className={styles.userWrapper}>
        <Space size="large">
          <a href="#">
            <SettingOutlined />
          </a>

          <a href="#">
            <Popover placement="bottom" title={"title"} content={"content"} trigger="click">
              <Badge count={4} dot>
                <BellOutlined />
              </Badge>
            </Popover>
          </a>

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
