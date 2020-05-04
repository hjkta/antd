// =

const DefaultPieColors: {
  linearGradient: {};
  stops: Array<[number, string]>;
}[] = [
  {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, "#FF6CAB"], // start
      [1, "#7366FF"], // end
    ],
  },
  {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, "#276174"], // start
      [1, "#63FD88"], // end
    ],
  },
  {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, "#FFA62E"], // start
      [1, "#EA4D2C"], // end
    ],
  },
  {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, "#6EE2F5"], // start
      [1, "#6454F0"], // end
    ],
  },
  {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, "#FF9897"], // start
      [1, "#F650A0"], // end
    ],
  },
  {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, "#F869D5"], // start
      [1, "#5650DE"], // end
    ],
  },
  {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, "#F00B51"], // start
      [1, "#7366FF"], // end
    ],
  },
];

const CommonPieOptions: Highcharts.Options = {
  chart: {
    margin: [0, 0, 0, 0],
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 0,
  },
  title: {
    text: "",
  },
  legend: {
    enabled: true,
  },
  plotOptions: {
    variablepie: {
      dataLabels: {
        distance: 5,
        /*enabled: false,*/
      },
      states: {
        hover: {
          halo: {
            size: 0,
          },
        },
      },
    },
  },
  tooltip: {
    headerFormat: "",
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      "Количество: <b>{point.y}</b><br/>" +
      "Доля: <b>{point.z} %</b><br/>",
  },
  credits: {
    enabled: false,
  },
};

const pieData = [
  {
    name: "ДК",
    y: 15,
    z: 30,
  },
  {
    name: "НК",
    y: 13,
    z: 26,
  },
  {
    name: "КК",
    y: 14,
    z: 28,
  },
  {
    name: "BOX",
    y: 5,
    z: 10,
  },
  {
    name: "Страховка",
    y: 3,
    z: 6,
  },
];

export { CommonPieOptions, DefaultPieColors, pieData };
