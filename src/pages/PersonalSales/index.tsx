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
import styles from "./PersonalSales.module.less";

const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "personal_sales",
    breadcrumbName: "Личный кабинет",
  },
];

const formatNumber = (val: any) =>
  Number.parseFloat(val).toLocaleString("ru-RU");

const formatPercent = (val: any) =>
  Number.parseFloat(val).toLocaleString("ru-RU") + "%";

const columns = [
  {
    title: "Параметр",
    dataIndex: "name",
  },
  {
    title: "Значение",
    dataIndex: "value",
    render: (text: any) => <a>{text}</a>,
  },
];

const data = [
  {
    key: 1,
    name: "Количество в штуках кредитов",
    value: 15,
  },
  {
    key: 2,
    name: "Сумма проданных кредитов",
    value: formatNumber(2750780),
  },
  {
    key: 3,
    name: "% Выполнения плана",
    value: formatPercent(22.78),
  },
  {
    key: 4,
    name: "Доля FD",
    value: formatPercent(90),
  },
  {
    key: 5,
    name: "% Проникновения страхования в штуках",
    value: formatPercent(76.92),
  },
  {
    key: 6,
    name: "Доля Combo в штуках",
    value: formatPercent(0),
  },
  {
    key: 7,
    name: "Доля Active в штуках",
    value: formatPercent(0),
  },
  {
    key: 8,
    name: "Доля FZ в штуках",
    value: formatPercent(0),
  },
  {
    key: 9,
    name: "% Отказов от услуги страхования в штуках",
    value: formatPercent(69.23),
  },
  {
    key: 10,
    name: "% SMS",
    value: formatPercent(92.31),
  },
  {
    key: 11,
    name: "Звонки",
    value: formatNumber(1826),
    children: [
      {
        key: 12,
        name: "Входящие",
        value: formatNumber(65),
      },
      {
        key: 13,
        name: "Simple Bot",
        value: formatNumber(0),
      },
      {
        key: 14,
        name: "Переводы с КЦ",
        value: formatNumber(30),
      },
      {
        key: 15,
        name: "Телемаркетинг",
        value: formatNumber(1731),
      },
      {
        key: 16,
        name: "Онлайн",
        value: formatNumber(0),
      },
    ],
  },
  {
    key: 17,
    name: "Quick",
    value: formatNumber(26),
    children: [
      {
        key: 18,
        name: "Quick Входящие",
        value: formatNumber(2),
      },
      {
        key: 19,
        name: "Quick Simple Bot",
        value: formatNumber(0),
      },
      {
        key: 20,
        name: "Quick Переводы с КЦ",
        value: formatNumber(2),
      },
      {
        key: 21,
        name: "Quick Телемаркетинг",
        value: formatNumber(22),
      },
      {
        key: 22,
        name: "Quick Онлайн",
        value: formatNumber(0),
      },
    ],
  },
  {
    key: 23,
    name: "Quick Yes",
    value: formatNumber(10),
    children: [
      {
        key: 24,
        name: "Quick Yes Входящие",
        value: formatNumber(1),
      },
      {
        key: 25,
        name: "Quick Yes Simple Bot",
        value: formatNumber(0),
      },
      {
        key: 26,
        name: "Quick Yes Переводы с КЦ",
        value: formatNumber(0),
      },
      {
        key: 27,
        name: "Quick Yes Телемаркетинг",
        value: formatNumber(9),
      },
      {
        key: 28,
        name: "Quick Yes Онлайн",
        value: formatNumber(0),
      },
    ],
  },
];

interface IPersonalSalesProps {}
const PersonalSales: React.FC<IPersonalSalesProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        breadcrumb={{ routes }}
        ghost={false}
        title="Личный кабинет"
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
              <Card bordered={false} title="Наличный Кредит" padding={false}>
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
              <Card bordered={false} title="Кредитная карта" padding={false}>
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
              <Card bordered={false} title="BOX" padding={false}>
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
              <Card bordered={false} title="Дебетовая карта" padding={false}>
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

export default PersonalSales;
