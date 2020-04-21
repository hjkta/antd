import React from "react";
import { formatNumber, formatPercent } from "utils";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Параметр",
    dataIndex: "name",
  },
  {
    title: "Значение",
    dataIndex: "value",
    render: (text: any) => <Link to="/report">{text}</Link>,
  },
];

const data = [
  {
    key: 1,
    name: "Количество в штуках кредитов",
    value: 15,
  },
  {
    key: 2,
    name: "Сумма проданных кредитов",
    value: formatNumber(2750780),
  },
  {
    key: 3,
    name: "% Выполнения плана",
    value: formatPercent(22.78),
  },
  {
    key: 4,
    name: "Доля FD",
    value: formatPercent(90),
  },
  {
    key: 5,
    name: "% Проникновения страхования в штуках",
    value: formatPercent(76.92),
  },
  {
    key: 6,
    name: "Доля Combo в штуках",
    value: formatPercent(0),
  },
  {
    key: 7,
    name: "Доля Active в штуках",
    value: formatPercent(0),
  },
  {
    key: 8,
    name: "Доля FZ в штуках",
    value: formatPercent(0),
  },
  {
    key: 9,
    name: "% Отказов от услуги страхования в штуках",
    value: formatPercent(69.23),
  },
  {
    key: 10,
    name: "% SMS",
    value: formatPercent(92.31),
  },
  {
    key: 11,
    name: "Звонки",
    value: formatNumber(1826),
    children: [
      {
        key: 12,
        name: "Входящие",
        value: formatNumber(65),
      },
      {
        key: 13,
        name: "Simple Bot",
        value: formatNumber(0),
      },
      {
        key: 14,
        name: "Переводы с КЦ",
        value: formatNumber(30),
      },
      {
        key: 15,
        name: "Телемаркетинг",
        value: formatNumber(1731),
      },
      {
        key: 16,
        name: "Онлайн",
        value: formatNumber(0),
      },
    ],
  },
  {
    key: 17,
    name: "Quick",
    value: formatNumber(26),
    children: [
      {
        key: 18,
        name: "Quick Входящие",
        value: formatNumber(2),
      },
      {
        key: 19,
        name: "Quick Simple Bot",
        value: formatNumber(0),
      },
      {
        key: 20,
        name: "Quick Переводы с КЦ",
        value: formatNumber(2),
      },
      {
        key: 21,
        name: "Quick Телемаркетинг",
        value: formatNumber(22),
      },
      {
        key: 22,
        name: "Quick Онлайн",
        value: formatNumber(0),
      },
    ],
  },
  {
    key: 23,
    name: "Quick Yes",
    value: formatNumber(10),
    children: [
      {
        key: 24,
        name: "Quick Yes Входящие",
        value: formatNumber(1),
      },
      {
        key: 25,
        name: "Quick Yes Simple Bot",
        value: formatNumber(0),
      },
      {
        key: 26,
        name: "Quick Yes Переводы с КЦ",
        value: formatNumber(0),
      },
      {
        key: 27,
        name: "Quick Yes Телемаркетинг",
        value: formatNumber(9),
      },
      {
        key: 28,
        name: "Quick Yes Онлайн",
        value: formatNumber(0),
      },
    ],
  },
];

export { data, columns };
