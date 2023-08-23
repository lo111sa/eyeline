import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import axios from "../axios";
import { PhoneOutlined, MailOutlined, RightOutlined } from "@ant-design/icons";

const SingleDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState([]);

  //Function for fetching doctor info
  const fetchDoctorInfo = async () => {
    const { data } = await axios(`/doctors/${id}`);
    setDoctor(data[0]);
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  useEffect(() => {
    fetchDoctorInfo();
  }, [id]);

  return (
    <>
      <div className="bg-[#CCDDF2]">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-1 items-center w-full md:flex-row md:w-5/5  md:gap-3 my-10 mx-3">
            <Link to={"/doctors"}>
              {" "}
              <span className="text-xl flex items-center gap-2 hover:text-sky-800 transition-all duration-300">
                ექიმები <RightOutlined className="text-sm" />
              </span>
            </Link>

            <span className="text-gray-500 ">{`${doctor?.name} ${doctor?.lastName}`}</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col  lg:flex-row gap-10 mt-5 mb-10">
          <div className="w-full px-3 lg:w-2/5">
            <img
              className="w-full h-[full] object-cover rounded-md"
              src={
                doctor?.img && `https://api.eyeline.ge/uploads${doctor?.img}`
              }
              alt=""
            />
          </div>
          <div className="w-full px-3 lg:w-3/5">
            <h3 className="font-bold text-center text-2xl mb-7">{`${doctor?.name} ${doctor?.lastName}`}</h3>
            {/*  <ReactMarkdown
              children={doctor.jobExperience}
              rehypePlugins={[rehypeRaw]}
              className="line-break  !font-[Glaho]"
            /> */}
            <div
              className="!font-[Glaho]"
              dangerouslySetInnerHTML={{ __html: doctor?.jobExperience }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-10 items-center border rounded-md p-5 mx-2 mb-2">
          <h3 className="text-blue-500 text-xl">სპეციალობა</h3>
          <span className="text-center ">{doctor.specialty}</span>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:gap-10 items-center border rounded-md p-5 mx-2 mb-2">
          <h3 className="text-blue-500 text-xl">განათლება</h3>
          <span className="text-center">{doctor.education}</span>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:gap-10 items-center border rounded-md p-5 mx-2 mb-5">
          <h3 className="text-blue-500 text-xl">საკონტაქტო</h3>
          <div className="flex flex-col gap-2 justify-start items-start">
            {doctor?.email && (
              <span className="flex items-center gap-3">
                <MailOutlined />
                {doctor.email}
              </span>
            )}
            {doctor?.phone && (
              <span className="flex items-center gap-3">
                <PhoneOutlined />
                {doctor.phone}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleDoctor;
