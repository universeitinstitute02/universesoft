import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import formatDateTime from "../../../../hooks/useDateTime";


const ProductReq = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
   


    const { id } = useParams();

    const axiosPublic = useAxiosPublic();

    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getClientProductReq/${id}`, config);
            return res.data.data;
        }
    })

    // console.log(products);

   

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Client's Product List</h1>
            
            {products.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-200 text-[12px]">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">#</th>
                            <th className="py-2 px-4 border-b">Product</th>
                            <th className="py-2 px-4 border-b">Represntative</th>
                            <th className="py-2 px-4 border-b">Duration</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => {
                            const { date, time } = formatDateTime(item.createdAt);
                            return  (<tr className="text-center" key={item?._id}>
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{item?.product_id?.nav_title}</td>
                                <td className="py-2 px-4 border-b">{item?.representative_id?.name}</td>
                                <td className="py-2 px-4 border-b">{item?.month}</td>
                                <td className="py-2 px-4 border-b">{item?.status ? "Approved" : "Pending"}</td>
                                <td className="py-2 px-4 border-b">{date}</td>
                            </tr>
                        )
                        }
                            
                        )
                        }
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500">No products found.</p>
            )}
        </div>
    );
};

export default ProductReq;
