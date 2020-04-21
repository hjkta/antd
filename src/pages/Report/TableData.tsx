import React, { useState } from "react";

const tableData = [
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

const columns = [
  {
    title: "Договор",
    dataIndex: "evidSrv",
    key: "evidSrv",
    sorter: (a:any, b:any) => a.evidSrv - b.evidSrv,
    showSorterTooltip: false, 
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
    showSorterTooltip: false, 
  },
  {
    title: "Лидер",
    dataIndex: "leader",
    key: "leader",
    sorter: (a:any, b:any) => a.leader - b.leader,
    showSorterTooltip: false, 
  },
];

export { tableData, columns };
