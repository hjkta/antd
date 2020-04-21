import React, { useState } from "react";
import NotificationCenter from "../NotificationCenter";
import {
  Layout,
  Avatar,
  Space,
  Dropdown,
  Badge,
  Button,
  Drawer,
  Row,
  Col,
  Select,
  Input,
  Form,
  DatePicker,
} from "antd";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "./Header.module.less";

const { Header: AntHeader } = Layout;
const { Option } = Select;

interface IHeaderProps {
  children?: React.ReactNode;
}
const Header: React.FC<IHeaderProps> = ({ children }) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  return (
    <AntHeader className={styles.header}>
      {children}
      <div className={styles.userWrapper}>
        <Space size="large">
          <a href="#" onClick={() => setShowSettings(!showSettings)}>
            <SettingOutlined />
          </a>

          <Dropdown overlay={<NotificationCenter />} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Badge count={4} dot>
                <BellOutlined />
              </Badge>
            </a>
          </Dropdown>

          <Space>
            <Avatar size="small" src="http://themepixels.me/dashforge/1.1/assets/img/img1.png" />
            <>Злобина О.</>
          </Space>
        </Space>
      </div>
      <Drawer
        title="Настройки аккаунта"
        width={720}
        onClose={() => setShowSettings(false)}
        visible={showSettings}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={() => setShowSettings(false)} style={{ marginRight: 8 }}>
              Отмена
            </Button>
            <Button onClick={() => setShowSettings(false)} type="primary">
              Сохранить
            </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="Никнейм" rules={[{ required: true, message: "Введите никнейм" }]}>
                <Input placeholder="Введите никнейм" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="url" label="Аккаунт в соц. сетях" rules={[{ required: true, message: "Введите адрес" }]}>
                <Input
                  style={{ width: "100%" }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Введите адрес"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="owner" label="Ментор" rules={[{ required: true, message: "Выберите ментора" }]}>
                <Select placeholder="Выберите ментора">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="type" label="Тип аккаунта" rules={[{ required: true, message: "Выберите тип аккаунта" }]}>
                <Select placeholder="Выберите тип аккаунта">
                  <Option value="private">Приватный</Option>
                  <Option value="public">Публичный</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Согласователь"
                rules={[{ required: true, message: "Выберите согласователя" }]}
              >
                <Select placeholder="Выберите согласователя">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="Период"
                rules={[{ required: true, message: "Выберите период" }]}
              >
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Описание"
                rules={[
                  {
                    required: true,
                    message: "Введите описание",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Введите описание" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </AntHeader>
  );
};

export default Header;
