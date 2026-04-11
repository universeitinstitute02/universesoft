import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { getToken } from "../../helper/sessionHelper";
const axiosPublic = useAxiosPublic();

// const baseUrl = `http://localhost:3000/api/v1`;

const config = {
  headers: {
    token: getToken(),
  },
};



const careerStore = create((set) => ({
  createCareerApi: async (postBody) => {
    try {
      // let url = `${baseUrl}/createCareer`;
      return axiosPublic
        .post(`/createCareer`,postBody,config)
        .then((res) => {
          console.log(res);
          if (res.data["status"] === "success") {
            return true;
          } else {
            return false;
          }
        })
        .catch((e) => {
          return false;
        });
    } catch (error) {
      return error;
    }
  },

  careerDataList: [],
  careerApiDataRequest: async () => {
    let res = await axiosPublic.get(`/getAllCareer`);
    if (res.data["status"] === "success") {
      set({ careerDataList: res.data["data"] });
    }
  },

  careerDeleteApi: (id) => {
    try {
      
      return axiosPublic
        .delete(`/deleteCareer/${id}`, config)
        .then((res) => {
          if (res.data["status"] === "success") {
            return res.data["status"];
          }
        })
        .catch((e) => {
          return false
        });
    } catch (error) {
      return false;
    }
  },

  SingleCareerData: [],
  SingleCareerDataApi: async (id) => {
    try {
      let res = await axiosPublic.get(`/getSingleCareer/${id}`);
      if (res.data["status"] === "success") {
        set({ SingleCareerData: res.data["data"] });
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  updateCareerApi: async (id,postBody) => {
    try {
      let res = await axiosPublic.put(`/updateCareer/${id}`,postBody,config);
      if (res.data["status"] === "success") {
        return res.data["status"];
      } else {
        return false;
      }
    } catch (error) {
      return [false, error.response.msg] ;
    }
  },

  allCareersData : [],
  allCareersDataApi: async () => {
    let res = await axiosPublic.get(`/getAllCareer`);
    if (res.data["status"] === "success") {
      set({ allCareersData: res.data["data"] });
    } else {
      return false;
    }
  }
  
}));

export default careerStore;
