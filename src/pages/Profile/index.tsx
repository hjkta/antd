import React, { CSSProperties } from "react";
import BaseTemplate from "../../ui/templates/BaseTemplate";
import { Row, Col, Card, PageHeader, Button, Tabs, Calendar, Statistic, Avatar, Typography, Tag } from "antd";
import {
  MailOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  LikeOutlined,
  EnvironmentOutlined,
  ClusterOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import styles from "../../App.module.scss";

const { TabPane } = Tabs;
const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "profile",
    breadcrumbName: "Профиль",
  },
];

const gridStyle: CSSProperties = {
  width: "25%",
};

interface IProfileProps {}
const Profile: React.FC<IProfileProps> = () => {
  return (
    <BaseTemplate>
      <PageHeader
        className={styles["ant-page-header"]}
        breadcrumb={{ routes }}
        ghost={false}
        // onBack={() => window.history.back()}
        title="Профиль сотрудника"
        subTitle="Ливнул Остюдов"
        extra={[
          <Button icon={<MailOutlined />} key="1">
            Отправить
          </Button>,
        ]}
      ></PageHeader>

      <Row gutter={24}>
        <Col span={6}>
          <Card bordered={false}>
            <Row gutter={[24, 18]}>
              <Col span={24} style={{ textAlign: "center" }}>
                <Avatar size={108} src={"http://themepixels.me/dashforge/1.1/assets/img/img1.png"} />
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <Typography.Title level={4} style={{ marginBottom: "0" }}>
                  Плахов Павел
                </Typography.Title>
                <Typography.Text type="secondary">Руководитель отдела</Typography.Text>
              </Col>
              <Col span={24}>
                <Tag color="green">хороший</Tag>
                <Tag color="red">плохой</Tag>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Typography.Paragraph>
                  <ClusterOutlined /> &nbsp; Отдел разработки и эксплуатации инофрмационно технических систем
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <EnvironmentOutlined /> &nbsp; Обнинск
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <MobileOutlined /> &nbsp; Обнинск
                </Typography.Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={18}>
          <Card bordered={false}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Операционные показатели" key="1">
                <Row gutter={[24, 16]}>
                  <Col span={24}>
                    <Card>
                      <Row>
                        <Col span={12}>
                          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                        </Col>
                        <Col span={12}>
                          <Statistic title="Unmerged" value={93} suffix="/ 100" />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col span={24}>
                    <Card>
                      <Card.Grid style={gridStyle}>
                        <Statistic
                          title="Active"
                          value={11.28}
                          precision={2}
                          valueStyle={{ color: "#3f8600" }}
                          prefix={<ArrowUpOutlined />}
                          suffix="%"
                        />
                      </Card.Grid>
                      <Card.Grid style={gridStyle}>
                        <Statistic
                          title="Active"
                          value={11.28}
                          precision={2}
                          valueStyle={{ color: "#3f8600" }}
                          prefix={<ArrowUpOutlined />}
                          suffix="%"
                        />
                      </Card.Grid>
                      <Card.Grid style={gridStyle}>
                        <Statistic
                          title="Active"
                          value={11.28}
                          precision={2}
                          valueStyle={{ color: "#3f8600" }}
                          prefix={<ArrowUpOutlined />}
                          suffix="%"
                        />
                      </Card.Grid>
                      <Card.Grid style={gridStyle}>
                        <Statistic
                          title="Idle"
                          value={9.3}
                          precision={2}
                          valueStyle={{ color: "#cf1322" }}
                          prefix={<ArrowDownOutlined />}
                          suffix="%"
                        />
                      </Card.Grid>
                      <Card.Grid style={gridStyle}>
                        <Statistic
                          title="Idle"
                          value={9.3}
                          precision={2}
                          valueStyle={{ color: "#cf1322" }}
                          prefix={<ArrowDownOutlined />}
                          suffix="%"
                        />
                      </Card.Grid>
                      <Card.Grid style={gridStyle}>
                        <Statistic
                          title="Idle"
                          value={9.3}
                          precision={2}
                          valueStyle={{ color: "#cf1322" }}
                          prefix={<ArrowDownOutlined />}
                          suffix="%"
                        />
                      </Card.Grid>
                      <Card.Grid style={gridStyle}>
                        <Statistic
                          title="Idle"
                          value={9.3}
                          precision={2}
                          valueStyle={{ color: "#cf1322" }}
                          prefix={<ArrowDownOutlined />}
                          suffix="%"
                        />
                      </Card.Grid>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Расписание" key="2">
                <Calendar />
              </TabPane>
              <TabPane tab="Премии" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>

      {/*<Row style={{ marginBottom: 10 }} gutter={10}>
        <Col span={8}>
          <Card>
            <Row gutter={24}>
              <Col span={12}>
                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Unmerged" value={93} suffix="/ 100" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Row gutter={24}>
              <Col span={12}>
                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Unmerged" value={93} suffix="/ 100" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Row gutter={24}>
              <Col span={12}>
                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Unmerged" value={93} suffix="/ 100" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Статистика">
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card.Grid>
          </Card>
        </Col>
      </Row>*/}
    </BaseTemplate>
  );
};

export default Profile;
