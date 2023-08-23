import React, { useEffect, useState } from "react";
import axios from "../axios";

const About = () => {
  const [data, setData] = useState([]);

  const fetchAboutData = async () => {
    const { data } = await axios.get("/about");
    setData(data);
  };

  useEffect(() => {
    fetchAboutData();
  }, []);
  return (
    <div className="container mx-auto ">
      <h3 className=" eye-color text-center md:text-left my-10 text-[26px]">
        ჩვენს შესახებ
      </h3>
      <div className="flex flex-col gap-5 lg:[&>*:nth-child(even)]:flex-row-reverse mb-10 mx-2">
        {data?.length
          ? data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col  lg:flex-row   gap-10 border shadow rounded-lg px-3  py-3"
                >
                  <div className="w-100 lg:w-2/5">
                    {" "}
                    <img
                      src={`https://api.eyeline.ge/uploads${item?.img}`}
                      alt="info image"
                    />
                  </div>
                  <div className="flex flex-col mt-5 w-full lg:w-3/5">
                    <h3 className="text-center font-bold text-xl">
                      {item?.title}
                    </h3>

                    <div
                      className="text-justify mt-5 !font-[Glaho]"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default About;
