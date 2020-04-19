import React from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader, Card } from "ui/components";
import { Row, Col, Table, Space } from "antd";
import { data, columns } from "./table_data";
import { data as chart_data } from "./graph_data";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
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

const RubleSvg = () => (
  <svg
    height="1em"
    viewBox="0 0 512 512"
    fill="currentColor"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m288.134 128.533h-80.334c-8.284 0-15 6.716-15 15v113.533h-17.133c-8.284 0-15 6.716-15 15s6.716 15 15 15h17.133v34.267h-17.133c-8.284 0-15 6.716-15 15s6.716 15 15 15h17.133v33.2c0 8.284 6.716 15 15 15s15-6.716 15-15v-33.2h65.334c8.284 0 15-6.716 15-15s-6.716-15-15-15h-65.334v-34.267h65.334c43.708 0 79.267-35.559 79.267-79.267-.001-44.788-36.484-79.266-79.267-79.266zm0 128.533h-65.334v-98.533h65.334c27.002 0 49.267 21.78 49.267 49.267-.001 27.166-22.101 49.266-49.267 49.266z" />
    <path d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 482c-124.617 0-226-101.383-226-226s101.383-226 226-226 226 101.383 226 226-101.383 226-226 226z" />
  </svg>
);
const RubleIcon = (props: any) => <Icon component={RubleSvg} {...props} />;

const PercentSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.003 512.003"
    fill="currentColor"
    height="1em"
    width="1em"
  >
    <g>
      <g>
        <path
          d="M477.958,262.633c-2.06-4.215-2.06-9.049,0-13.263l19.096-39.065c10.632-21.751,2.208-47.676-19.178-59.023l-38.41-20.38
			c-4.144-2.198-6.985-6.11-7.796-10.729l-7.512-42.829c-4.183-23.846-26.241-39.87-50.208-36.479l-43.053,6.09
			c-4.647,0.656-9.242-0.838-12.613-4.099l-31.251-30.232c-17.401-16.834-44.661-16.835-62.061,0L193.72,42.859
			c-3.372,3.262-7.967,4.753-12.613,4.099l-43.053-6.09c-23.975-3.393-46.025,12.633-50.208,36.479l-7.512,42.827
			c-0.811,4.62-3.652,8.531-7.795,10.73l-38.41,20.38c-21.386,11.346-29.81,37.273-19.178,59.024l19.095,39.064
			c2.06,4.215,2.06,9.049,0,13.263l-19.096,39.064c-10.632,21.751-2.208,47.676,19.178,59.023l38.41,20.38
			c4.144,2.198,6.985,6.11,7.796,10.729l7.512,42.829c3.808,21.708,22.422,36.932,43.815,36.93c2.107,0,4.245-0.148,6.394-0.452
			l43.053-6.09c4.643-0.659,9.241,0.838,12.613,4.099l31.251,30.232c8.702,8.418,19.864,12.626,31.03,12.625
			c11.163-0.001,22.332-4.209,31.03-12.625l31.252-30.232c3.372-3.261,7.968-4.751,12.613-4.099l43.053,6.09
			c23.978,3.392,46.025-12.633,50.208-36.479l7.513-42.827c0.811-4.62,3.652-8.531,7.795-10.73l38.41-20.38
			c21.386-11.346,29.81-37.273,19.178-59.024L477.958,262.633z M464.035,334.635l-38.41,20.38
			c-12.246,6.499-20.645,18.057-23.04,31.713l-7.512,42.828c-1.415,8.068-8.874,13.487-16.987,12.342l-43.053-6.09
			c-13.73-1.945-27.316,2.474-37.281,12.113L266.5,478.152c-5.886,5.694-15.109,5.694-20.997,0l-31.251-30.232
			c-8.422-8.147-19.432-12.562-30.926-12.562c-2.106,0-4.229,0.148-6.355,0.449l-43.053,6.09
			c-8.106,1.146-15.571-4.274-16.987-12.342l-7.513-42.829c-2.396-13.656-10.794-25.215-23.041-31.712l-38.41-20.38
			c-7.236-3.839-10.086-12.61-6.489-19.969l19.096-39.065c6.088-12.456,6.088-26.742,0-39.198l-19.096-39.065
			c-3.597-7.359-0.747-16.13,6.489-19.969l38.41-20.38c12.246-6.499,20.645-18.057,23.04-31.713l7.512-42.828
			c1.416-8.068,8.874-13.488,16.987-12.342l43.053,6.09c13.725,1.943,27.316-2.474,37.281-12.113l31.252-30.232
			c5.886-5.694,15.109-5.694,20.997,0l31.251,30.232c9.965,9.64,23.554,14.056,37.281,12.113l43.053-6.09
			c8.107-1.147,15.572,4.274,16.987,12.342l7.512,42.829c2.396,13.656,10.794,25.215,23.041,31.712l38.41,20.38
			c7.236,3.839,10.086,12.61,6.489,19.969l-19.096,39.064c-6.088,12.455-6.088,26.743,0,39.198l19.096,39.064
			C474.121,322.024,471.271,330.796,464.035,334.635z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M363.886,148.116c-5.765-5.766-15.115-5.766-20.881,0L148.116,343.006c-5.766,5.766-5.766,15.115,0,20.881
			c2.883,2.883,6.662,4.325,10.44,4.325c3.778,0,7.558-1.441,10.44-4.325l194.889-194.889
			C369.653,163.231,369.653,153.883,363.886,148.116z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M196.941,123.116c-29.852,0-54.139,24.287-54.139,54.139s24.287,54.139,54.139,54.139s54.139-24.287,54.139-54.139
			S226.793,123.116,196.941,123.116z M196.941,201.863c-13.569,0-24.608-11.039-24.608-24.609c0-13.569,11.039-24.608,24.608-24.608
			c13.569,0,24.609,11.039,24.609,24.608C221.549,190.824,210.51,201.863,196.941,201.863z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M315.061,280.61c-29.852,0-54.139,24.287-54.139,54.139s24.287,54.139,54.139,54.139
			c29.852,0,54.139-24.287,54.139-54.139S344.913,280.61,315.061,280.61z M315.061,359.357c-13.569,0-24.609-11.039-24.609-24.608
			s11.039-24.608,24.609-24.608c13.569,0,24.608,11.039,24.608,24.608S328.63,359.357,315.061,359.357z"
        />
      </g>
    </g>
  </svg>
);

const PercentIcon = (props: any) => <Icon component={PercentSvg} {...props} />;

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
              <Card bordered={false} noPadding className={styles["card-info"]}>
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
              <Card bordered={false} noPadding className={styles["card-info"]}>
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
              <Card bordered={false} noPadding className={styles["card-info"]}>
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
              <Card bordered={false} noPadding className={styles["card-info"]}>
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
          <Row gutter={[24, 18]}>
            <Col span={18}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card bordered={false} title="Наличный Кредит" noPadding>
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
                  <Card bordered={false} title="Кредитная карта" noPadding>
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
                  <Card bordered={false} title="BOX" noPadding>
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
                  <Card bordered={false} title="Дебетовая карта" noPadding>
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
