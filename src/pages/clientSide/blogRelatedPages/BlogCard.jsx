import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const createdDate = new Date(blog.createdAt).toLocaleDateString();
    return (
        <div className="w-full my-5 max-w-[340px] sm:max-w-[400px]  md:max-w-[800px] flex flex-col md:flex-row gap-10 bg-gray-200 shadow-lg py-5  md:py-10 px-3 md:px-5 rounded-3xl mx-auto md:items-center">
            <img className="w-full md:size-44 object-cover rounded-lg shadow-lg shadow-primary/50" src={blog?.blog_banner_image} alt="" />
            <div className="">
                <p className="font-bold text-gray-600 text-sm">{ createdDate }</p>
                <p className="font-bold text-sm md:text-base">{blog?.blogTitle}</p>
                <p className="font-bold text-gray-600 text-sm">{ blog?.author_name }</p>
                <p className="font-bold text-gray-600 text-sm">{ blog?.meta_keywords }</p>
                <div className=" max-h-[100px] md:h-[100px] overflow-hidden text-gray-600 mt-3">{blog?.blog_description}</div>
                <Link to={`/blogDetails/${blog?._id}`}>
                    <button className='btn bg-universe_primary text-white'>Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;