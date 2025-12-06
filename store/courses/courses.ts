import { TCourses } from "@/types/courses";
import axios from "axios";
import { create } from "zustand";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const useCourseStore = create((set) => ({
  ...initialState,

  fetchCourses: async () => {
    set((state: TCourses) => ({ ...state, loading: true }));

    try {
      await axios.get(`${baseURL}dump/courses.json`);
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCourseStore;
