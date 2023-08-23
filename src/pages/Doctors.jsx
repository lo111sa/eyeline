import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { Pagination } from "antd";
import { useDoctorsStore } from "../stores/doctorsStore";
import { shallow } from "zustand/shallow";
import Loading from "../components/Loading";

const Doctors = () => {
  const [page, setPage] = useState(1);
  const { fetchDoctors, doctors, isDoctorsLoading, doctorsPageCount } =
    useDoctorsStore((state) => state, shallow);

  //Set current page on pagination change
  const handleChange = (value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchDoctors(page, 12);
  }, [page]);

  if (isDoctorsLoading) return <Loading />;
  return (
    <div className="container mx-auto mt-5 px-5">
      <h3 className="eye-color py-5 ms-1 text-center md:text-left text-[26px]">
        ჩვენი ექიმები
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {doctors?.length
          ? doctors.map((item) => {
              return <DoctorCard key={item.id} {...item} />;
            })
          : null}
      </div>
      <div className="m-8 text-center">
        {doctors?.length ? (
          <Pagination
            current={page}
            defaultCurrent={1}
            total={doctorsPageCount}
            defaultPageSize={1}
            showSizeChanger={false}
            onChange={handleChange}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Doctors;
