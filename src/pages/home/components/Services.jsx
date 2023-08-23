import React, { useEffect } from "react";
import ServiceCard from "../../../components/ServiceCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useServieStore } from "../../../stores/serviceStore";
import { shallow } from "zustand/shallow";
import { Link } from "react-router-dom";

const Services = () => {
  const { subServices, fetchServices, fetchSubServices, activeService } =
    useServieStore((state) => state, shallow);

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    fetchSubServices(activeService, 1, 8);
  }, [activeService]);

  return (
    <div className="container mx-auto px-4">
      <h3 className="eye-color pb-10 text-[26px]">ჩვენი სერვისები</h3>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
        {subServices?.length
          ? subServices.map((item) => {
              return <ServiceCard key={item.id} {...item} />;
            })
          : null}
      </div>

      <h3 className="eye-color flex items-center justify-end gap-3 p-10 text-[20px]">
        <Link className="flex items-center gap-3" to={"/services"}>
          იხილეთ ვრცლად <ArrowRightOutlined />
        </Link>
      </h3>
    </div>
  );
};

export default Services;
