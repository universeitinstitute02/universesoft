import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const UserProfile = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    // const managementData = [
    //     { id: 1, name: 'Alice Johnson', phone: '123-456-7890', referNo: "AL-0012", division: "Dhaka", district: "Gazipur", upzilla: "Gazipur", address: "Gazipur, Dhaka", education: "B.Sc in Computer Science", email: 'alice@company.com', experience: 15, imgUrl: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
    // ];

    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: repData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['repData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/single-user/${id}`, config);
            return res.data.data;
        }
    });

    if(isLoading){
        return <div>Loading...</div>
    }



    console.log(repData);

    const { name,profilePhoto,email,contactNumber,role} = repData;

    return (
        <div className='' >
            <Helmet>
                <title>Representative Information</title>
            </Helmet>
            <div className=" flex justify-center ">
                
                <div className=" w-[30%] justify-between">


                    <div className="bg-gradient-to-r  from-[#302ead] to-[#061a8b] bg-opacity-90 p-1 rounded-lg text-black">
                        <div className="relative bg-gray-100 rounded-md shadow-md">
                            <div className="relative">
                                <div className="flex gap-1 justify-end items-center p-1">
                                    <img className="h-6 object-cover" src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868184/UniverseSoftTech/Image/htnalzbw4rj4jigwrckj.png" alt="Logo" />
                                </div>
                                <div className="h-[120px] relative flex flex-col justify-center items-center gap-5">
                                    <div className="bg-primary/70 size-16 rounded-full relative overflow-hidden">
                                        <img
                                            className="w-full rounded-full object-cover p-1"
                                            src={profilePhoto}
                                            alt={name}
                                        />
                                    </div>

                                </div>

                                <div className=" flex justify-around w-3/4 rounded-lg mx-auto ">
                                    <div className="text-[12px]">
                                        <h2 className=" font-bold capitalize">Name: {name}</h2>

                                        <h2 className=""><span className="font-bold">Phone: </span>{contactNumber}</h2>
                                        <h2 className=""><span className="font-bold">Email : </span>{email}</h2>
                                        {/* <h2 className=""><span className="font-bold">Education: </span>{education}</h2> */}

                                    </div>





                                </div>
                                <div className="pb-7">
                                    <div className="bg-gradient-to-r from-primary to-primary/70 w-[55%] text-white font-semibold mt-5 ml-auto py-2 text-[12px] pl-5">
                                        <p>Role : {role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default UserProfile;
