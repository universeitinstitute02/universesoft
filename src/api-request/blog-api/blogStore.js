import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { getToken } from "../../helper/sessionHelper";
const axiosPublic = useAxiosPublic();




const blogStore = create((set)=>({
    blogCreateApi : async (payload)=>{
        const res = await axiosPublic.post(`/blog/create`,payload);
        if(res.data["status"] ==='success'){
            return true ;
        } else{
            return false;
        }
    },
    blogDataList : [],
    blogDataListApi : async ()=>{
        let res = await axiosPublic.get(`/all/blog`);
        if(res.data["status"] ==='success'){
            set({blogDataList:res.data.data});
        }
    },
    singleBlogData : [],
    singleBlogDataApi : async (id) => {
        let res = await axiosPublic.get(`/blog/single/${id}`);
        if(res.data["status"] ==='success'){
            set({singleBlogData: res.data.data});
        } else{
            return false;
        }
    },
    blogUpdateApi : async (id,payload) => {
        let res = await axiosPublic.put(`/blog/update/${id}`,payload);
        console.log(payload);
        if(res.data["status"] ==='success'){
            return true ;
        } else{
            return false;
        }
    },
    blogDeleteApi : async (id) => {
        let res = await axiosPublic.delete(`/blog/delete/${id}`);
        if(res.data["status"] ==='success'){
            console.log(res);
            return true ;
        } else{
            return false;
        }
    },
}));


export default blogStore;