import { create } from "zustand";
import axios from "../axios";

export const useInfoStore = create((set) => ({
  clinicInfo: {},
  isLoading: false,

  //Fetch doctors function
  fetchClinicInfo: async () => {
    set({ isLoading: true, clinicInfo: {} });
    const { data } = await axios.get(`/clinicdata`);
    set({
      clinicInfo: data,
      isLoading: false,
    });
  },
}));
