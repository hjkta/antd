import React from "react";
import Header from "../../components/Header";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import styles from "../../../App.module.scss";

const { SubMenu } = Menu;
const { Sider } = Layout;

interface IBaseTemplateProps {
  children: React.ReactNode;
}
const BaseTemplate: React.FC<IBaseTemplateProps> = ({ children }) => {
  return (
    <Layout className={styles.mainLayout}>
      <Sider width={200}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          className={styles.sideMenu}
        >
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
        <Layout className={styles.innerLayout}>{children}</Layout>
      </Layout>
    </Layout>
  );
};

export default BaseTemplate;
