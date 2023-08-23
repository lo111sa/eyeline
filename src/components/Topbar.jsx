import React, { useEffect } from "react";
import {
  ClockCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { useInfoStore } from "../stores/infoStore";
import { shallow } from "zustand/shallow";
import { Link } from "react-router-dom";

const Topbar = () => {
  const { clinicInfo, fetchClinicInfo } = useInfoStore(
    (state) => state,
    shallow
  );

  useEffect(() => {
    fetchClinicInfo();
  }, []);

  return (
    <div className="hidden xl:container lg:flex justify-between items-center mx-auto  p-2 ">
      <div></div>
      <ul className="flex items-center justify-center gap-10 text-blue-900  lg:text-md">
        <li className="flex items-center gap-2">
          <ClockCircleOutlined /> {clinicInfo?.workinghours}
        </li>
        <li>
          <a
            className="flex items-center gap-2"
            href={`tel:${clinicInfo?.phone}`}
          >
            {" "}
            <PhoneOutlined /> {clinicInfo?.phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MailOutlined /> {clinicInfo?.email}
        </li>
        <li className="flex items-center gap-2">
          <EnvironmentOutlined /> {clinicInfo?.address}
        </li>
      </ul>
      <Link to={"https://www.facebook.com/cliniceyeline"} target="_blank">
        {" "}
        <img src="/img/facebook.png" alt="" />
      </Link>
    </div>
  );
};

export default Topbar;
