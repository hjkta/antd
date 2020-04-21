import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ProfileOutlined,
  HomeOutlined,
  BarChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./BaseTemplate.module.less";
import { Header } from "ui/components";
import logo from "assets/img/hcfb-logo.svg";
import logoSm from "assets/img/hcfb-logo-small.svg";

const { Sider } = Layout;

interface IBaseTemplateProps {
  children: React.ReactNode;
}
const BaseTemplate: React.FC<IBaseTemplateProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className={styles["main-layout"]}>
      <Sider width={250} trigger={null} className={styles.slider} collapsible collapsed={collapsed}>
        <img src={collapsed ? logoSm : logo} className={styles.logo} />
        <Menu mode="inline" className={styles.menu} theme="dark">
          <Menu.Item key="a1">
            <Link to="/">
              <HomeOutlined />
              <span>Главная</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="a2">
            <Link to="/profile">
              <ProfileOutlined />
              <span>Профиль</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="a3">
            <Link to="/report">
              <PieChartOutlined />
              <span>Отчет</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="a4">
            <Link to="/personal_sales">
              <BarChartOutlined />
              <span>Личный кабинет</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="a5">
            <Link to="/personal_sales2">
              <BarChartOutlined />
              <span>Личный кабинет 2</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="a6">
            <Link to="/personal_sales3">
              <BarChartOutlined />
              <span>Личный кабинет 3</span>
            </Link>
          </Menu.Item>
          {/*<SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                subnav 1
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <LaptopOutlined />
                subnav 2
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <NotificationOutlined />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>*/}
        </Menu>
      </Sider>
      <Layout>
        <Header>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => {
              setCollapsed(!collapsed);
            },
          })}
        </Header>
        <Layout className={styles["inner-layout"]}>{children}</Layout>
      </Layout>
    </Layout>
  );
};

export default BaseTemplate;
