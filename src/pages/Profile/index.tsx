import React from "react";
import Header from "../../components/Header";
import { Layout, Menu, Breadcrumb, Row, Col, Statistic, Card } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined, LikeOutlined } from "@ant-design/icons";
import styles from "../../App.module.scss";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

interface IProfileProps {}
const Profile: React.FC<IProfileProps> = () => {
  return (
    <Layout className={styles.mainLayout}>
      <Header />
      <Layout>
        <Sider width={200}>
          <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} className={styles.sideMenu}>
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
        <Layout className={styles.innerLayout}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={styles.content}>
            <Card>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                  <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Col>
              </Row>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Profile;
