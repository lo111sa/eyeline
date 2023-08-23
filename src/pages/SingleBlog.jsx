import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import axios from "../axios";
import { RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    const { data } = await axios.get(`/blog/${id}`);
    setPost(data[0]);
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <>
      <div className="bg-[#CCDDF2]">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-1 items-center w-full md:flex-row md:w-2/3  md:gap-3 my-10  hover:text-sky-800 transition-all duration-300">
            <Link to={"/blog"}>
              {" "}
              <span className="text-xl flex items-center gap-2">
                ბლოგი <RightOutlined className="text-sm" />
              </span>
            </Link>

            <span className="text-gray-500 text-center">{post.title}</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center mx-2">
          <h2 className="text-center text-xl my-4">{post?.title}</h2>
          <img
            className="w-full md:w-2/3 rounded-md"
            src={post?.img && `https://api.eyeline.ge/uploads${post?.img}`}
            alt={post?.img}
          />
          {/* <ReactMarkdown
            children={post?.description}
            rehypePlugins={[rehypeRaw]}
            className="line-break text-justify w-full md:w-2/3 my-5"
          /> */}

          <div
            className="w-full md:w-2/3 my-5 !font-[Glaho]"
            dangerouslySetInnerHTML={{ __html: post?.description }}
          />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
