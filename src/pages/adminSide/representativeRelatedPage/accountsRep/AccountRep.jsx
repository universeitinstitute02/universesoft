import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { BsBank2 } from 'react-icons/bs';
import Swal from 'sweetalert2';

const AccountRep = () => {



    const rToken = localStorage.getItem("representativeToken");
    const axiosPublic = useAxiosPublic();

    const config = useMemo(() => ({
        headers: {
            Authorization: rToken,
        },
    }), [rToken]);

    const { data: bankInfoList = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['bankInfoList'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/rep-bank-info`, config);

            return res.data.data;
        }
    });


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {

                const res = await axiosPublic.delete(`/rep-bank-info/${id}`, config);
                if (res) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
               
            }
        });
    }





    return (
        <div className="w-11/12 mx-auto my-24">
            <Helmet>
                <title>Soft Tech | Account Representative</title>
            </Helmet>
            <p className="text-4xl font-bold text-center my-2">Account Information</p>
            <Link to={'/dashboard/add-rep-account-info'}>
                <button className="btn btn-primary my-4">Add Information</button>
            </Link>
            <div className="grid grid-cols-2 justify-center gap-6">

                {bankInfoList?.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 w-full ">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-6">
                            <BsBank2 className='size-20' />
                        </div>
                        {/* Details */}
                        <div className="text-gray-700">
                            <p className="mb-2">
                                <span className="font-bold">Account Name:</span> {item.accountName}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Account Number:</span> {item.accountNumber}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Bank Name:</span> {item.bankName}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Type of Account:</span> {item.typeOfAccount}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Branch Name:</span> {item.branchName}
                            </p>

                            <p className="mb-2">
                                <span className="font-bold">Routing Number:</span> {item.routingNumber}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <div className="">
                                <Link to={`/dashboard/update-rep-account-info/${item._id}`}>
                                    <button className="btn btn-primary my-4">Update Information</button>
                                </Link>
                            </div>
                            <div className="">
                                <button onClick={() => handleDelete(item._id)} className="btn bg-red-600 text-white my-4">Delete Information</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccountRep;
