import React, { useState, useEffect } from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader, Card } from "ui/components";
import { Row, Col, Table, Avatar, Typography, Tag, Spin, Statistic, Progress } from "antd";
import { data, columns } from "./table_data";
import { data as chart_data } from "./graph_data";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  PlusOutlined,
  LikeOutlined,
  MobileTwoTone,
  EnvironmentTwoTone,
  BankTwoTone,
  ClockCircleTwoTone,
} from "@ant-design/icons";
import { RubleIcon, PercentIcon } from "./custom_icons";
import { formatNumber, formatCurrency, formatPercent } from "utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Bar,
  BarChart,
} from "recharts";
import styles from "./PersonalSales.module.less";

const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "personal_sales2",
    breadcrumbName: "Личный кабинет телемаркетинга",
  },
];

interface IPersonalSalesProps {}
const PersonalSales2: React.FC<IPersonalSalesProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  return (
    <BaseTemplate>
      <PageHeader breadcrumb={{ routes }} ghost={false} title="" /> {/* Личный кабинет телемаркетинга */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card bordered={false} shadow>
            <Row>
              <Col span={12}>
                <div>
                  <div style={{ width: "90px", float: "left" }}>
                    <Avatar size={64} src={"http://themepixels.me/dashforge/1.1/assets/img/img1.png"} />
                  </div>
                  <div>
                    <Typography.Title level={4} style={{ marginBottom: "0" }}>
                      Злобина Оксана Александровна
                    </Typography.Title>
                    <Typography.Text type="secondary">Ведущий менеджер</Typography.Text>
                    <div style={{ paddingTop: "10px" }}>
                      <Tag color="purple">СМС-пакеты</Tag>
                      <Tag color="purple">Дебетовая карта</Tag>
                      <Tag
                        className="site-tag-plus"
                        style={{
                          background: "#fff",
                          borderStyle: "dashed",
                          color: "rgba(0,0,0,0.65)",
                        }}
                      >
                        <PlusOutlined /> Добавить скилл
                      </Tag>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={3}></Col>
              <Col span={6}>
                <div>
                  <BankTwoTone /> &nbsp; Отдел пилотных проектов
                </div>
                <div>
                  <EnvironmentTwoTone /> &nbsp; Обнинск
                </div>
                <div>
                  <MobileTwoTone /> &nbsp; +7 (999) 888-77-66
                </div>
              </Col>

              <Col span={3}>
                <Statistic title="Расписание" value={"55 / 175"} prefix={<ClockCircleTwoTone />} />
                <Progress percent={27} steps={10} size="small" strokeColor="#1890ff" />

              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card bordered={false} shadow padding={false} className={styles["card-info"]}>
            <Spin spinning={loading}>
              <div className="head">
                <Row justify="space-between">
                  <Col>
                    <h2 className="header header_positive">
                      {formatNumber(2750780)}
                      <ArrowUpOutlined />
                      <span className="percent">{formatPercent(16)}</span>
                    </h2>
                    <p className="desc">Сумма проданных кредитов</p>
                  </Col>
                  <Col>
                    <RubleIcon style={{ fontSize: "32px" }} />
                  </Col>
                </Row>
              </div>
              <div className="body">
                <ResponsiveContainer>
                  <AreaChart
                    data={chart_data}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#B1168B" stopOpacity={1} />
                        <stop offset="24%" stopColor="#772394" stopOpacity={1} />
                        <stop offset="63%" stopColor="#3A379C" stopOpacity={1} />
                        <stop offset="100%" stopColor="#3160B9" stopOpacity={1} />
                      </linearGradient>
                    </defs>
                    <Area
                      isAnimationActive={false}
                      type="monotone"
                      dataKey="uv"
                      fillOpacity={1}
                      stroke=""
                      fill="url(#color1)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Spin>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} shadow padding={false} className={styles["card-info"]}>
            <Spin spinning={loading}>
              <div className="head">
                <Row justify="space-between">
                  <Col>
                    <h2 className="header header_positive">
                      {formatNumber(15)}
                      <ArrowUpOutlined />
                      <span className="percent">{formatPercent(2)}</span>
                    </h2>
                    <p className="desc">Количество проданных кредитов</p>
                  </Col>
                </Row>
              </div>
              <div className="body">
                <ResponsiveContainer>
                  <LineChart data={chart_data}>
                    <Line
                      isAnimationActive={false}
                      type="monotone"
                      dataKey="pv"
                      stroke="#702595"
                      strokeWidth={1}
                      fill="#702595"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Spin>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} shadow padding={false} className={styles["card-info"]}>
            <Spin spinning={loading}>
              <div className="head">
                <Row justify="space-between">
                  <Col>
                    <h2 className="header header_positive">
                      {formatNumber(90)}
                      <ArrowUpOutlined />
                      <span className="percent">{formatPercent(43)}</span>
                    </h2>
                    <p className="desc">Процент выполения плана</p>
                  </Col>
                  <Col>
                    <PercentIcon style={{ fontSize: "32px" }} />
                  </Col>
                </Row>
              </div>
              <div className="body">
                <ResponsiveContainer>
                  <BarChart
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                    data={chart_data}
                  >
                    <Bar dataKey="uv" isAnimationActive={false} fill="#94D2F1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Spin>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} shadow padding={false} className={styles["card-info"]}>
            <Spin spinning={loading}>
              <div className="head">
                <Row justify="space-between">
                  <Col>
                    <h2 className="header header_negative">
                      {formatNumber(69.23)}
                      <ArrowDownOutlined />
                      <span className="percent">{formatPercent(14)}</span>
                    </h2>
                    <p className="desc">Отказов от услуги страхования</p>
                  </Col>
                  <Col>
                    <PercentIcon style={{ fontSize: "32px" }} />
                  </Col>
                </Row>
              </div>
              <div className="body">
                <ResponsiveContainer>
                  <AreaChart
                    data={chart_data}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9} />
                      </linearGradient>
                    </defs>
                    <Area isAnimationActive={false} type="monotone" dataKey="uv" stroke="" fill="url(#color4)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Spin>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card bordered={false} shadow title="Наличный Кредит" padding={false}>
                <Table
                  size="small"
                  showHeader={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                  className={styles.table}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false} shadow title="Кредитная карта" padding={false}>
                <Table
                  size="small"
                  showHeader={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                  className={styles.table}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false} shadow title="BOX" padding={false}>
                <Table
                  size="small"
                  showHeader={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                  className={styles.table}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false} shadow title="Дебетовая карта" padding={false}>
                <Table
                  size="small"
                  showHeader={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                  className={styles.table}
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
