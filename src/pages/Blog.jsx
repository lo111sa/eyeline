import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (value) => {
    setPage(value);
  };

  const fetchPosts = async () => {
    setIsLoading(true);
    const { data } = await axios.get(`/blog?page=${page}&limit=${9}`);
    setPosts(data.data);
    setPageCount(data.pageCount);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="container mx-auto">
      <h3 className="eye-color py-5 ms-2 text-center md:text-left text-[26px]">
        ბლოგი
      </h3>
      <div className="grid grid-cols-1 mx-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
        {posts?.length
          ? posts.map((item) => {
              return (
                <Link key={item.id} to={`/blog/${item.id}`}>
                  <div className="w-100  border rounded-md shadow h-[550px]">
                    <div className="w-full h-[411px]">
                      <img
                        className="w-full h-full object-contain object-center p-1 rounded-md"
                        src={
                          item?.img &&
                          `https://api.eyeline.ge/uploads${item.img}`
                        }
                        alt=""
                      />
                    </div>
                    <h3 className="text-center mt-2 font-bold text-lg px-2">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              );
            })
          : null}
      </div>

      <div className="m-8 text-center">
        {posts?.length ? (
          <Pagination
            current={page}
            defaultCurrent={1}
            total={pageCount}
            defaultPageSize={1}
            showSizeChanger={false}
            onChange={handleChange}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Blog;
