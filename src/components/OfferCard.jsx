import React from "react";
import { Link } from "react-router-dom";

const OfferCard = ({ id, img, title, text }) => {
  return (
    <Link to={`/offers/${id}`}>
      {" "}
      <div className="w-auto border h-[405px] rounded-md shadow-md flex flex-col items-center justify-between  hover:shadow-xl hover:scale-105 transition-all duration-700 py-2 overflow-hidden">
        <div>
          <h3 className="px-2 text-[16px] text-center font-bold text-gray-600 mb-2">
            {title}
          </h3>
          <img
            className="w-full h-[240px] object-contain"
            src={img && `https://api.eyeline.ge/uploads${img}`}
            alt={img}
          />
        </div>

        <p className="mx-2 font-[Glaho] text-center text-sm ">
          {text
            .replace(/<[^>]+>/g, "")
            .slice(0, 120)
            .replace(/\&nbsp;/g, "") + `...`}
        </p>
      </div>
    </Link>
  );
};

export default OfferCard;
