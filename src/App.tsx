import React from "react";
import classNames from "classnames";
import { Layout, Menu, Breadcrumb, Row, Col, Card } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import styles from "./App.module.scss";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout className={styles.mainLayout}>
      <Header>
        <div className={styles.logo} />
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
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
        <Layout className={styles.innerLayout}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={styles.content}>
            <Row gutter={10}>
              <Col span={6}>
                <Card>
                  <h6 className={styles.card__h6}>Conversion rate</h6>
                  <div className={styles.card__container}>
                    <h3 className={styles.card__h3}>0.81%</h3>
                    <p className={styles.card__p}>
                      <span
                        className={classNames(
                          styles.card__span,
                          styles.card__span_success
                        )}
                      >
                        1.2%
                        <ArrowUpOutlined />
                      </span>
                      <span className={styles.span}> than last week</span>
                    </p>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h6 className={styles.card__h6}>Conversion rate</h6>
                  <div className={styles.card__container}>
                    <h3 className={styles.card__h3}>3,137</h3>
                    <p className={styles.card__p}>
                      <span
                        className={classNames(
                          styles.card__span,
                          styles.card__span_danger
                        )}
                      >
                        0.7%
                        <ArrowDownOutlined />
                      </span>
                      <span className={styles.span}> than last week</span>
                    </p>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h6 className={styles.card__h6}>Conversion rate</h6>
                  <div className={styles.card__container}>
                    <h3 className={styles.card__h3}>$306.20</h3>
                    <p className={styles.card__p}>
                      <span
                        className={classNames(
                          styles.card__span,
                          styles.card__span_danger
                        )}
                      >
                        0.3%
                        <ArrowDownOutlined />
                      </span>
                      <span className={styles.span}> than last week</span>
                    </p>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h6 className={styles.card__h6}>Conversion rate</h6>
                  <div className={styles.card__container}>
                    <h3 className={styles.card__h3}>1,650</h3>
                    <p className={styles.card__p}>
                      <span
                        className={classNames(
                          styles.card__span,
                          styles.card__span_success
                        )}
                      >
                        2.1%
                        <ArrowUpOutlined />
                      </span>
                      <span className={styles.span}> than last week</span>
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={16}></Col>
              <Col span={8}></Col>
            </Row>
            <Row>
              <Col span={24}></Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
