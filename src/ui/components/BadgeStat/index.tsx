import React from "react";
import { Tooltip } from "antd";
import { Row, Col } from "ui/components";
import styles from "./BadgeStat.module.less";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";

type BadgeStatProps = {
  title?: string;
  value?: number;
  badgeValue?: number;
  unsuccess?: boolean;
  prefix?: string;
  tooltipValue?: string;
  noIcon?: boolean;
};

const BadgeStat: React.FC<BadgeStatProps> = ({
  title,
  value,
  badgeValue,
  unsuccess = false,
  prefix = "%",
  tooltipValue = "",
  noIcon = false,
}) => {
  const successTypeStyle =
    unsuccess === true ? "badge-value_unsuccess" : "badge-value_success";

  let iconSuccessTypeStyle;
  if (noIcon !== true) {
    iconSuccessTypeStyle =
      unsuccess === true ? (
        <FallOutlined></FallOutlined>
      ) : (
        <RiseOutlined></RiseOutlined>
      );
  }

  const prefixWrapped = <span className={`cell-prefix`}>{prefix}</span>;
  return (
    <div className={styles["badge-stat-wrap"]}>
      <Row justify="center" align="middle">
        <Col>
          <div className={`badge-stat `}>{value}</div>
        </Col>
        <Col>
          <Tooltip title={tooltipValue}>
            <div className={`badge-value ${successTypeStyle}`}>
              {iconSuccessTypeStyle}
              {badgeValue} {prefixWrapped}
            </div>
          </Tooltip>
        </Col>
      </Row>
      <div className={"badge-stat-title"}>{title}</div>
    </div>
  );
};

export default BadgeStat;
