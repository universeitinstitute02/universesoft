import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Blogdetails = () => {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: blogData = {}, refetch: blogDataRefetch, isLoading } = useQuery({
        queryKey: ['blogData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blog/single/${id}`)
            return res?.data.data
        }
    })
    console.log(blogData);
    const createdDate = new Date(blogData.createdAt).toLocaleDateString();


    return (
        <div className='lg:px-20'>
            <p className="text-4xl m-10"><span className='text-primary '>Blog</span> Details</p>
            <div className=' gap-5 sm:m-4 '>
                <div className=' mx-auto'>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        

                        <div className="">
                            <div className='flex items-center gap-10 '>
                                <p className='pt-2 text-white px-10 bg-primary'>{createdDate}</p>
                                <p className='text-[15px] lg:text-2xl font-bold'>{blogData?.blogTitle} by ({blogData?.author_name})</p>
                            </div>

                            <div className='pb-10'>
                                <div className="px-2">
                                    <p className="font-bold text-gray-600 text-sm"></p>
                                    <p className="font-bold text-gray-600 text-sm">{blogData?.meta_keywords}</p>
                                </div>
                                <p className='px-2 mt-4'>
                                    {blogData?.blog_description}
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <img
                                className='w-1/2 mx-auto'
                                src={blogData?.blog_banner_image}
                                alt=""

                            />
                        </div>
                    </div>


                </div>



            </div>


        </div>
    );
};

export default Blogdetails;