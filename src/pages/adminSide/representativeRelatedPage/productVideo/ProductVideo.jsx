import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { MdAccountBalance, MdOutlineDesignServices, MdOutlineShoppingCart } from 'react-icons/md';
import { RxArrowBottomRight } from 'react-icons/rx';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import ReactPlayer from 'react-player';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const ProductVideo = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();

    const { data: productVideos = [] } = useQuery({
        queryKey: ['productVideos'],
        queryFn: async (req, res) => {
            res = await axiosPublic.get('/product-all-videos');
            return res.data.data;
        }
    })

    window.scrollTo(0, 0);



    return (
        <div>
            <Helmet>
                <title>Dashboard | Product Video </title>
            </Helmet>
            <p className="text-4xl font-bold text-center my-2">Product Video</p>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                {/* Card 1 */}

                {
                    productVideos?.map((product) => <div className="bg-white rounded-lg shadow-md pb-10  border">
                        <ReactPlayer
                            url={`${product.videoUrl}`}
                            width="100%"
                            height="100%"
                            playIcon={<IoPlayCircleSharp className="text-7xl text-red-600" />} // Custom play button
                        />
                        <p className="font-bold text-center my-2">{product?.title}</p>

                    </div>)
                }









            </div>
        </div>
    );
};

export default ProductVideo;