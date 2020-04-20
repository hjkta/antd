import React from "react";
import { Card } from "ui/components";
import { Empty } from "antd";

interface INotificationCenter {}
const NotificationCenter: React.FC<INotificationCenter> = () => {
  return (
    <Card bordered={true} shadow={true}>
      <Empty />
    </Card>
  );
};

export default NotificationCenter;
