import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Payment = () => {

    const { id } = useParams();
    const getToken = localStorage.getItem("clientToken");
    const axiosPublic = useAxiosPublic();
    const { message, setMessage } = useState(false);
    const [loader, setLoader] = useState(false);

    const config = {
        headers: {
            Authorization: getToken
        },
    };
    const { data: request = [] } = useQuery({
        queryKey: ['request'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/single-product-requested/${id}`, config);
            return res.data.data;
        }
    })

    console.log(request);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;


        const productName = request.product_id?.productName;
        console.log('product_name', productName)
        const client = request.client_id?._id;
        const representative = request?.representative_id?._id;
        const product = request?.product_id?._id;

        const duration = request?.duraction;
        const transaction_id = form.transaction_id.value;
        const paidAmount = form.paid_amount.value;
        const dueAmount = (parseInt(request?.duraction) * parseInt(request?.product_id?.price)) - paidAmount;


        const payload = { client, representative, product, duration, transaction_id, paidAmount, dueAmount, productName };

        try {
            setLoader(true);
            let res = await axiosPublic.post(`/MakePayments`, payload, config);
            setLoader(false);
            if (res) {
                Swal.fire({
                    title: 'Payment Successful',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
                form.reset();
                return;
            }
        } catch (error) {
            setLoader(false);
            Swal.fire({
                icon: 'error',
                title: 'Failed to make payment',
                showConfirmButton: false,
                timer: 1500,
            })
        }

    }

    return (
        <>
            <Helmet>
                <title>Dashboard | Payments</title>
            </Helmet>

            <p className='text-primary text-4xl text-center my-5 font-bold underline'>Payment <span className='text-primary '>Procedure</span></p>
            <div className="grid lg:grid-cols-3 lg:gap-20 gap-5 lg:my-20  w-10/12 mx-auto lg:p-10 p-1  grid-cols-1">

                {/* Bkash card  */}
                <div className="card bg-base-100  shadow-xl border">
                    <figure className='h-1/2'>
                        <img
                            src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1735637432/UniverseSoftTech/public/aj96tiqib1emtkvkf1ja.png"
                            alt="Bkash Merchant" className='w-1/2 lg:w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="lg:card-title text-xs text-pink-600">Bkash Payment Method</h2>
                        <p className='text-secondary text-xs lg:font-body font-semibold'>Merchant No: 01886061401</p>
                        <div className="card-actions justify-end">
                            <button className="lg:btn p-1 rounded-lg bg-pink-400 lg:bg-pink-600 text-white lg:text-white text-xs" onClick={() => document.getElementById('my_modal_4').showModal()}>Payment</button>
                        </div>
                    </div>
                </div>

                {/* Nogod card  */}
                <div className="card bg-base-100  shadow-xl border">
                    <figure className='h-1/2'>
                        <img
                            src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1735637431/UniverseSoftTech/public/erpf87bdboo6mzcmzmtr.jpg"
                            alt="Nogod Merchant" className='w-1/2 lg:w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="lg:card-title text-xs text-pink-600">Nogod Payment Method</h2>
                        <p className='text-secondary text-xs lg:font-body font-semibold'>Merchant No: 01839702200</p>
                        <div className="card-actions justify-end">
                            <button className="lg:btn p-1 rounded-lg bg-primary lg:bg-primary text-white lg:text-white text-xs" onClick={() => document.getElementById('my_modal_4').showModal()}>Payment</button>
                        </div>
                    </div>
                </div>

                {/* Duch Bangla card  */}

                <div className="card bg-base-100  shadow-xl border">
                    <figure className='h-1/2'>
                        <img
                            src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1735637432/UniverseSoftTech/public/pvlt3iqt4yziznmbipqz.png"
                            alt="DuchBangla Merchant" className='w-40 lg:w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="lg:card-title text-xs text-secondary">Duch Bangla Payment</h2>
                        <p className='text-secondary text-xs lg:font-body font-semibold'>A/C: 3031100005674</p>
                        <div className="card-actions justify-end">
                            <button className="lg:btn p-1 rounded-lg bg-secondary lg:bg-secondary text-white lg:text-white text-xs" onClick={() => document.getElementById('my_modal_4').showModal()}>Payment</button>
                        </div>
                    </div>
                </div>











                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">


                        <section>
                            <div className=' text-white px-10 '>
                                <div className='flex justify-center items-center pt-1'>
                                    <img src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868184/UniverseSoftTech/Image/htnalzbw4rj4jigwrckj.png" className='w-32
                    p-2' alt="" />
                                </div>

                                <div className='text-black'>
                                    <h2 className='lg:text-3xl font-bold text-center'>Payment Form</h2>
                                </div>

                                {/* form section  */}
                                <div className=''>

                                    <section className="text-gray-600 body-font relative">
                                        <div className="container lg:px-5  mx-auto">
                                            <div className="flex flex-col text-center w-full ">

                                                <p className='text-[10px] lg:text-[12px] lg:text-sm  '>Bkash Merchant No: 01886061401</p>
                                                <p className='text-[10px] lg:text-[12px] lg:text-sm '>Nogod Merchant No: 01839702200</p>
                                                <p className='text-[10px] lg:text-[12px] lg:text-sm '>DBBL A/C: 3031100005674</p>
                                            </div>
                                            <div className="lg:w-full md:w-full mx-auto bg-white py-5 rounded-xl">

                                                <div className="lg:border lg:p-4 rounded-2xl">
                                                    <form action="" onSubmit={handleSubmit} className=' w-full -m-2'>
                                                        <div className=' mx-auto'>
                                                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                                                {/* Representative name  */}
                                                                <div className="p-2 w-full">
                                                                    <div className="relative">
                                                                        <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Representative Name</label>
                                                                        <input required type="text" readOnly id="name" name="name" value={request?.representative_id?.name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                                    </div>
                                                                </div>
                                                                {/* Duration */}
                                                                <div className="p-2 w-full">
                                                                    <div className="relative">
                                                                        <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Duration</label>
                                                                        <input required type="text" readOnly value={request?.duraction} id="payment_number" name="payment_number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                                    </div>
                                                                </div>


                                                                {/* Transaction ID  */}
                                                                <div className="p-2 w-full">
                                                                    <div className="relative">
                                                                        <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Transaction ID</label>
                                                                        <input required type="text" name="transaction_id" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                                    </div>
                                                                </div>

                                                                {/* Paid Amount  */}
                                                                <div className="p-2 w-full">
                                                                    <div className="relative">
                                                                        <label className="leading-7 text-[12px] lg:text-sm text-gray-600">Paid Amount</label>
                                                                        <input required type="text" name="paid_amount" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>



                                                        <div className="">
                                                            <p className="text-4xl font-bold">
                                                                Total: {parseInt(request?.duraction) * parseInt(request?.product_id?.price)}
                                                            </p>
                                                        </div>

                                                        {/* website  */}

                                                        <div className="p-2 flex justify-center items-center mx-auto">
                                                            <button
                                                                type="submit"
                                                                className={`w-full p-2 text-white rounded ${loader ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                                                                    }`}
                                                                disabled={loader}
                                                            >
                                                                {loader ? (
                                                                    <div className="flex items-center justify-center">
                                                                        <svg
                                                                            className="w-5 h-5 mr-2 text-white animate-spin"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <circle
                                                                                className="opacity-25"
                                                                                cx="12"
                                                                                cy="12"
                                                                                r="10"
                                                                                stroke="currentColor"
                                                                                strokeWidth="4"
                                                                            ></circle>
                                                                            <path
                                                                                className="opacity-75"
                                                                                fill="currentColor"
                                                                                d="M4 12a8 8 0 018-8v8H4z"
                                                                            ></path>
                                                                        </svg>
                                                                        Processing...
                                                                    </div>
                                                                ) : (
                                                                    "Submit"
                                                                )}
                                                            </button>
                                                        </div>
                                                    </form>



                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}

                                <button className="btn bg-secondary text-white">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>


            </div>

        </>
    );
};

export default Payment;