import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, serviceId, img, title }) => {
  return (
    <Link to={`/services/${serviceId}/${id}`}>
      <div className="w-auto border h-[390px] rounded-md shadow-md flex flex-col items-center justify-between hover:shadow-xl hover:scale-105 transition-all duration-700 pt-3">
        <img
          width={100}
          height={100}
          src={img && `https://api.eyeline.ge/uploads${img}`}
          alt={img}
        />
        <h3 className="px-2 text-[20px] font-bold text-gray-600">{title}</h3>
        <div className="bg-[#82a6fa] w-full min-h-[80px] flex justify-center items-center text-white rounded-b-md">
          <span>სრულად ნახვა</span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
