import { create } from "zustand";
import { getToken } from "../../helper/sessionHelper";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";


const axiosPublic = useAxiosPublic();

const config = {
  headers: {
    token: getToken(),
  },
};

const serviceStore = create((set) => ({
  createServiceApi: (postBody) => {
    try {
      return axiosPublic.post('/create-service', postBody, config)
        .then((res) => {
          if(res.data.status === "success"){
            return true;
          }
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
    } catch (error) {
      return false;
    }
  },
  getAllServiceData: [],
  getAllServiceApi: async () => {
    try {
      let res = await axiosPublic.get(`/get-all-service`);
      if (res.data.status === "success") {
        set({ getAllServiceData: res.data["data"] });
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  },
  deleteServiceApi: (id) => {
    // let url = `${baseUrl}/delete-service/${id}`;
    return axiosPublic
      .delete(`/delete-service/${id}`, config)
      .then((res) => {
        if (res.data.status === "success") {
          return true;
        } else {
          return false;
        }
      })
      .catch((e) => {
        return e;
      });
  },
  updateServiceApi: async (id,payload) => {
    const toastId = toast.loading("Updating...");
    let res = await axiosPublic.put(`/update-service/${id}`, payload);
    if (res.data["status"] === "success") {
      toast.success("Member updated successfully!!", { id: toastId });
      return true;
    } else {
      return false;
    }
  },
  getSingleServiceData : [],
  getSingleServiceApi: async (id) => {
    try {
      let res = await axiosPublic.get(`/get-service-by-id/${id}`);
      if (res.data.status === "success") {
        set({ getSingleServiceData: res.data["data"] });
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  }
}));

export default serviceStore;
