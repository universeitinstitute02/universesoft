import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';


export const registrationApi = async (postBody) => {
    const axiosPublic = useAxiosPublic();

    try {
        let res = await axiosPublic.post(`/CreateAdmin`,postBody);
        console.log(`res is ${res}`);
        if(res.data.status==="Success"){
            return res.data["status"]
        }else {
            return false;
        }
    } catch (error) {
        return console.log(error)
    }
}