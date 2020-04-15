import React, { CSSProperties, useState } from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import ProfileTable from "./ProfileTable";
import { PageHeader } from "ui/components";
import {
  Row,
  Col,
  Card,
  Button,
  Calendar,
  Statistic,
  Avatar,
  Typography,
  Tag,
  Timeline,
} from "antd";
import {
  MailOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  EnvironmentOutlined,
  ClusterOutlined,
  MobileOutlined,
} from "@ant-design/icons";

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

interface IProfileProps {}
const Profile: React.FC<IProfileProps> = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <BaseTemplate>
      <PageHeader
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
        {/*<Row>
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
          </Row>*/}
      </PageHeader>

      <Row gutter={[24, 18]}>
        <Col span={6}>
          <Card bordered={false}>
            <Row gutter={[24, 18]}>
              <Col span={24} style={{ textAlign: "center" }}>
                <Avatar
                  size={108}
                  src={
                    "http://themepixels.me/dashforge/1.1/assets/img/img1.png"
                  }
                />
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <Typography.Title level={4} style={{ marginBottom: "0" }}>
                  Плахов Павел
                </Typography.Title>
                <Typography.Text type="secondary">
                  Руководитель отдела
                </Typography.Text>
              </Col>
              <Col span={24}>
                <Tag color="green">хороший</Tag>
                <Tag color="red">плохой</Tag>
              </Col>
            </Row>

            <Row gutter={[24, 18]}>
              <Col span={24}>
                <Typography.Paragraph>
                  <ClusterOutlined /> &nbsp; Отдел разработки и эксплуатации
                  инофрмационно технических систем
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <EnvironmentOutlined /> &nbsp; Обнинск
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <MobileOutlined /> &nbsp; +7 (906) 644-5859
                </Typography.Paragraph>
              </Col>
            </Row>

            <Row gutter={[24, 18]}>
              <Col span={24}>
                <Timeline>
                  <Timeline.Item>Руководитель отдела 2015-09-01</Timeline.Item>
                  <Timeline.Item>Руководитель группы 2015-09-01</Timeline.Item>
                  <Timeline.Item>Старший разработчик 2015-09-01</Timeline.Item>
                </Timeline>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={18}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[24, 8]}>
                <Col span={12}>
                  <Card bordered={false} title="Статистика 1">
                    <ProfileTable />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card bordered={false} title="Статистика 2">
                    <ProfileTable />
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
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
        </Col>
      </Row>
    </BaseTemplate>
  );
};

export default Profile;
