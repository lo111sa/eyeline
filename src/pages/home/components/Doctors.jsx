import React, { useEffect } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import DoctorCard from "../../../components/DoctorCard";
import { shallow } from "zustand/shallow";
import { useDoctorsStore } from "../../../stores/doctorsStore";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";

const Doctors = () => {
  const { fetchDoctors, doctors, isDoctorsLoading } = useDoctorsStore(
    (state) => state,
    shallow
  );

  useEffect(() => {
    fetchDoctors(1, 8);
  }, []);

  if (isDoctorsLoading) return <Loading />;
  return (
    <div className="container mx-auto px-4">
      <h3 className="eye-color pb-10 text-[26px]">ჩვენი ექიმები</h3>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
        {doctors?.length
          ? doctors.map((item) => {
              return <DoctorCard key={item.id} {...item} />;
            })
          : null}
      </div>

      <h3 className="eye-color flex items-center justify-end gap-3 p-10 text-[20px]">
        <Link className="flex items-center gap-3" to={"/doctors"}>
          იხილეთ ვრცლად <ArrowRightOutlined />
        </Link>
      </h3>
    </div>
  );
};

export default Doctors;
