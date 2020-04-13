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
    value: 312,
  },
  {
    key: 2,
    name: "Кол-во операций",
    value: 312,
  },
  {
    key: 1,
    name: "Всего продаж",
    value: 33332,
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
