import React from "react";
import classNames from "classnames";
import BaseTemplate from "../../ui/templates/BaseTemplate";
import { Layout, Breadcrumb, Row, Col, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import styles from "../../App.module.scss";

const { Content } = Layout;

interface IProfileProps {}
const Dashboard: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
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
    </BaseTemplate>
  );
};

export default Dashboard;
