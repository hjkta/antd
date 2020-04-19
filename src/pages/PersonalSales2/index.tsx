import React from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader, Card } from "ui/components";
import {
  Row,
  Col,
  Button,
  Avatar,
  Typography,
  Timeline,
  Statistic,
  Table,
} from "antd";
import {
  MailOutlined,
  EnvironmentOutlined,
  ClusterOutlined,
  MobileOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { data, columns } from "./table_data";
import styles from "./PersonalSales.module.less";

const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "personal_sales2",
    breadcrumbName: "Личный кабинет 2",
  },
];

interface IPersonalSalesProps {}
const PersonalSales2: React.FC<IPersonalSalesProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        breadcrumb={{ routes }}
        ghost={false}
        title="Личный кабинет 2"
      />

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
                  Злобина Оксана Александровна
                </Typography.Title>
                <Typography.Text type="secondary">
                  Ведущий менеджер
                </Typography.Text>
              </Col>
            </Row>

            <Row gutter={[24, 18]}>
              <Col span={24}>
                <Typography.Paragraph>
                  <ClusterOutlined /> &nbsp; Отдел пилотных проектов
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <EnvironmentOutlined /> &nbsp; Обнинск
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <MobileOutlined /> &nbsp; +7 (999) 888-77-66
                </Typography.Paragraph>
              </Col>
            </Row>

            <Row gutter={[24, 18]}>
              <Col span={24}>
                <Timeline mode="left">
                  <Timeline.Item label="2015-09-01" color="gray">
                    Менеджер
                  </Timeline.Item>
                  <Timeline.Item label="2015-09-01">
                    Старший менеджер
                  </Timeline.Item>
                  <Timeline.Item
                    label="2015-09-01"
                    color="green"
                    dot={<ClockCircleOutlined style={{ fontSize: "14px" }} />}
                  >
                    Ведущий менеджер
                  </Timeline.Item>
                </Timeline>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={18}>
          <Row gutter={16}>
            <Col span={12}>
              <Card bordered={false} title="Наличный Кредит" noPadding>
                <Table
                  size="small"
                  showHeader={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false} title="Кредитная карта" noPadding>
                <Table
                  size="small"
                  showHeader={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                />
              </Card>
            </Col>
          </Row>
          <div className={styles.divider} />
          <Row gutter={16}>
            <Col span={12}>
              <Card bordered={false} title="BOX" noPadding>
                <Table
                  size="small"
                  showHeader={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false} title="Дебетовая карта" noPadding>
                <Table
                  size="small"
                  showHeader={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </BaseTemplate>
  );
};

export default PersonalSales2;
