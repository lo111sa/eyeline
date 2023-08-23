import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 48,
    }}
    spin
  />
);
const Loading = () => {
  return (
    <div className="text-center my-20">
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loading;
