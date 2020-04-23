import React, { useRef } from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import classNames from "classnames";
import { PageHeader, Card } from "ui/components";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import * as Highcharts from "highcharts";
import Variablepie from "highcharts/modules/variable-pie";
import HighchartsReact from "highcharts-react-official";
import AccessibilityModule from "highcharts/modules/accessibility";
import { formatNumber, formatCurrency, formatPercent } from "utils/format";
import json from "./json";
import CommonOptions from "./CommonOptions";
import CommonPieOptions from "./CommonPieOptions";
import styles from "./DashboardCopy.module.less";

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
      minPointSize: 10,
      innerSize: "20%",
      zMin: 0,
      name: "countries",
      size: "40%",
      data: [
        {
          name: "Spain",
          y: 505370,
          z: 92.9,
        },
        {
          name: "France",
          y: 551500,
          z: 118.7,
        },
        {
          name: "Poland",
          y: 312685,
          z: 124.6,
        },
        {
          name: "Czech Republic",
          y: 78867,
          z: 137.5,
        },
        {
          name: "Italy",
          y: 301340,
          z: 201.8,
        },
        {
          name: "Switzerland",
          y: 41277,
          z: 214.5,
        },
        {
          name: "Germany",
          y: 357022,
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
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.cash_full.old,
    },
  ],
  ...CommonOptions,
};

const cash_quickyes_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.cash_quickyes.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.cash_quickyes.old,
    },
  ],
  ...CommonOptions,
};

const cash_signed_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.cash_signed.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.cash_signed.old,
    },
  ],
  ...CommonOptions,
};

// card

const card_approved_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.card_approved.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.card_approved.old,
    },
  ],
  ...CommonOptions,
};

const card_created_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.card_created.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.card_created.old,
    },
  ],
  ...CommonOptions,
};

const card_full_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.card_full.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.card_full.old,
    },
  ],
  ...CommonOptions,
};

const card_quickyes_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.card_quickyes.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.card_quickyes.old,
    },
  ],
  ...CommonOptions,
};

const card_signed_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.card_signed.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.card_signed.old,
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
        title="Воронка продаж"
      />
      <Row gutter={16} className={styles.row}>
        <Col className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              Cash <span>created</span>
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
            <Row justify="space-between">
              <Col>
                <p
                  className={classNames(
                    styles.percent,
                    styles.percent_positive
                  )}
                >
                  <ArrowUpOutlined /> {formatPercent(35)}
                </p>
              </Col>
              <Col>
                <p className={classNames(styles.cash, styles.cash_positive)}>
                  +{formatCurrency(3600)}
                  <span>
                    по сравнению с прошлым
                    <br />
                    периодом
                  </span>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              Cash <span>full</span>
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
            <Row justify="space-between">
              <Col>
                <p
                  className={classNames(
                    styles.percent,
                    styles.percent_positive
                  )}
                >
                  <ArrowUpOutlined /> {formatPercent(35)}
                </p>
              </Col>
              <Col>
                <p className={classNames(styles.cash, styles.cash_positive)}>
                  +{formatCurrency(3600)}
                  <span>
                    по сравнению с прошлым
                    <br />
                    периодом
                  </span>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className={styles.row}>
        <Col className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              Card <span>full</span>
            </h4>
            <div className={styles.graph}>
              <HighchartsReact
                highcharts={Highcharts}
                options={card_full_chart}
                callback={(chart: any) => {
                  setTimeout(() => chart.reflow(), 0);
                }}
              />
            </div>
            <Row justify="space-between">
              <Col>
                <p
                  className={classNames(
                    styles.percent,
                    styles.percent_positive
                  )}
                >
                  <ArrowUpOutlined /> {formatPercent(35)}
                </p>
              </Col>
              <Col>
                <p className={classNames(styles.cash, styles.cash_positive)}>
                  +{formatCurrency(3600)}
                  <span>
                    по сравнению с прошлым
                    <br />
                    периодом
                  </span>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              Card <span>quickyes</span>
            </h4>
            <div className={styles.graph}>
              <HighchartsReact
                highcharts={Highcharts}
                options={card_quickyes_chart}
                callback={(chart: any) => {
                  setTimeout(() => chart.reflow(), 0);
                }}
              />
            </div>
            <Row justify="space-between">
              <Col>
                <p
                  className={classNames(
                    styles.percent,
                    styles.percent_positive
                  )}
                >
                  <ArrowUpOutlined /> {formatPercent(35)}
                </p>
              </Col>
              <Col>
                <p className={classNames(styles.cash, styles.cash_positive)}>
                  +{formatCurrency(3600)}
                  <span>
                    по сравнению с прошлым
                    <br />
                    периодом
                  </span>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className={styles.col}>
          <Card padding={false} bordered={false} shadow>
            <h4 className={styles["cell-header"]}>
              Card <span>signed</span>
            </h4>
            <div className={styles.graph}>
              <HighchartsReact
                highcharts={Highcharts}
                options={card_signed_chart}
                callback={(chart: any) => {
                  setTimeout(() => chart.reflow(), 0);
                }}
              />
            </div>
            <Row justify="space-between">
              <Col>
                <p
                  className={classNames(
                    styles.percent,
                    styles.percent_negative
                  )}
                >
                  <ArrowDownOutlined /> {formatPercent(35)}
                </p>
              </Col>
              <Col>
                <p className={classNames(styles.cash, styles.cash_negative)}>
                  -{formatCurrency(3600)}
                  <span>
                    по сравнению с прошлым
                    <br />
                    периодом
                  </span>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </BaseTemplate>
  );
};

export default DashboardCopy;
