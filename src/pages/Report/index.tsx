import React, { useState } from "react";
import BaseTemplate from "../../ui/templates/BaseTemplate";
import { Layout, Row, Col, PageHeader, Button, Form, Input, Select, Space, Dropdown, Menu, Tag, Table } from "antd";
import {
  MailOutlined,
  DownloadOutlined,
  SearchOutlined,
  UpOutlined,
  DownOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import styles from "../../App.module.scss";

const { Content } = Layout;

const routes = [
  {
    path: "index",
    breadcrumbName: "Home",
  },
  {
    path: "first",
    breadcrumbName: "Report",
  },
];

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: "none",
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: "top",
          }}
        />
      </Button>
    </Dropdown>
  );
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a>{text}</a>,
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
    render: (text: string, record: any) => (
      <span>
        <a style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
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

interface IProfileProps {}
const Profile: React.FC<IProfileProps> = () => {
  const [expand, setExpand] = useState(false);
  return (
    <BaseTemplate>
      <PageHeader
        className={styles["ant-page-header"]}
        breadcrumb={{ routes }}
        ghost={false}
        // onBack={() => window.history.back()}
        title="Отчет по продажам"
        subTitle="Телемаркетинг"
        extra={[
          <Button icon={<MailOutlined />} key="1">
            Отправить
          </Button>,
          <DropdownMenu key="more" />,
        ]}
      ></PageHeader>

      <Content className={styles.content}>
        <Form>
          <Row gutter={24}>
            <Col key={1}>
              <Form.Item
                name={`field-1`}
                label={`Фио`}
                rules={[
                  {
                    required: true,
                    message: "Введите ФИО...",
                  },
                ]}
              >
                <Input placeholder="Введите ФИО..." />
              </Form.Item>
            </Col>

            <Col key={2}>
              <Form.Item
                name={`field-2`}
                label={`Тип записи`}
                rules={[
                  {
                    required: true,
                    message: "Выберите тип записи...",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Выберите тип записи..."
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option as any).children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="tom">Tom</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    Поиск
                  </Button>
                  <a
                    style={{ fontSize: 12 }}
                    onClick={() => {
                      setExpand(!expand);
                    }}
                  >
                    {expand ? <UpOutlined /> : <DownOutlined />} Расширенный поиск
                  </a>
                </Space>
              </Form.Item>
            </Col>
          </Row>

          <Table style={{ width: "100%" }} columns={columns} dataSource={data} />
        </Form>
      </Content>
    </BaseTemplate>
  );
};

export default Profile;
