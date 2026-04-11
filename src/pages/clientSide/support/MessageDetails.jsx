import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import formatDateTime from '../../../hooks/useDateTime';
import { updateAlert } from '../../../helper/updateAlert';
import Swal from 'sweetalert2';

const MessageDetails = () => {

    const { id } = useParams();
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const axiosPublic = useAxiosPublic();
    const { data: messageData = [] ,refetch, isLoading } = useQuery({
        queryKey: ['messageData',id],
        queryFn: async (req, res) => {
            res = await axiosPublic.get(`/support/${id}`, config);
            return res.data.data;
        }
    })

    console.log(messageData);

    const statusUpdate = async (id) => {
        let resp = await updateAlert();
        try {
            if (resp.isConfirmed) {
                let res = await axiosPublic.put(`/support/${id}`,{}, config);
                if (res) {
                    Swal.fire({
                        title: "Status Updated",
                        icon: "success",
                        confirmButtonText: "Okay"
                    })
                    refetch();
                    return;
                }
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Status update failed",
                icon: "error",
                confirmButtonText: "Okay"
            })
        }   
    }

    if(isLoading){
        return <div className='flex h-screen justify-center items-center ' >Loading...</div>
    }

    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Message Details</h2>
                <div className="space-y-3">
                    <div>
                        <span className="font-bold text-gray-700">Name:</span>{" "}
                        {messageData.name || "N/A"}
                    </div>
                    <div>
                        <span className="font-bold text-gray-700">Phone Number:</span>{" "}
                        {messageData.phoneNumber || "N/A"}
                    </div>
                    <div>
                        <span className="font-bold text-gray-700">Message:</span>{" "}
                        {messageData.message || "No message provided"}
                    </div>
                    <div>
                        <span className="font-bold text-gray-700">Status:</span>{" "}
                        <button onClick={() => statusUpdate(id)} ><span
                            className={`px-3 py-1 rounded-full text-sm ${messageData.status
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                                }`}
                        >
                            {messageData.status === "pending" ? "Pending" : "Resolved"}
                        </span></button>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700">Send Time : </span>{" "}
                        {messageData.createdAt ? new Date(messageData.createdAt).toLocaleString() : 'Time'}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDetails;