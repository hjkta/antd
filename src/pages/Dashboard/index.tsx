import React from "react";
import classNames from "classnames";
import BaseTemplate from "ui/templates/BaseTemplate";
import { Card, PageHeader } from "ui/components";
import { Layout, Row, Col, Button } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styles from "../../App.module.scss";

const { Content } = Layout;
const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "dashboard",
    breadcrumbName: "Дашборд",
  },
];

interface IProfileProps {}
const Dashboard: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        breadcrumb={{ routes }}
        ghost={false}
        // onBack={() => window.history.back()}
        title="Дашборд статистика"
        // subTitle="Ливнул Остюдов"
        extra={[
          <Button icon={<MailOutlined />} key="1">
            Отправить
          </Button>,
        ]}
      ></PageHeader>
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
