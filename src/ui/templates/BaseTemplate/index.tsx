import React from "react";
import { Layout, Menu, notification } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ProfileOutlined,
  HomeOutlined,
  BarChartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./BaseTemplate.module.less";
import { Header } from "ui/components";

notification.open({
  message: "Notification Title",
  description:
    "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  icon: <SmileOutlined style={{ color: "#108ee9" }} />,
});

const { SubMenu } = Menu;
const { Sider } = Layout;

interface IBaseTemplateProps {
  children: React.ReactNode;
}
const BaseTemplate: React.FC<IBaseTemplateProps> = ({ children }) => {
  return (
    <Layout className={styles["main-layout"]}>
      <Sider width={200}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="a1">
            <HomeOutlined />
            <Link to="/">Главная</Link>
          </Menu.Item>
          <Menu.Item key="a2">
            <ProfileOutlined />
            <Link to="/profile">Профиль</Link>
          </Menu.Item>
          <Menu.Item key="a3">
            <PieChartOutlined />
            <Link to="/report">Отчет</Link>
          </Menu.Item>
          <Menu.Item key="a4">
            <BarChartOutlined />
            <Link to="/personal_sales">Личный кабинет</Link>
          </Menu.Item>
          <SubMenu
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
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Layout className={styles["inner-layout"]}>{children}</Layout>
      </Layout>
    </Layout>
  );
};

export default BaseTemplate;
