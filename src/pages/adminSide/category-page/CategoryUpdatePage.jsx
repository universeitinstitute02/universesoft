import React, { useEffect, useState } from 'react';
import { uploadImg } from './../../../uploadImage/UploadImage';
import categoryStore from '../../../api-request/category-api/categoryApi';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CategoryUpdatePage = () => {
    const { id } = useParams();
    const {
        singleCategoryDataListApi,
        singleCategoryDataList,
        categoryList,
        categoryListApi,
        categoryUpdateApi  
    } = categoryStore();

    const {image : upcomingImg} = singleCategoryDataList;


    const [loader, setLoader] = useState(false);
    const [preview, setPreview] = useState(null); 

    useEffect(() => {
        (async () => {
            setLoader(true);
            await singleCategoryDataListApi(id);
            setLoader(false);
        })();
    }, [id]);

    useEffect(() => {
        (async () => {
            await categoryListApi();
        })();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.files[0];

        let imgUrl = upcomingImg

        if (!image?.name) {
            imgUrl = upcomingImg
        }

        imgUrl = await uploadImg(image);

        const payload = {
            name,
            image: imgUrl,
        }

        setLoader(true);
        const res = await categoryUpdateApi(id,payload);  // Assuming you have an update API method
        setLoader(false);
        if (res) {
            setLoader(true);
            await singleCategoryDataListApi(id);
            setLoader(false);
            Swal.fire({
                icon: 'success',
                title: 'Category updated successfully',
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Failed to update category',
                showConfirmButton: false,
                timer: 1500,
            });
        }
        e.target.reset();
    };

    return (
        <>
        <Helmet>
            <title>Dashboard  | Category Update</title>
        </Helmet>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Update Category</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* Category Name Field */}
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Category Name
                    </label>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                    <input 
                        type="text" 
                        name="name"
                        defaultValue={singleCategoryDataList?.name}
                        key={Date.now()}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {/* Image Preview */}
                    
                </div>
                </div>
                
                {/* Image Upload Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                    <input 
                        type="file" 
                        name="image"
                        accept="image/*"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {/* Image Preview */}
                    
                </div>
                <div className="avatar">
                <div className="w-12">
                    <img key={Date.now()} className='rounded-full' src= { singleCategoryDataList?.image || `  https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`} />
                    </div>
                </div>
                
                {/* Submit Button */}
                <button 
                    type="submit" 
                    className={`w-full py-2 px-4 rounded-lg transition-colors text-white ${loader ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={loader}
                >
                    {loader ? 'Updating...' : 'Update'}
                </button>
            </form>
        </div>
        </>
    );
};

export default CategoryUpdatePage;
