import React from "react";
import { useInfoStore } from "../stores/infoStore";
import {
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const { clinicInfo } = useInfoStore((state) => state);
  return (
    <div className="bg-[#E9ECEF]">
      <div className="container mx-auto flex flex-col gap-5 items-center md:flex-row md:items-start justify-center ">
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-5 py-3">
          <img
            className="w-[170px] h-[137px]"
            src="/img/logo.webp"
            alt="Logo"
          />
          <p className="text-center">{clinicInfo?.address}</p>

          <p className="flex items-center gap-2">
            {" "}
            <MailOutlined /> {clinicInfo?.email}
          </p>
          <a
            className="flex items-center gap-2"
            href={`tel:${clinicInfo?.phone}`}
          >
            {" "}
            <PhoneOutlined /> {clinicInfo?.phone}
          </a>
        </div>

        <div className="w-2/3 md:w-1/3 flex flex-col items-center justify-center gap-3 py-3">
          <div className="flex flex-col items-center justify-center gap-3">
            <h5 className="text-blue-400 border-b border-blue-400 text-xl">
              სამუშაო საათები
            </h5>

            <p>{clinicInfo?.workinghours}</p>
            <p>შაბათი - 10:00 - 14:00</p>
          </div>
        </div>

        <div className="w-2/3 md:w-1/3 flex flex-col items-center justify-center gap-3 py-3">
          <h5 className="text-blue-400 border-b border-blue-400 text-xl">
            გამოგვყევით
          </h5>
          <Link to={"https://www.facebook.com/cliniceyeline"} target="_blank">
            {" "}
            <img src="/img/facebook.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
