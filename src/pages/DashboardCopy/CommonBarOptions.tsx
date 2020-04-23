const CommonBarOptions: Highcharts.Options = {
  title: {
    text: "",
  },
  chart: {
    spacingBottom: 10,
    spacingLeft: 5,
    spacingRight: 5,
    spacingTop: 5,
  },
  xAxis: [
    {
      categories: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "23:59",
      ],
      tickInterval: 4,
      tickmarkPlacement: "on",
      tickColor: "#BECAD3",
      tickLength: 20,
      crosshair: {
        color: "#ececec",
      },
    },
  ],
  yAxis: [
    {
      title: {
        text: "",
      },
      gridLineColor: "#F0F0F0",
      tickmarkPlacement: "on",
      tickColor: "#BECAD3",
      tickLength: 20,
      tickAmount: 10,
    },
  ],
  tooltip: {
    shared: true,
  },
  plotOptions: {
    series: {
      lineWidth: 1.5,
      states: {
        hover: {
          enabled: false,
        },
      },
      marker: {
        enabled: false,
      },
    },
    spline: {
      color: "#3288BD",
      opacity: 1,
      marker: {
        enabled: false,
      },
    },
    column: {
      color: "#61CDBB",
    },
  },
  exporting: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
};

export default CommonBarOptions;
