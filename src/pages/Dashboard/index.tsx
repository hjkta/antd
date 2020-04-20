import React from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader, Card } from "ui/components";
import { Row, Col } from "antd";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  card_approved,
  card_created,
  card_full,
  card_quickyes,
  card_signed,
  cash_approved,
  cash_created,
  cash_full,
  cash_quickyes,
  cash_signed,
} from "./data";
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

interface IProfileProps {}
const Dashboard: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        breadcrumb={{ routes }}
        ghost={false}
        title="Воронка продаж"
      ></PageHeader>
      <div className={styles.row}>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={card_approved}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={30} domain={[0, 20]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={card_created}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={35} domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={card_full}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={30} domain={[0, 20]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={card_quickyes}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={30} domain={[0, 30]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={card_signed}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={30} domain={[0, 20]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={cash_approved}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={30} domain={[0, 30]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={cash_created}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={35} domain={[0, 400]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={cash_full}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={30} domain={[0, 40]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={cash_quickyes}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={35} domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <div className={styles.col}>
          <Card padding={false}>
            <div className={styles.graph}>
              <ResponsiveContainer>
                <ComposedChart
                  data={cash_signed}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="x" height={20} />
                  <YAxis width={30} domain={[0, 30]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="current"
                    fill="#8884d8"
                    stroke="#8884d8"
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="old"
                    stroke="#ff7300"
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Dashboard;
