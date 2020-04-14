import React from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader } from "ui/components";
import { Layout, Row, Col, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import styles from "./Dashboard.module.less";

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
      <Content className={styles.content}></Content>
    </BaseTemplate>
  );
};

export default Dashboard;
