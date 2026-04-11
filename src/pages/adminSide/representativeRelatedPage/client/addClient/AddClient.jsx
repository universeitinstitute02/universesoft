import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { uploadImg } from "../../../../../uploadImage/UploadImage";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";




const AddClient = () => {

    const getToken = localStorage.getItem("representativeToken");
    const axiosPublic = useAxiosPublic();

    const config = {
        headers: {
            Authorization: getToken,
        },
    };



    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        const address = form.address.value;
        const businessType = form.businessType.value;

        const image = form.image.files[0];

        if (password != confirm_password) {
            setLoading(false);
            toast.error("Your password and confirm password  not match. Please try again");
            return;
        }

        let clientImage = ''
        if (!image?.name) {
            clientImage = ''
        } else {
            clientImage = await uploadImg(image);
        }






        setLoading(true);

        // Simulate form submission
        try {
            const data = { name, phone, password, clientImage, address, businessType }

            // console.log(data);
            const res = await axiosPublic.post(`/create-client`, data, config)

            if (res) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Data has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }


        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: error.response.data.msg,
                showConfirmButton: false,
                timer: 1500
            });

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Add Client</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Upload Client's Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="">
                        <label htmlFor="name">Client's Name</label>
                        <input type="text" name="name" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Client's phone</label>
                        <input type="text" name="phone" className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" className="w-full px-4 py-2 border rounded-md" />
                    </div>


                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" name="confirm_password" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className="">
                        <label htmlFor="name">Client's Address</label>
                        <input type="text" name="address" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Business Type</label>
                        <input type="text" name="businessType" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload  Picture</p>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>


                    </div>



                </div>



                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>


        </div>
    );
};

export default AddClient;
