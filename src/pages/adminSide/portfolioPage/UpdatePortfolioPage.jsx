import React, { useEffect, useState } from 'react';
import { uploadImageToCloudinary } from '../../../uploadImage/UpdateImg';
import portfolioStore from '../../../api-request/portfolio-api/portfolioStore';
import { useParams } from 'react-router-dom';
import { updateAlert } from '../../../helper/updateAlert';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const UpdatePortfolioPage = () => {
  const { 
    singlePortfolioDataApi, 
    portfolioDataListApi, 
    singlePortfolioData, 
    updatePortfolioApi 
  } = portfolioStore();
  
  const [loader, setLoader] = useState(false);
  const [portfolioImg, setPortfolioImg] = useState(null);
  const { id } = useParams();

  // Fetch the single portfolio data when the component mounts
  useEffect(() => {
    (async () => {
      setLoader(true);
      await singlePortfolioDataApi(id);
      setLoader(false);
    })();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPortfolioImg(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    let imgUrl = portfolioImg 
      ? await uploadImageToCloudinary(portfolioImg) 
      : singlePortfolioData?.img;

    const title = e.target.title.value;
    const live_link = e.target.live_link.value;

    if (!title || !live_link) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const payload = {
      img: imgUrl,
      title,
      live_link,
    };

    const resp = await updateAlert(payload);

    if (resp.isConfirmed) {
      setLoader(true);
      let res = await updatePortfolioApi(id, payload);
      setLoader(false);
      if (res) {
        await portfolioDataListApi();
        toast.success('Portfolio updated successfully');
      } else {
        toast.error('Failed to update portfolio');
      }
    }
  };

  return (
    <div>
        <Helmet>
            <title> Dashboard | Portfolio update page </title>
        </Helmet>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Update Portfolio</h2>

            <form onSubmit={handleSubmit}>
            {/* Title Field */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                type="text"
                name="title"
                defaultValue={singlePortfolioData?.title}
                key={Date.now()}
                placeholder="Enter portfolio title"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Current Image Preview */}
            <div className="avatar mb-4 ">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img key={Date.now()} 
                    src={singlePortfolioData?.img} 
                    alt="Portfolio Preview" 
                    className="object-cover rounded-full"
                />
                </div>
            </div>

            {/* Image Upload Field */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Upload New Image</label>
                <input
                type="file"
                name="img"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Live Link Field */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Live Link</label>
                <input
                type="text"
                name="live_link"
                defaultValue={singlePortfolioData?.live_link}
                key={Date.now()}
                placeholder="Enter live link"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                {loader ? 'Updating...' : 'Update Portfolio'}
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  );
};

export default UpdatePortfolioPage;
