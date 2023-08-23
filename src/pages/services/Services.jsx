import React, { useEffect, useState } from "react";
import { useServieStore } from "../../stores/serviceStore";
import { shallow } from "zustand/shallow";
import ServiceList from "./components/ServiceList";
import ServiceCard from "../../components/ServiceCard";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const Services = () => {
  const {
    services,
    subServices,
    fetchServices,
    fetchSubServices,
    activeService,
    totalPage,
    setCurrPage,
    currPage,
    setActiveService,
    isServiceLoading,
  } = useServieStore((state) => state, shallow);

  const handleChange = (value) => {
    setCurrPage(value);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    fetchSubServices(activeService, currPage, 12);
  }, [activeService, currPage]);

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="w-full lg:w-1/4 2xl:w-1/5">
        {/* lg:w-3/12 2xl:w-2/12 */}
        <ServiceList services={services} />
      </div>
      <div className="w-full min-h-[100vh] lg:w-3/4 2xl:w-4/5  px-3">
        <h3 className="invisible lg:visible eye-color mt-2 pb-5 ms-1 text-center md:text-left text-[26px]">
          სერვისები
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
          {subServices?.length
            ? subServices.map((item) => {
                return <ServiceCard key={item.id} {...item} />;
              })
            : null}
        </div>
        <div className="m-8 text-center">
          {subServices?.length ? (
            <Pagination
              current={currPage}
              defaultCurrent={1}
              total={totalPage}
              defaultPageSize={1}
              showSizeChanger={false}
              onChange={handleChange}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Services;
