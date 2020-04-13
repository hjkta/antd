import React, { CSSProperties, useState } from "react";
import BaseTemplate from "../../ui/templates/BaseTemplate";
import {
  Row,
  Col,
  Card,
  PageHeader,
  Button,
  Tabs,
  Calendar,
  Statistic,
  Avatar,
  Typography,
  Tag,
  Timeline,
  notification,
} from "antd";
import {
  MailOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  LikeOutlined,
  EnvironmentOutlined,
  ClusterOutlined,
  MobileOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import styles from "../../App.module.scss";

const { TabPane } = Tabs;
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

const tabList = [
  {
    key: "tab1",
    tab: "Показатели",
  },
  {
    key: "tab2",
    tab: "Расписание",
  },
];

const contentList = {
  tab1: (
    <Row gutter={[24, 16]}>
      <Col span={24}>
        <Card>
          <Row>
            <Col span={12}>
              <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
            </Col>
            <Col span={12}>
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Card>
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
  ),
  tab2: <Calendar />,
};

notification.open({
  message: "Notification Title",
  description:
    "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  icon: <SmileOutlined style={{ color: "#108ee9" }} />,
});

interface IProfileProps {}
const Profile: React.FC<IProfileProps> = () => {
  const [activeTab, setActiveTab] = useState("tab1");
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
      >
        <Row>
          <Statistic title="Status" value="Pending" />
          <Statistic
            title="Price"
            prefix="$"
            value={568.08}
            style={{
              margin: "0 32px",
            }}
          />
          <Statistic title="Balance" prefix="$" value={3345.08} />
        </Row>
      </PageHeader>

      <Row gutter={24}>
        <Col span={6}>
          <Card bordered={false}>
            <Row gutter={[24, 18]}>
              <Col span={24} style={{ textAlign: "center" }}>
                <Avatar size={108} src={"http://themepixels.me/dashforge/1.1/assets/img/img1.png"} />
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <Typography.Title level={4} style={{ marginBottom: "0" }}>
                  Плахов Павел
                </Typography.Title>
                <Typography.Text type="secondary">Руководитель отдела</Typography.Text>
              </Col>
              <Col span={24}>
                <Tag color="green">хороший</Tag>
                <Tag color="red">плохой</Tag>
              </Col>
            </Row>

            <Row gutter={[24, 18]}>
              <Col span={24}>
                <Typography.Paragraph>
                  <ClusterOutlined /> &nbsp; Отдел разработки и эксплуатации инофрмационно технических систем
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <EnvironmentOutlined /> &nbsp; Обнинск
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <MobileOutlined /> &nbsp; Обнинск
                </Typography.Paragraph>
              </Col>
            </Row>

            <Row gutter={[24, 18]}>
              <Col span={24}>
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={18}>
          <Card
            bordered={false}
            tabList={tabList}
            activeTabKey={activeTab}
            onTabChange={(key) => {
              setActiveTab(key);
            }}
          >
            {(contentList as any)[activeTab]}
          </Card>
        </Col>
      </Row>
    </BaseTemplate>
  );
};

export default Profile;
