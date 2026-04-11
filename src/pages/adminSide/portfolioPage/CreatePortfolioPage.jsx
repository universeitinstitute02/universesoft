import React, { useState } from 'react'
import portfolioStore from '../../../api-request/portfolio-api/portfolioStore'
import { uploadImg } from '../../../uploadImage/UploadImage';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import SpinnerLoader from '../../../components/loder/Loader';

const CreatePortfolioPage = () => {
  const {portfolioCreateApi} = portfolioStore();
  const [loader,setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const img = e.target.img.files[0];
    const title = e.target.title.value;
    const live_link = e.target.live_link.value;

    let imgUrl = img ? await uploadImg(img) : "";

    console.log(img, live_link,title);

    let payload = {
      img:imgUrl,
      title,
      live_link
    };

    const resp = await createAlert();
    if (resp.isConfirmed) {
      setLoader(true);
      let res = await portfolioCreateApi(payload);
      setLoader(false);
      if (res) {
        Swal.fire({
          title: "Created!",
          text: "Your portfolio has been created successfully.",
          icon: "success"
        });
      } else {
        toast.error("Portfolio was not created successfully");
      }
    }
    e.target.reset();


  };
  return (
    <div>
      <Helmet>
        <title> Dashboard | Create Portfolio</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create Portfolio</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Input */}
          <div>
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Banner Image
            </label>
            <input
              type="file"
              required
              id="img"
              name="img"
              placeholder="Enter image URL"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              required
              id="title"
              name="title"
              placeholder="Enter title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Live Link Input */}
          <div>
            <label
              htmlFor="live_link"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Live Link
            </label>
            <input
              type="url"
              id="live_link"
              name="live_link"
              required
              placeholder="Enter live link"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    {
      loader && (
        <div>
          <SpinnerLoader></SpinnerLoader>
        </div>
      )
    }
    </div>
  )
}

export default CreatePortfolioPage
