import React, { useState } from "react";
import ReactDom from "react";
import { data as report_data } from "./report_data";
import { CSVLink, CSVDownload } from "react-csv";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader } from "ui/components";
import {
  Layout,
  Row,
  Col,
  Button,
  DatePicker,
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
  FileExcelOutlined
} from "@ant-design/icons";

import styles from "./Report.module.less";
import moment from "moment";

const csvData = [
  [`Договор`, `Дата`, `email`],
  ["2334457852", "13.04.2015", "Злобина Оксана Александровна"],
  ["2332232852", "15.04.2015", "Злобина Оксана Александровна"],
  ["2334444452", "11.04.2015", "Злобина Оксана Александровна"]
];

const Flink = () => {  
  return (<CSVLink data={csvData}><Button icon={<FileExcelOutlined />} key="1"></Button></CSVLink> );
}

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

const { RangePicker } = DatePicker;

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
        extra={[ <Flink /> ]}
      ></PageHeader>
      <Content className={styles.content}>
        <Form>
          <Row gutter={24}>

            <Col>
            <RangePicker defaultValue={[moment('2020-04-01'), moment('2020-04-30')]} />
            </Col>
            <Col key={1}>
              <Form.Item
                name={`field-2`}
                label={`Сотрудник`}
                rules={[
                  {
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
                  <Select.Option value="Думкина Елена Анатольевна">Думкина Елена Анатольевна</Select.Option>
                  <Select.Option value="Коваленков Михаил Вениаминович">Коваленков Михаил Вениаминович</Select.Option>
                  <Select.Option value="Злобина Оксана Александровна">Злобина Оксана Александровна</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Table
            style={{ width: "100%" }}
            columns={columns}
            dataSource={report_data}
          />
        </Form>
      </Content>
    </BaseTemplate>
  );
};

export default Profile;
