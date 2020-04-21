import React from "react";
import { DatePicker as DefaultDatePicker } from "antd";
import { DatePickerProps } from "antd/lib/date-picker";
import locale from "antd/es/date-picker/locale/ru_RU";

const DatePicker: React.FC<DatePickerProps> = (props) => {
  return <DefaultDatePicker locale={locale} {...props} />;
};

export default DatePicker;
