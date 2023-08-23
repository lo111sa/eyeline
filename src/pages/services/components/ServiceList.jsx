import React, { useEffect, useState } from "react";
import { CaretUpOutlined } from "@ant-design/icons";
import { useServieStore } from "../../../stores/serviceStore";

const ServiceList = ({ services }) => {
  const { fetchSubServices, activeService, setActiveService, currPage } =
    useServieStore((state) => state);

  const [open, setOpen] = useState(true);

  return (
    <div className="m-3 sticky top-5">
      <div className="relative w-full  text-white   rounded-t-lg">
        <button
          onClick={() => setOpen(!open)}
          className=" bg-[#82a6fa] h-12 w-full rounded-t-lg flex items-center justify-between px-3"
        >
          {" "}
          <span></span>
          <span>სერვისები</span>{" "}
          <CaretUpOutlined className={!open && "rotate-180"} />
        </button>
        <div
          className={`${
            !open && "invisible"
          } absolute left-0 right-0  shadow-lg  overflow-y-auto   top-[50px] rounded-b-lg bg-white text-black z-[9999px]`}
        >
          <ul className="p-4 ">
            {services?.length
              ? services.map((item) => {
                  return (
                    <li
                      onClick={() => {
                        setActiveService(item.id);
                        fetchSubServices(item.id, currPage, 10);
                      }}
                      className={`m-3 text-[#17449E] cursor-pointer ${
                        activeService === item.id && "text-[#82a6fa]"
                      }`}
                      key={item.id}
                    >
                      {item.title}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
