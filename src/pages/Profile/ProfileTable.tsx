import React from "react";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Показатель",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Значение",
    dataIndex: "value",
    key: "value",
    width: "12%",
  },
];

const data = [
  {
    key: 1,
    name: "Кол-во звонков",
    value: <a href="#">312</a>,
  },
  {
    key: 2,
    name: "Кол-во операций",
    value: <a href="#">22</a>,
  },
  {
    key: 3,
    name: "Всего продаж",
    value: <a href="#">3123</a>,
  },
  {
    key: 4,
    name: "Всего",
    value: <a href="#">3123</a>,
  },
  {
    key: 5,
    name: "Процент отказа",
    value: <a href="#">3%</a>,
  },
];

interface ITableProps {}
const ProfileTable: React.FC<ITableProps> = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      showHeader={false}
      size="small"
      pagination={false}
    />
  );
};

export default ProfileTable;
