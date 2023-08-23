import React, { useState } from "react";
import { FacebookOutlined, MenuOutlined } from "@ant-design/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="relative bg-[#F8F9FA]">
      <div className="container  mx-auto">
        <div className=" flex justify-between items-center p-5 ">
          <Link to={"/"}>
            {" "}
            <img
              className="object-contain w-[80px] h-[60px] lg:w-[120px] lg:h-[97px]"
              src="/img/logo.webp"
              alt="Logo"
            />
          </Link>

          <ul
            className={`${
              !popup && "invisible "
            } absolute   bg-[#F8F9FA] text-[18px] py-4 flex flex-col gap-10 top-[100px] left-0 right-0 text-center lg:flex-row lg:visible lg:static lg:justify-center lg:bg-transparent  lg:gap-5 z-50`}
          >
            <NavLink
              onClick={(e) => {
                setPopup(false);
              }}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : "hover:text-sky-600 relative group"
              }
              to={"/"}
            >
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
              <li>მთავარი</li>
            </NavLink>

            <NavLink
              onClick={(e) => {
                setPopup(false);
              }}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : "hover:text-sky-600 relative group"
              }
              to={"/about"}
            >
              <li>ჩვენს შესახებ</li>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              onClick={() => setPopup(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : "hover:text-sky-600 relative group"
              }
              to={"/services"}
            >
              <li>სერვისები</li>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              onClick={() => setPopup(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : "hover:text-sky-600 relative group"
              }
              to={"/offers"}
            >
              <li>აქციები</li>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              onClick={() => setPopup(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : "hover:text-sky-600 relative group"
              }
              to={"/doctors"}
            >
              <li>ექიმები</li>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              onClick={() => setPopup(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : "hover:text-sky-600 relative group"
              }
              to={"/reserve"}
            >
              <li>ჯავშანი</li>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              onClick={() => setPopup(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : "hover:text-sky-600 relative group"
              }
              to={"/blog"}
            >
              <li>ბლოგი</li>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>
          </ul>
          <div></div>
          <button
            className="p-2 border border-gray-300 rounded-md lg:hidden"
            onClick={() => setPopup(!popup)}
          >
            <MenuOutlined className="text-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
