import React, { useRef } from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import classNames from "classnames";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import { Row, Col, PageHeader, Card } from "ui/components";
import * as Highcharts from "highcharts";
import Variablepie from "highcharts/modules/variable-pie";
import HighchartsReact from "highcharts-react-official";
import AccessibilityModule from "highcharts/modules/accessibility";
import { formatNumber, formatCurrency, formatPercent } from "utils/format";
import json from "./json";
import CommonOptions from "./CommonOptions";
import { CommonPieOptions, DefaultPieColors } from "./CommonPieOptions";
import styles from "./DashboardCopy.module.less";

interface percProps {
  percent?: number;
  colorFrom?: string;
  colorTo?: string;
}

const ProgressChart = ({
  percent = 90,
  colorFrom = "#6ac086",
  colorTo = "#87d068",
}: percProps) => {
  return (
    <Row justify="center" align="middle">
      <Col>
        <Progress
          strokeLinecap="square"
          type="circle"
          strokeColor={{
            "0%": colorFrom,
            "100%": colorTo,
          }}
          percent={percent}
        />
      </Col>
    </Row>
  );
};

Variablepie(Highcharts);

const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "dashboard_copy",
    breadcrumbName: "Воронка продаж",
  },
];

const cashCreatedPieChart: Highcharts.Options = {
  series: [
    {
      colors: [
        {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#FF6CAB"], // start
            [1, "#7366FF"], // end
          ],
        },
        {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#276174"], // start
            [1, "#63FD88"], // end
          ],
        },
        {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#FFA62E"], // start
            [1, "#EA4D2C"], // end
          ],
        },
        {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#6EE2F5"], // start
            [1, "#6454F0"], // end
          ],
        },
        {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#FF9897"], // start
            [1, "#F650A0"], // end
          ],
        },
        {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#F869D5"], // start
            [1, "#5650DE"], // end
          ],
        },
        {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#F00B51"], // start
            [1, "#7366FF"], // end
          ],
        },
      ],
      minPointSize: 10,
      innerSize: "50%",
      zMin: 0,
      name: "Оформленные продукты",
      size: "100%",
      data: [
        {
          name: "ДК",
          y: 15,
          z: 92.9,
        },
        {
          name: "НК",
          y: 13,
          z: 118.7,
        },
        {
          name: "КК",
          y: 14,
          z: 124.6,
        },
        {
          name: "BOX",
          y: 5,
          z: 214.5,
        },
        {
          name: "Страховка",
          y: 3,
          z: 235.6,
        },
      ],
      type: "variablepie",
    },
  ],
  ...CommonPieOptions,
};

const cash_full_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.cash_full.current,
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "#FF6CAB"], // start
          [1, "#7366FF"], // end
        ],
      },
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.cash_full.old,
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "#FFA62E"], // start
          [1, "#EA4D2C"], // end
        ],
      },
    },
  ],
  ...CommonOptions,
};

interface IProfileProps {}
const DashboardCopy: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        breadcrumb={{ routes }}
        ghost={false}
        title="Статистика управления продаж"
      />
      <Row chart={true} gutter={[16, 16]} className={styles.row}>
        <Col span={6} chart={true} className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              <span>Оформленные продукты</span>
            </h4>
            <div className={styles.graph}>
              <HighchartsReact
                highcharts={Highcharts}
                options={cashCreatedPieChart}
                callback={(chart: any) => {
                  setTimeout(() => chart.reflow(), 0);
                }}
              />
            </div>
          </Card>
        </Col>
        <Col span={6} className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              <span>Процент выполнения Cash</span>
            </h4>
            <div className={styles["graph-no-stat"]}>
              <ProgressChart
                percent={48}
                colorFrom={"#fdec6d"}
                colorTo={"#ff7599"}
              ></ProgressChart>
            </div>
            <Row justify="space-between">
              <Col>
                <p
                  className={classNames(
                    styles.percent,
                    styles.percent_positive
                  )}
                >
                  <ArrowUpOutlined /> {formatPercent(2)}
                </p>
              </Col>
              <Col>
                <p className={classNames(styles.cash, styles.cash_positive)}>
                  +{formatCurrency(3600)}
                  <span>за текущую неделю</span>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6} className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              <span>Процент выполнения Card</span>
            </h4>
            <div className={styles["graph-no-stat"]}>
              <ProgressChart percent={93}></ProgressChart>
            </div>
            <Row justify="space-between">
              <Col>
                <p
                  className={classNames(
                    styles.percent,
                    styles.percent_positive
                  )}
                >
                  <ArrowUpOutlined /> {formatPercent(4)}
                </p>
              </Col>
              <Col>
                <p className={classNames(styles.cash, styles.cash_positive)}>
                  +{formatCurrency(3600)}
                  <span>за текущую неделю</span>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6} className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              <span>NPS</span>
            </h4>
            <div className={styles["graph-no-stat"]}>
              <ProgressChart percent={51}></ProgressChart>
            </div>
            <Row justify="space-between">
              <Col></Col>
              <Col>
                <p
                  className={classNames(
                    styles.percent,
                    styles.percent_positive
                  )}
                >
                  <ArrowUpOutlined /> {formatPercent(2)}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className={styles.row}>
        <Col span={24} className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              <span>Активность продаж за сегодня</span>
            </h4>
            <div className={styles.graph}>
              <HighchartsReact
                highcharts={Highcharts}
                options={cash_full_chart}
                callback={(chart: any) => {
                  setTimeout(() => chart.reflow(), 0);
                }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </BaseTemplate>
  );
};

export default DashboardCopy;
