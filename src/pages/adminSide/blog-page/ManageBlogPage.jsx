import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { NavLink, useParams } from 'react-router-dom'
import blogStore from '../../../api-request/blog-api/blogStore'
import moment from "moment/moment";
import { deleteAlert } from '../../../helper/deleteHelperAlert'
import toast from 'react-hot-toast'

const ManageBlogPage = () => {
    const { blogDataListApi, blogDataList,blogDeleteApi } = blogStore();
    const {id} = useParams();

    useEffect(() => {
      (async()=>{
        await blogDataListApi();
      })()
    }, []);



    const handleDelete = async (id) => {
      console.log(id);
      const resp  = await deleteAlert();
      if(resp.isConfirmed){
        let res = await blogDeleteApi(id);
        if(res){
            await blogDataListApi();
            toast.success("Blog deleted successfully");
        }else{
            toast.error("Failed to delete blog");
        }
      }
    };

    return (
        <div>
            <div className="max-w-5xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Blog Posts</h2>

                {/* Blog Table */}
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-center">Blog Title</th>
                            <th className="py-3 px-6 text-center">Author Name</th>
                            <th className="py-3 px-6 text-center">Banner Image</th>
                            <th className="py-3 px-6 text-center">Date</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {blogDataList.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-center">{item?.blogTitle}</td>
                                <td className="py-3 px-6 text-center">{item?.author_name}</td>
                                <td className="py-3 px-6 text-center">
                                    <img className='w-14 h-14 rounded-full mx-auto ' src={item?.blog_banner_image} alt={item?.blogTitle} />
                                </td>
                                <td className="py-3 px-6 text-center">{moment(item?.createdAt).format("MMMM Do YYYY")}</td>
                                <td className="py-3 px-6 text-center">
                                    <button className="hover:text-blue-700 text-black">
                                        <NavLink to={`/dashboard/blog-update/${item._id}`}>
                                            <FaRegEdit className='text-black' size={"25px"} />
                                        </NavLink>
                                    </button>
                                    <button className="ml-2" onClick={()=>{handleDelete(item._id)}}>
                                        <MdDeleteOutline size={"25px"} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageBlogPage;
