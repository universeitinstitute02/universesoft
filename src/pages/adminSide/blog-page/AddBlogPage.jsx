import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import blogStore from '../../../api-request/blog-api/blogStore';
import Swal from 'sweetalert2';
import { uploadImg } from './../../../uploadImage/UploadImage';

const AddBlogPage = () => {
  const [loader, setLoader] = useState(false);
  const { blogCreateApi } = blogStore();

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // Prevent page reload on submit
    console.log("Form submitted");

    const blogTitle = e.target.blogTitle.value;
    const author_name = e.target.author_name.value;
    const blog_banner_image = e.target.blog_banner_image.files[0];
    const meta_keywords = e.target.meta_keywords.value;
    const blog_description = e.target.blog_description.value;

    console.log(blogTitle, author_name, blog_description, meta_keywords, blog_banner_image);

    // Optional: Handle image upload here
    let uploadImgUrl = '';
    if (blog_banner_image) {
      uploadImgUrl = await uploadImg(blog_banner_image); // Define uploadImage function separately
    }

    const payload = {
      blogTitle,
      author_name,
      blog_banner_image: uploadImgUrl,
      meta_keywords,
      blog_description,
    };

    setLoader(true);
    const res = await blogCreateApi(payload);
    setLoader(false);

    if (res) {
      Swal.fire({
        icon: 'success',
        title: 'Blog added successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed to add blog',
        showConfirmButton: false,
        timer: 1500,
      });
      console.log('Error:', res);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | Add Blog</title>
      </Helmet>
      <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Blog</h2>
        <form onSubmit={handleSubmitForm} className="space-y-4">
          {/* Blog Title */}
          <div>
            <label htmlFor="blogTitle" className="block text-gray-700 font-medium mb-1">
              Blog Title
            </label>
            <input
              type="text"
              name="blogTitle"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Author Name */}
          <div>
            <label htmlFor="author_name" className="block text-gray-700 font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              name="author_name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter author name"
              required
            />
          </div>

          {/* Blog Banner Image */}
          <div>
            <label htmlFor="blog_banner_image" className="block text-gray-700 font-medium mb-1">
              Blog Banner Image
            </label>
            <input
              type="file"
              name="blog_banner_image"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Meta Keywords */}
          <div>
            <label htmlFor="meta_keywords" className="block text-gray-700 font-medium mb-1">
              Meta Keywords
            </label>
            <input
              type="text"
              name="meta_keywords"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter meta keywords"
              required
            />
          </div>

          {/* Blog Description */}
          <div>
            <label htmlFor="blog_description" className="block text-gray-700 font-medium mb-1">
              Blog Description
            </label>
            <textarea
              rows="5"
              name="blog_description"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter blog description"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg ${
                loader ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loader}
            >
              {loader ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
