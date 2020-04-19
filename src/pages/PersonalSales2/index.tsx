import React from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader, Card } from "ui/components";
import { Row, Col, Table } from "antd";
import { data, columns } from "./table_data";
import { data as chart_data } from "./graph_data";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
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
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={16}>
            <Col span={6}>
              <Card bordered={true} noPadding className={styles["card-info"]}>
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
                      <Area
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={true} noPadding className={styles["card-info"]}>
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
                        stroke="#8884d8"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={true} noPadding className={styles["card-info"]}>
                <div className="head">
                  <Row justify="space-between">
                    <Col>
                      <h2 className="header header_positive">
                        {formatPercent(90)}
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
                    <BarChart width={150} height={40} data={chart_data}>
                      <Bar
                        dataKey="uv"
                        fill="#8884d8"
                        isAnimationActive={false}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={true} noPadding className={styles["card-info"]}>
                <div className="head">
                  <Row justify="space-between">
                    <Col>
                      <h2 className="header header_negative">
                        {formatPercent(69.23)}
                        <ArrowDownOutlined />
                        <span className="percent">{formatPercent(14)}</span>
                      </h2>
                      <p className="desc">Отказов от услуги страхования</p>
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
                      <Area
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card bordered={true} title="Наличный Кредит" noPadding>
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
                  <Card bordered={true} title="Кредитная карта" noPadding>
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
                  <Card bordered={true} title="BOX" noPadding>
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
                  <Card bordered={true} title="Дебетовая карта" noPadding>
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
        </Col>
      </Row>
    </BaseTemplate>
  );
};

export default PersonalSales2;
