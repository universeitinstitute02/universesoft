import axios from 'axios';

// const backendUrl = `http://localhost:3000/api/v1`;
const backendUrl = `https://soft-tech-server-liart.vercel.app/api/v1`;


const axiosPublic = axios.create({
    baseURL: backendUrl
})

const useAxiosPublic = () => {
    return axiosPublic;
}


export default useAxiosPublic;