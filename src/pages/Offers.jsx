import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Pagination } from "antd";
import Loading from "../components/Loading";
import OfferCard from "../components/OfferCard";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (value) => {
    setPage(value);
  };

  const fetchOffers = async () => {
    setIsLoading(true);
    const { data } = await axios.get(`/offers?page=${page}&limit=${12}`);
    setOffers(data.data);
    setPageCount(data.pageCount);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOffers();
  }, [page]);

  if (isLoading) return <Loading />;
  return (
    <div className="container mx-auto mt-5 px-5">
      <h3 className="eye-color pb-10 text-center md:text-left text-[26px]">
        მიმდინარე აქციები
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {offers?.length
          ? offers.map((item) => {
              return <OfferCard key={item.id} {...item} />;
            })
          : null}
      </div>
      <div className="m-8 text-center">
        {offers?.length ? (
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

export default Offers;
