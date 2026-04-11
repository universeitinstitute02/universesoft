import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const axiosPublic = useAxiosPublic();


const portfolioStore = create((set)=>({
    portfolioCreateApi : async (payload)=>{
        const res = await axiosPublic.post(`/portfolio/create`,payload);
        if(res.data["status"] ==='success'){
            return true ;
        }else{
            return false;
        }
    },
    portfolioDataList : [],
    portfolioDataListApi :async ()=>{
        let res = await axiosPublic.get(`/get-all-portfolio`);
        if(res.data.status ==='success'){
            set({portfolioDataList: res.data.data});
        }else{
            return false;
        }
    },
    updatePortfolioApi : async (id,payload) => {
        let res = await axiosPublic.put(`/portfolio/update/${id}`,payload);
        if(res.data["status"] ==='success'){
            return true
        }else{
            return false;
        }
    },
    singlePortfolioData : [],
    singlePortfolioDataApi : async (id) => {
        let res = await axiosPublic.get(`/single/portfolio/${id}`);
        if(res.data.status ==='success'){
            set({singlePortfolioData: res.data.data});
        } else{
            return false;
        }
    },
    portfolioDataDeleteApi :async (id)=>{ 
        let res = await axiosPublic.delete(`/portfolio/delete/${id}`);
        if(res.data["status"] ==='success'){
            return true ;
        } else{
            return false;
        }
    }
    
}));

export default portfolioStore;