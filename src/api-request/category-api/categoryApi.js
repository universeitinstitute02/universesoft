import useAxiosPublic from './../../hooks/useAxiosPublic';
import { create } from 'zustand';

const axiosPublic = useAxiosPublic(); // Initialize axiosPublic hook

const categoryStore = create((set) => ({
  categoryList: [],
  singleCategoryDataList: [],

  categoryCreateApi: async (payload) => {
    try {
      const res = await axiosPublic.post(`/category/create`, payload);
      return res.data["status"] === 'success';
    } catch (error) {
      console.error('Error creating category:', error);
      return false;
    }
  },

  singleCategoryDataListApi: async (id) => {
    try {
      const res = await axiosPublic.get(`/category-by-id/${id}`);
      if (res.data["status"] === 'success') {
        set({ singleCategoryDataList: res.data.data });
      } else {
        console.error('Failed to fetch single category data');
      }
    } catch (error) {
      console.error('Error fetching single category data:', error);
    }
  },


  categoryListApi: async () => {
    try {
      const res = await axiosPublic.get(`/category/list`);
      if (res.data.status === 'success') {
        set({ categoryList: res.data.data });
      } else {
        console.error('Failed to get category data list: ', res.data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error fetching category list:', error);
    }
  },
  categoryUpdateApi : async (id,payload)=>{
    let res = await axiosPublic.put(`/category/update/${id}`,payload);
    if(res.data["status"] ==='success'){
      return true;
    } else{
      return false;
    }
  },
  categoryDeleteApi : async (id) => {
    let res = await axiosPublic.delete(`/category/delete/${id}`);
    if(res.data["status"] ==='success'){
      return true ;
    } else{
      return false;
    }
  }
}));

export default categoryStore;
