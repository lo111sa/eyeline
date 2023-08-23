import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ id, img, name, lastName, specialty }) => {
  return (
    <Link to={`/doctors/${id}`}>
      {" "}
      <div className="w-auto border h-[420px] rounded-md shadow-md flex flex-col items-center justify-between  hover:scale-105  duration-300">
        <img
          className="w-[200px] h-[200px] rounded-[50%] object-cover mt-2"
          src={img && `https://api.eyeline.ge/uploads${img}`}
          alt="img"
        />
        <h3 className="px-2 text-[20px] font-bold text-gray-600">
          {`${name} ${lastName}`}
        </h3>
        <h4 className="text-center">{specialty}</h4>
        <div className="bg-[#82a6fa] w-full min-h-[80px] flex justify-center items-center text-white rounded-b-md">
          <span>სრულად ნახვა</span>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
