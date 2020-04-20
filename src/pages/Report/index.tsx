import React, { useState } from "react";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader } from "ui/components";
import {
  Layout,
  Row,
  Col,
  Button,
  Form,
  Input,
  Select,
  Space,
  Dropdown,
  Menu,
  Tag,
  Table,
} from "antd";
import {
  MailOutlined,
  DownloadOutlined,
  SearchOutlined,
  UpOutlined,
  DownOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import styles from "./Report.module.less";

const { Content } = Layout;

const routes = [
  {
    path: "index",
    breadcrumbName: "Главная",
  },
  {
    path: "report",
    breadcrumbName: "Отчет",
  },
];

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
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
    title: "Договор",
    dataIndex: "evidSrv",
    key: "evidSrv",
    sorter: (a:any, b:any) => a.evidSrv - b.evidSrv,
    render: (text: string) => <a>{text}</a>
  },
  {
    title: "Дата подписания",
    dataIndex: "dateSign",
    key: "dateSign"
  },
  {
    title: "Сотрудник",
    dataIndex: "employee",
    key: "employee",
    sorter: (a:any, b:any) => a.employee - b.employee,
  },
  {
    title: "Лидер",
    dataIndex: "leader",
    key: "leader",
    sorter: (a:any, b:any) => a.leader - b.leader
  },
];

const data = [
  {
    key: "1",
    evidSrv:"2334457852",
    dateSign:"13.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    evidSrv:"2332232852",
    dateSign:"15.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "3",
    evidSrv:"2334444452",
    dateSign:"11.03.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "4",
    evidSrv:"2124457852",
    dateSign:"13.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "5",
    evidSrv:"2331232852",
    dateSign:"09.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "6",
    evidSrv:"2234257852",
    dateSign:"11.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "7",
    evidSrv:"2345457852",
    dateSign:"10.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "8",
    evidSrv:"2334457852",
    dateSign:"13.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "9",
    evidSrv:"2336547852",
    dateSign:"15.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "10",
    evidSrv:"2323425852",
    dateSign:"08.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "11",
    evidSrv:"2322347852",
    dateSign:"05.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "12",
    evidSrv:"2324347852",
    dateSign:"07.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "13",
    evidSrv:"2322245852",
    dateSign:"09.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "14",
    evidSrv:"2322342252",
    dateSign:"10.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  },
  {
    key: "15",
    evidSrv:"2456547852",
    dateSign:"05.04.2015",
    employee: "Злобина Оксана Александровна",
    leader: "Вакуленко Роман Вячеславович",
    tags: ["nice", "developer"]
  }
];

interface IProfileProps {}
const Profile: React.FC<IProfileProps> = () => {
  const [expand, setExpand] = useState(false);
  return (
    <BaseTemplate>
      <PageHeader
        breadcrumb={{ routes }}
        ghost={false}
        // onBack={() => window.history.back()}
        title="Отчет по продажам"
        subTitle="Телемаркетинг"
        extra={[
          <Button icon={<MailOutlined />} key="1">
            Excel
          </Button>,
        ]}
      ></PageHeader>

      <Content className={styles.content}>
        <Form>
          <Row gutter={24}>
            <Col key={1}>
              <Form.Item
                name={`field-2`}
                label={`Сотрудник`}
                rules={[
                  {
                    required: true,
                    message: "Выберите фио...",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Выберите тип записи..."
                  optionFilterProp="children"
                  defaultValue="Злобина Оксана Александровна"
                  filterOption={(input, option) =>
                    (option as any).children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Select.Option value="jack">Думкина Елена Анатольевна</Select.Option>
                  <Select.Option value="lucy">Коваленков Михаил Вениаминович</Select.Option>
                  <Select.Option value="tom">Злобина Оксана Александровна</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Table
            style={{ width: "100%" }}
            columns={columns}
            dataSource={data}
          />
        </Form>
      </Content>
    </BaseTemplate>
  );
};

export default Profile;
