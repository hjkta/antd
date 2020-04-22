const CommonPieOptions: Highcharts.Options = {
  title: {
    text: "Countries compared by population density and total area.",
  },
  tooltip: {
    headerFormat: "",
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      "Area (square km): <b>{point.y}</b><br/>" +
      "Population density (people per square km): <b>{point.z}</b><br/>",
  },
};

export default CommonPieOptions;
