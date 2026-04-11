import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DataTab from '../../adminSide/representativeRelatedPage/profile/DataTab';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import ClientDataTab from './ClientDataTab';

const ClientProfileByAdmin = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    

    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: clientData = {}, refetch, isError, isLoading } = useQuery({
        queryKey: ['clientData',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/client-by-admin/${id}`, config);
            return res.data.data;
        }
    });



    console.log(clientData);

    const { name,phone,address,clientImage,businessType,role,productType } = clientData;

    return (
        <div className='' >
            <Helmet>
                <title>Client Information</title>
            </Helmet>
            <div className="flex gap-3 justify-between">
                <div className="lg:w-3/4">
                    <ClientDataTab/>
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
                                            src={clientImage}
                                            alt={name}
                                        />
                                    </div>

                                </div>

                                <div className=" flex justify-around w-3/4 rounded-lg mx-auto ">
                                    <div className="text-[12px]">
                                        <h2 className=" font-bold capitalize">Name: {name}</h2>

                                        <h2 className=""><span className="font-bold">Phone: </span>{phone}</h2>
                                        <h2 className=""><span className="font-bold">Business Type: </span>{businessType}</h2>
                                        <h2 className=""><span className="font-bold">Product: </span>{productType}</h2>
                                        <h2 className=""><span className="font-bold">Address: </span>{address}</h2> 
                                    </div>





                                </div>
                                <div className="pb-7">
                                    <div className="bg-gradient-to-r from-primary to-primary/70 w-[55%] text-white font-semibold mt-5 ml-auto py-2 text-[12px] pl-5">
                                        <p>Status: {role}</p>
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

export default ClientProfileByAdmin;
