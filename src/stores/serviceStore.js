import { create } from "zustand";
import axios from "../axios";

export const useServieStore = create((set) => ({
  services: [],
  subServices: [],
  activeService: 0,
  isServiceLoading: false,
  isSubServiceLoading: false,
  totalPage: 1,
  currPage: 1,

  //Fetch services
  fetchServices: async () => {
    set({ isServiceLoading: true, services: [] });
    const { data } = await axios.get(`/services`);
    set({
      services: data,
      activeService: data[0]?.id,
      isServiceLoading: false,
    });
  },

  //Fetch sub services
  fetchSubServices: async (id, page, limit) => {
    set({ isSubServiceLoading: true, subServices: [] });
    const { data } = await axios.get(
      `/subservices/${id}?page=${page}&limit=${limit}`
    );
    set({
      subServices: data.data,
      totalPage: data.pageCount,
      isSubServiceLoading: false,
    });
  },

  setActiveService: (id) => {
    set({ activeService: id });
  },

  //Set current page for pagination
  setCurrPage: (page) => {
    set({ currPage: page });
  },
}));
