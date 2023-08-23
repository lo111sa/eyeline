import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import axios from "../axios";
import { RightOutlined } from "@ant-design/icons";

const SingleOffer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState({});

  const fetchOffer = async () => {
    const { data } = await axios.get(`/offers/${id}`);
    setOffer(data[0]);
  };

  useEffect(() => {
    fetchOffer();
  }, [id]);

  return (
    <>
      <div className="bg-[#CCDDF2]">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-1 items-center w-full md:flex-row md:w-2/3  md:gap-3 my-10  hover:text-sky-800 transition-all duration-300">
            <Link to={"/offers"}>
              {" "}
              <span className="text-xl flex items-center gap-2">
                აქციები <RightOutlined className="text-sm" />
              </span>
            </Link>

            <span className="text-gray-500 text-center">{offer.title}</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center mx-2">
          <h2 className="text-center text-xl my-4">{offer?.title}</h2>
          <img
            className="w-full md:w-2/3 rounded-md"
            src={offer?.img && `https://api.eyeline.ge/uploads${offer?.img}`}
            alt={offer?.img}
          />
          {/* <ReactMarkdown
            children={offer?.text}
            rehypePlugins={[rehypeRaw]}
            className=" w-full md:w-2/3 my-5"
          /> */}
          <div
            className="w-full md:w-2/3 my-5 !font-[Glaho]"
            dangerouslySetInnerHTML={{ __html: offer?.text }}
          />
        </div>
      </div>
    </>
  );
};

export default SingleOffer;
