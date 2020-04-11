import React from "react";
import BaseTemplate from "../../ui/templates/BaseTemplate";
import { Layout, Breadcrumb, Row, Col, Statistic, Card } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import styles from "../../App.module.scss";

const { Content } = Layout;

interface IProfileProps {}
const Profile: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <Content className={styles.content}>
        <Card>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
            </Col>
            <Col span={12}>
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Col>
          </Row>
        </Card>
      </Content>
    </BaseTemplate>
  );
};

export default Profile;
