import React, { CSSProperties } from "react";
import BaseTemplate from "../../ui/templates/BaseTemplate";
import { Layout, Row, Col, Statistic, Card, PageHeader, Button, Space } from "antd";
import { LikeOutlined, MailOutlined, ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import styles from "../../App.module.scss";

const { Content } = Layout;
const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "profile",
    breadcrumbName: "Профиль",
  },
];

const gridStyle: CSSProperties = {
  width: "25%",
};

interface IProfileProps {}
const Profile: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        className={styles["ant-page-header"]}
        breadcrumb={{ routes }}
        ghost={false}
        // onBack={() => window.history.back()}
        title="Профиль сотрудника"
        subTitle="Ливнул Остюдов"
        extra={[
          <Button icon={<MailOutlined />} key="1">
            Отправить
          </Button>,
        ]}
      ></PageHeader>
      <Row style={{ marginBottom: 10 }} gutter={10}>
        <Col span={8}>
          <Card>
            <Row gutter={24}>
              <Col span={12}>
                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Unmerged" value={93} suffix="/ 100" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Row gutter={24}>
              <Col span={12}>
                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Unmerged" value={93} suffix="/ 100" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Row gutter={24}>
              <Col span={12}>
                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Unmerged" value={93} suffix="/ 100" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Статистика">
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card.Grid>
          </Card>
        </Col>
      </Row>
    </BaseTemplate>
  );
};

export default Profile;
