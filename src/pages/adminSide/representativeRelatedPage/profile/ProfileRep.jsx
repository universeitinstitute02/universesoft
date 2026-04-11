import React from 'react';
import { Helmet } from 'react-helmet-async';
import DataTab from './DataTab';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const ProfileRep = () => {
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
            const res = await axiosPublic.get(`/single-representative/${id}`, config);
            return res.data.data;
        }
    });


    const { data: repClients = [] } = useQuery({
        queryKey: ['repClients'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllClientbyRepresentativeId/${id}`);
            return res.data.data;
        }
    });



    console.log(repClients);

    const { address, distic, division, education, image, name, phone, referNumber, referUserId, referenceId, representative_id, role, status, upazila } = repData;

    return (
        <div className='' >
            <Helmet>
                <title>Representative Information</title>
            </Helmet>
            <div className="flex gap-3 justify-between">
                <div className="lg:w-3/4">
                    <DataTab repClients={repClients}></DataTab>
                </div>
                <div className="lg:w-1/4 justify-between">


                    <div className="bg-gradient-to-r  from-[#302ead] to-[#061a8b] bg-opacity-90 p-1 rounded-lg text-black">
                        <div className="relative bg-gray-100 rounded-md shadow-md">
                            <div className="relative">
                                <div className="flex gap-1 justify-end items-center p-1">
                                    <img className="h-6 object-cover" src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868184/UniverseSoftTech/Image/htnalzbw4rj4jigwrckj.png" alt="Logo" />
                                </div>
                                <div className="h-[120px] relative flex flex-col justify-center items-center gap-5">
                                    <div className="bg-primary/70 size-16 rounded-full relative overflow-hidden">
                                        <img
                                            className="h-full rounded-full object-cover p-1"
                                            src={image}
                                            alt={name}
                                        />
                                    </div>

                                </div>

                                <div className=" flex justify-around w-3/4 rounded-lg mx-auto ">
                                    <div className="text-[12px]">
                                        <h2 className=" font-bold capitalize">Name: {name}</h2>

                                        <h2 className=""><span className="font-bold">Phone: </span>{phone}</h2>
                                        <h2 className=""><span className="font-bold">Division: </span>{division}</h2>
                                        <h2 className=""><span className="font-bold">District: </span>{distic}</h2>
                                        <h2 className=""><span className="font-bold">Upzilla: </span>{upazila}</h2>
                                        <h2 className=""><span className="font-bold">Address: </span>{address}</h2>
                                        {/* <h2 className=""><span className="font-bold">Education: </span>{education}</h2> */}

                                    </div>

                                </div>
                                <div className="pb-7">
                                    <div className="bg-gradient-to-r from-primary to-primary/70 w-[55%] text-white font-semibold mt-5 ml-auto py-2 text-[12px] pl-5">
                                        <p>Refer No: {referNumber}</p>
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

export default ProfileRep;
