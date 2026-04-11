import React, { useState } from 'react';
import { uploadImg } from './../../../uploadImage/UploadImage';
import categoryStore from '../../../api-request/category-api/categoryApi';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const CategoryCreateForm = () => {
    const [loader, setLoader] = useState(false);
    const [preview, setPreview] = useState(null); // Image preview state
    const {categoryCreateApi} = categoryStore()
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.files[0];

        let imgUrl = '';

        if (image) {
            setLoader(true);
            imgUrl = await uploadImg(image);
            setLoader(false);
        }

        const payload = {
            name,
            image: imgUrl,
        };

        console.log('Payload:', payload);

        setLoader(true);
        const res = await categoryCreateApi(payload);
        setLoader(false);
        if (res) {
            Swal.fire({
                icon:'success',
                title: 'Category added successfully',
                showConfirmButton: false,
                timer: 1500,
            })
        }else{
            Swal.fire({
                icon:'error',
                title: 'Failed to add category',
                showConfirmButton: false,
                timer: 1500,
            })
            console.log('Error:', res);
        }
        e.target.reset();
    };

    return (
        <>
        <Helmet>
                <title>Dashboard | Add Category</title>
            </Helmet>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
            
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Add New Category</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* Category Name Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter category name"
                        name="name" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    />
                </div>
                
                {/* Image Upload Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                    <input 
                        type="file" 
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {/* Image Preview */}
                    {preview && (
                        <div className="mt-4">
                            <p>Uploaded Image</p>
                            <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-md shadow-md" />
                        </div>
                    )}
                </div>
                
                {/* Submit Button */}
                <button 
                    type="submit" 
                    className={`w-full py-2 px-4 rounded-lg transition-colors text-white ${loader ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={loader}
                >
                    {loader ? 'Uploading...' : 'Submit'}
                </button>
            </form>
        </div>
        </>
    );
};

export default CategoryCreateForm;
