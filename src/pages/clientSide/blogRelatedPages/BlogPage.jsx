import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from './BlogCard';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const BlogPage = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all/blog');
            return res.data.data;
        }
    })

    console.log(blogs);
    return (
        <div className='sm:px-20 px-5 my-10 min-h-screen'>
            <Helmet>
                <title>SoftTech | Blogs</title>
            </Helmet>
            <p className="text-4xl m-10 text-center"><span className='text-primary border-b-2'>Latest</span> Blogs</p>

            {
                blogs?.map(blog => <BlogCard blog={blog}></BlogCard>)
            }
            
            
            {/* <div className='flex gap-10 flex-col'>
                {
                    (showingBlogs.slice(firstCardId, firstCardId + cardPerSlice)).map((blog, idx) => <BlogCard key={idx} blog={blog} />)
                }
            </div> */}
            {/* <div className="mt-4 flex justify-center items-center gap-6">
                <button
                    onClick={handlePrev}
                    disabled={firstCardId === 0}
                    className={`px-7 btn bg-primary text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max ${firstCardId === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Prev
                </button>
                <div>
                    {firstCardId / cardPerSlice + 1} /{Math.ceil(totalCard / cardPerSlice)}
                </div>
                <button
                    onClick={handleNext}
                    disabled={firstCardId + cardPerSlice >= totalCard}
                    className={`px-7 btn bg-primary text-white hover:text-black  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max ${firstCardId + cardPerSlice >= totalCard ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
            </div> */}
        </div>
    );
};

export default BlogPage;