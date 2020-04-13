import React from "react";
import { Menu, Layout } from "antd";
import { Link  } from "react-router-dom";

const { Header: AntHeader } = Layout;

interface IHeaderProps {}
const Header: React.FC<IHeaderProps> = () => {
  return (
    <AntHeader>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/profile">Профиль</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/report">Отчет</Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
