import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();


const serviceStore = create((set)=>({
    serviceDataList : [],
    serviceDataListApi : async ()=>{
        const res = await axiosPublic.get(`/get-all-service`);
        if(res.data.status ==='success'){
            set({serviceDataList : res.data.data});
        }else{
            console.log('Failed to get service data list');
        }
    }
}));

export default serviceStore;