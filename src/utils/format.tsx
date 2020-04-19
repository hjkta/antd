const formatNumber = (val: any) =>
  Number.parseFloat(val).toLocaleString("ru-RU");

const formatPercent = (val: any) =>
  Number.parseFloat(val).toLocaleString("ru-RU") + "%";

const formatCurrency = (val: any) =>
  Number.parseFloat(val).toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });

export { formatNumber, formatPercent, formatCurrency };
