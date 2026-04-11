import { Helmet } from "react-helmet-async";
import blogStore from '../../../api-request/blog-api/blogStore';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { uploadImg } from './../../../uploadImage/UploadImage';
import { uploadImageToCloudinary } from "../../../uploadImage/UpdateImg";

const BlogUpdatePage = () => {

  const { singleBlogDataApi, singleBlogData, blogUpdateApi } = blogStore();
  const [loader, setLoader] = useState(false);
  const [blogImgUrl,setBlogImgUrl] = useState(null)

  const { id } = useParams();
  const navigate = useNavigate();

  const handleImageChange = (e, setState) => {
    const file = e.target.files[0];
    setState(file);
  };



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const blogTitle = e.target.blogTitle.value;
    const author_name = e.target.author_name.value;
    const meta_keywords = e.target.meta_keywords.value;
    const blog_description = e.target.blog_description.value;

    let imgUrl = blogImgUrl ? await uploadImageToCloudinary(blogImgUrl) : singleBlogData.blog_banner_image;

    const payload = {
      blogTitle,
      author_name,
      meta_keywords,
      blog_description,
      blog_banner_image: imgUrl,
    };

    setLoader(true);
    const res = await blogUpdateApi(id, payload);
    setLoader(false);
    if (res) {
        toast.success('Blog updated successfully');
    }else{
        toast.error('Failed to update blog');
    }

}


  // Fetch single blog data
  useEffect(() => {
    (async () => {
      setLoader(true);
      await singleBlogDataApi(id);
      setLoader(false);
    })();
  }, [id]);

  return (
    <div>
      <Helmet>
        <title>Dashboard | Update Blog Post</title>
      </Helmet>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full p-8 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Blog Update Page</h2>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Blog Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blog Title
              </label>
              <input
                type="text"
                name="blogTitle"
                defaultValue={singleBlogData?.blogTitle}
                key={Date.now()}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Author Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Name
              </label>
              <input
                type="text"
                name="author_name"
                defaultValue={singleBlogData?.author_name}
                key={Date.now()}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Existing Banner Image */}
            <div className="avatar">
              <div className="w-20 h-20">
                <img key={Date.now()}
                  src={singleBlogData?.blog_banner_image}
                  alt="Blog Banner"
                  className="rounded-full"
                />
              </div>
            </div>

            {/* New Blog Banner Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blog Banner Image
              </label>
              <input
                type="file"
                onChange={(e) => handleImageChange(e, setBlogImgUrl)}
                name="blog_banner_image"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Meta Keywords */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Keywords
              </label>
              <input
                type="text"
                name="meta_keywords"
                defaultValue={singleBlogData?.meta_keywords}
                key={Date.now()}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter meta keywords"
              />
            </div>

            {/* Blog Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blog Description
              </label>
              <textarea
                name="blog_description"
                defaultValue={singleBlogData?.blog_description}
                key={Date.now()}
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter blog description"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition ${
                loader && "opacity-50 cursor-not-allowed"
              }`}
              disabled={loader}
            >
              {loader ? "Updating..." : "Update Blog"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogUpdatePage;
