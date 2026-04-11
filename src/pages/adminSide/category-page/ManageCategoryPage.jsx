import React, { useEffect, useState } from 'react'
import categoryStore from '../../../api-request/category-api/categoryApi'
import { Link } from 'react-router-dom';
import { deleteAlert } from '../../../helper/deleteHelperAlert';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageCategoryPage = () => {
  const {categoryList,categoryListApi,categoryDeleteApi} = categoryStore();
  const [loader,setLoader] = useState(false);
  useEffect(()=>{
    (async()=>{
      setLoader(true);
      await categoryListApi();
      setLoader(false);
    })()
  },[])
  const deleteCategory = async (id)=>{
    const resp = await deleteAlert();
    if(resp.isConfirmed){
      setLoader(true);
      let res = await categoryDeleteApi(id);
      setLoader(false);
      if(res){
        await categoryListApi();
        Swal.fire({
          title: 'Deleted!',
          text: 'Category has been deleted successfully.',
          icon:'success'
        })
      }else{
        Swal.fire({
          title: 'Failed!',
          text: 'Failed to delete category.',
          icon:'error'
        })
      }
    };
  }
  return (
    <div>
      <Helmet>
        <title>Dashboard | Manage Category Page</title>
      </Helmet>
      <div className="container mx-auto p-6">
        <h1 className='text-center py-5 font-bold text-2xl ' >Category Table</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center text-gray-600 font-semibold">
            <th className="p-4">Category Name</th>
            <th className="p-4">Image</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            categoryList && categoryList.map((item,i)=>{
              return(
                <tr key={i} className="hover:bg-gray-100 text-center">
                  <td className="border border-gray-300 p-4">{item.name}</td>
                  <td className="border border-gray-300 p-4 bg-black">
                    <img src={item.image||`https://via.placeholder.com/100`} alt={""} className="w-16 h-16 rounded-full block mx-auto " />
                  </td>
                  <td className="border border-gray-300 p-4">
                    <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
                      <Link to={`/dashboard/category-update/${item._id}`}>Edit</Link>
                    </button>
                    <button onClick={()=>deleteCategory(item._id)} className="py-2 px-4 bg-red-500 text-white rounded-md ml-2">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ManageCategoryPage
