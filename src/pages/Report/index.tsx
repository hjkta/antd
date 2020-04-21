import React, { useState } from "react";
import ReactDom from "react";
import { tableData,columns } from "./table_data";
import { CSVLink } from "react-csv";
import BaseTemplate from "ui/templates/BaseTemplate";
import { PageHeader } from "ui/components";
import {
  Layout,
  Row,
  Col,
  Button,
  DatePicker,
  Form,
  Select,
  Table,
} from "antd";

import {
  SearchOutlined,
  FileExcelOutlined
} from "@ant-design/icons";

import styles from "./Report.module.less";
import moment from "moment";

const Flink=()=> {
  const csvData = [
    ["Договор","Дата", "email"],
    ["2334457852", "13.04.2015", "Злобина Оксана Александровна"],
    ["2332232852", "15.04.2015", "Злобина Оксана Александровна"],
    ["2334444452", "11.04.2015", "Злобина Оксана Александровна"]
  ];

  return (
    <CSVLink separator={";"} data={csvData}><Button icon={<FileExcelOutlined />} key="1"></Button></CSVLink>
  );
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
      ></PageHeader>
      <Content className={styles.content}>
        <Form>
          <Row gutter={24}>
            <Col>
              <Flink />
            </Col>
            <Col>
              <RangePicker defaultValue={[moment('2020-04-01'), moment('2020-04-30')]} />
            </Col>
            <Col>
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
            <Col>
              <Button type="primary" icon={<SearchOutlined />}>
                Поиск
              </Button>
            </Col>
          </Row>

          <Table style={{ width: "100%" }} columns={columns} dataSource={tableData} />
        </Form>
      </Content>
    </BaseTemplate>
  );
};

export default Profile;