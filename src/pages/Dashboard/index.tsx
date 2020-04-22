import React from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import classNames from "classnames";
import { PageHeader, Card } from "ui/components";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { formatNumber, formatCurrency, formatPercent } from "utils/format";
import json from "./json";
import common_options from "./common_options";
import styles from "./Dashboard.module.less";

const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "dashboard",
    breadcrumbName: "Воронка продаж",
  },
];

const cash_approved_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.cash_approved.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.cash_approved.old,
    },
  ],
  ...common_options,
};

const cash_created_chart: Highcharts.Options = {
  series: [
    {
      name: "Договоров",
      type: "area",
      data: json.cash_created.current,
    },
    {
      name: "7 дней назад",
      type: "spline",
      data: json.cash_created.old,
    },
  ],
  ...common_options,
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
  ...common_options,
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
  ...common_options,
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
  ...common_options,
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
  ...common_options,
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
  ...common_options,
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
  ...common_options,
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
  ...common_options,
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
  ...common_options,
};

interface IProfileProps {}
const Dashboard: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        breadcrumb={{ routes }}
        ghost={false}
        title="Воронка продаж"
      />
      <div className={styles.row}>
        <div className={styles.cell}>
          <h4 className={styles["cell-header"]}>
            Cash <span>created</span>
          </h4>
          <div className={styles.graph}>
            <HighchartsReact
              highcharts={Highcharts}
              options={cash_created_chart}
            />
          </div>
          <Row justify="space-between">
            <Col>
              <p
                className={classNames(styles.percent, styles.percent_positive)}
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
        </div>
        <div className={styles.cell}>
          <h4 className={styles["cell-header"]}>
            Cash <span>full</span>
          </h4>
          <div className={styles.graph}>
            <HighchartsReact
              highcharts={Highcharts}
              options={cash_full_chart}
            />
          </div>
          <Row justify="space-between">
            <Col>
              <p
                className={classNames(styles.percent, styles.percent_positive)}
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
        </div>
        <div className={styles.cell}>
          <h4 className={styles["cell-header"]}>
            Cash <span>quickyes</span>
          </h4>
          <div className={styles.graph}>
            <HighchartsReact
              highcharts={Highcharts}
              options={cash_quickyes_chart}
            />
          </div>
          <Row justify="space-between">
            <Col>
              <p
                className={classNames(styles.percent, styles.percent_positive)}
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
        </div>
        <div className={styles.cell}>
          <h4 className={styles["cell-header"]}>
            Cash <span>signed</span>
          </h4>
          <div className={styles.graph}>
            <HighchartsReact
              highcharts={Highcharts}
              options={cash_signed_chart}
            />
          </div>
          <Row justify="space-between">
            <Col>
              <p
                className={classNames(styles.percent, styles.percent_positive)}
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
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h4 className={styles["cell-header"]}>
            Card <span>created</span>
          </h4>
          <div className={styles.graph}>
            <HighchartsReact
              highcharts={Highcharts}
              options={cash_created_chart}
            />
          </div>
          <Row justify="space-between">
            <Col>
              <p
                className={classNames(styles.percent, styles.percent_positive)}
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
        </div>
        <div className={styles.cell}>
          <h4 className={styles["cell-header"]}>
            Card <span>full</span>
          </h4>
          <div className={styles.graph}>
            <HighchartsReact
              highcharts={Highcharts}
              options={card_full_chart}
            />
          </div>
          <Row justify="space-between">
            <Col>
              <p
                className={classNames(styles.percent, styles.percent_positive)}
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
        </div>
        <div className={styles.cell}>
          <h4 className={styles["cell-header"]}>
            Card <span>quickyes</span>
          </h4>
          <div className={styles.graph}>
            <HighchartsReact
              highcharts={Highcharts}
              options={card_quickyes_chart}
            />
          </div>
          <Row justify="space-between">
            <Col>
              <p
                className={classNames(styles.percent, styles.percent_positive)}
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
        </div>
        <div className={styles.cell}>
          <h4 className={styles["cell-header"]}>
            Card <span>signed</span>
          </h4>
          <div className={styles.graph}>
            <HighchartsReact
              highcharts={Highcharts}
              options={card_signed_chart}
            />
          </div>
          <Row justify="space-between">
            <Col>
              <p
                className={classNames(styles.percent, styles.percent_negative)}
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
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Dashboard;
