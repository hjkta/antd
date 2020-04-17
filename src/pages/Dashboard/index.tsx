import React from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader, Card } from "ui/components";
import { Layout, Row, Col, Button, Table, Tag } from "antd";
import { MailOutlined } from "@ant-design/icons";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
} from "bizcharts";
import DataSet from "@antv/data-set";
import styles from "./Dashboard.module.less";
const { DataView } = DataSet;
const { Html } = Guide;

const { Content } = Layout;
const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "dashboard",
    breadcrumbName: "Дашборд",
  },
];

const table_columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: any) => (
      <span>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <span>
        <a style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a>Delete</a>
      </span>
    ),
  },
];

const table_data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const data_column = [
  { year: "1951 年", sales: 38 },
  { year: "1952 年", sales: 52 },
  { year: "1956 年", sales: 61 },
  { year: "1957 年", sales: 145 },
  { year: "1958 年", sales: 48 },
  { year: "1959 年", sales: 38 },
  { year: "1960 年", sales: 38 },
  { year: "1962 年", sales: 38 },
];
const cols_column = {
  sales: { tickInterval: 20 },
};

const data_area = [
  { year: "1991", value: 15468 },
  { year: "1992", value: 16100 },
  { year: "1993", value: 15900 },
  { year: "1994", value: 17409 },
  { year: "1995", value: 17000 },
  { year: "1996", value: 31056 },
  { year: "1997", value: 31982 },
  { year: "1998", value: 32040 },
  { year: "1999", value: 33233 },
];
const data_area_rev = data_area.slice().reverse();
const cols_area = {
  value: {
    min: 10000,
  },
  year: {
    range: [0, 1],
  },
};

const data_pie = [
  { item: "事例一", count: 40 },
  { item: "事例二", count: 21 },
  { item: "事例三", count: 17 },
  { item: "事例四", count: 13 },
  { item: "事例五", count: 9 },
];

const dv = new DataView();

dv.source(data_pie).transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent",
});

const cols_pie = {
  percent: {
    formatter: (val: any) => {
      val = val * 100 + "%";
      return val;
    },
  },
};

interface IProfileProps {}
const Dashboard: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        breadcrumb={{ routes }}
        ghost={false}
        title="Дашборд статистика"
        extra={[
          <Button icon={<MailOutlined />} key="1">
            Отправить
          </Button>,
        ]}
      ></PageHeader>
      <Content className={styles.content}>
        <Row gutter={24}>
          <Col span={24}>
            <Card bordered={false}>
              <Row gutter={24}>
                <Col span={18}>
                  <h4 className={styles.h4}>Sales dashboard</h4>
                  <Chart
                    height={300}
                    data={data_column}
                    scale={cols_column}
                    forceFit
                    padding={[10, 10, 20, 30]}
                  >
                    <Axis name="year" />
                    <Axis name="sales" />
                    <Tooltip crosshairs={{ type: "y" }} />
                    <Geom type="interval" position="year*sales" />
                  </Chart>
                </Col>
                <Col span={6}>
                  <h4 className={styles.h4}>Visit Rankings</h4>
                  <ul className={styles.list}>
                    <li>
                      <span>Sample Data</span>
                      <span className={styles.list__value}>323,234</span>
                    </li>
                    <li>
                      <span>Sample Data</span>
                      <span className={styles.list__value}>323,234</span>
                    </li>
                    <li>
                      <span>Sample Data</span>
                      <span className={styles.list__value}>323,234</span>
                    </li>
                    <li>
                      <span>Sample Data</span>
                      <span className={styles.list__value}>323,234</span>
                    </li>
                    <li>
                      <span>Sample Data</span>
                      <span className={styles.list__value}>323,234</span>
                    </li>
                    <li>
                      <span>Sample Data</span>
                      <span className={styles.list__value}>323,234</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <div className={styles.divider} />
        <Row gutter={24}>
          <Col span={12}>
            <Card bordered={false} title={"Top Search"}>
              <Row>
                <Col span={12}>
                  <h4 className={styles.h4}>Search Users</h4>
                  <Chart
                    height={200}
                    data={data_area}
                    scale={cols_area}
                    forceFit
                    padding={[10, 20, 20, 15]}
                  >
                    <Axis name="year" />
                    <Axis
                      visible={false}
                      name="value"
                      label={{
                        formatter: (val: any) => {
                          return (val / 10000).toFixed(1) + "k";
                        },
                      }}
                    />
                    <Geom type="area" position="year*value" />
                    <Geom type="line" position="year*value" size={2} />
                  </Chart>
                </Col>
                <Col span={12}>
                  <h4 className={styles.h4}>Search Vars</h4>
                  <Chart
                    height={200}
                    data={data_area_rev}
                    scale={cols_area}
                    forceFit
                    padding={[10, 20, 20, 15]}
                  >
                    <Axis name="year" />
                    <Axis
                      visible={false}
                      name="value"
                      label={{
                        formatter: (val: any) => {
                          return (val / 10000).toFixed(1) + "k";
                        },
                      }}
                    />
                    <Geom type="area" position="year*value" />
                    <Geom type="line" position="year*value" size={2} />
                  </Chart>
                </Col>
              </Row>
              <div className={styles.divider} />
              <Row>
                <Col span={24}>
                  <Table columns={table_columns} dataSource={table_data} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} title={"Sample Data"}>
              <Chart
                height={500}
                data={dv}
                scale={cols_pie}
                padding={[80, 100, 80, 80]}
                forceFit
              >
                <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
                <Axis name="percent" />
                <Legend position="right" offsetY={0} offsetX={-100} />
                <Tooltip
                  showTitle={false}
                  itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                />
                <Guide>
                  <Html
                    position={["50%", "50%"]}
                    html='<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">主机<br><span style="color:#262626;font-size:2.5em">200</span>台</div>'
                    alignX="middle"
                    alignY="middle"
                  />
                </Guide>
                <Geom
                  type="intervalStack"
                  position="percent"
                  color="item"
                  tooltip={[
                    "item*percent",
                    (item, percent) => {
                      percent = percent * 100 + "%";
                      return {
                        name: item,
                        value: percent,
                      };
                    },
                  ]}
                  style={{ lineWidth: 1, stroke: "#fff" }}
                >
                  <Label
                    content="percent"
                    formatter={(val, item) => {
                      return item.point.item + ": " + val;
                    }}
                  />
                </Geom>
              </Chart>
            </Card>
          </Col>
        </Row>
      </Content>
    </BaseTemplate>
  );
};

export default Dashboard;
