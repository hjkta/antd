import React from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader, Card } from "ui/components";
import { Row, Col, Table } from "antd";
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
    </BaseTemplate>
  );
};

export default PersonalSales2;
