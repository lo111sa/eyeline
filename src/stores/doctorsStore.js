import { create } from "zustand";
import axios from "../axios";

export const useDoctorsStore = create((set) => ({
  doctors: [],
  doctorsPageCount: 0,
  isDoctorsLoading: false,

  //Fetch doctors function
  fetchDoctors: async (page, limit) => {
    set({ isDoctorsLoading: true, doctors: [] });
    const { data } = await axios.get(`/doctors?page=${page}&limit=${limit}`);
    set({
      doctors: data.data,
      doctorsPageCount: data.pageCount,
      isDoctorsLoading: false,
    });
  },
}));
