import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";
import { LeftOutlined } from "@ant-design/icons";

const ServicePosts = () => {
  const { id, subid } = useParams();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get(`/subservicesinfo/${subid}`);
    setPosts(data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="bg-[#CCDDF2]">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-1 items-center w-full md:flex-row md:w-5/5  md:gap-3 my-10 mx-3">
            <Link to={"/services"}>
              {" "}
              <span className="text-xl flex items-center gap-2 hover:text-sky-800 transition-all duration-300">
                <LeftOutlined className="text-sm" /> სერვისები
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 lg:[&>*:nth-child(even)]:flex-row-reverse my-10 mx-2">
          {posts?.length
            ? posts.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col  lg:flex-row   gap-10 border shadow rounded-lg px-3"
                  >
                    <div className="w-100 lg:w-2/5 py-2">
                      {" "}
                      <img
                        className=" rounded-md"
                        src={`https://api.eyeline.ge/uploads${item?.img}`}
                        alt="info image"
                      />
                    </div>
                    <div className="flex flex-col mt-5 w-full lg:w-3/5">
                      <h3 className="text-center font-bold text-xl">
                        {item?.title}
                      </h3>
                      {/* <ReactMarkdown
                    children={item.maintxt}
                    rehypePlugins={[rehypeRaw]}
                    className="line-break text-justify mt-5 "
                  /> */}

                      <div
                        className="text-justify mt-5 !font-[Glaho]"
                        dangerouslySetInnerHTML={{ __html: item.maintxt }}
                      />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default ServicePosts;
