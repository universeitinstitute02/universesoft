import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';
import { Editor } from '@tinymce/tinymce-react';

const ProductCategoryAdd = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const adminToken = localStorage.getItem("admin_token");
  const config = {
    headers: {
      Authorization: adminToken,
    },
  };
  const [formData, setFormData] = useState({
    categoryName: '',
    package: [{ totalPage: '', features: '', deliveryTime: '', price: "", representativePercentange: '' }],
  });

  // Handle general input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle package input change
  const handlePackageChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPackage = [...formData.package];
    updatedPackage[index][name] = value;
    setFormData((prev) => ({
      ...prev,
      package: updatedPackage
    }));
  };

  // Handle TinyMCE change for features
  const handleFeaturesChange = (index, content) => {
    const updatedPackage = [...formData.package];
    updatedPackage[index].features = content;
    setFormData((prev) => ({
      ...prev,
      package: updatedPackage
    }));
  };

  // Add new package
  const handleAddPackage = () => {
    setFormData((prev) => ({
      ...prev,
      package: [...prev.package, { totalPage: '', features: '', deliveryTime: '', price: "", representativePercentange: '' }]
    }));
  };

  // Remove package
  const handleRemovePackage = (index) => {
    const updatedPackage = formData.package.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      package: updatedPackage
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    let resp = await createAlert();
    try {
      if (resp.isConfirmed) {
        setLoading(true);
        let res = await axiosPublic.post(`/create-product-category`, formData, config);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product upload successfully.",
            showConfirmButton: false,
            timer: 1500
          });
          setFormData({
            categoryName: '',
            package: [{ totalPage: '', features: '', deliveryTime: '', price: "", representativePercentange: "" }],
          });
          return;
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Product upload failed.",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
      <Helmet>
        <title>Dashboard | Product Category Add </title>
      </Helmet>
      <h2 className="text-xl font-semibold text-center mb-4">Product Category Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Category Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Category Name</label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter category name"
            />
          </div>
        </div>

        {/* Package Section */}
        <div className="mb-4">
          <h3 className="text-gray-700 font-medium mb-2">Package Details</h3>
          {formData.package.map((pkg, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg relative">
              <div className="grid lg:grid-cols-2 gap-x-4">
                {/* Price */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={pkg.price}
                    onChange={(e) => handlePackageChange(index, e)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter price"
                  />
                </div>
                {/* Total Page */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Total Page</label>
                  <input
                    type="text"
                    name="totalPage"
                    value={pkg.totalPage}
                    onChange={(e) => handlePackageChange(index, e)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter total page"
                  />
                </div>
                {/* Delivery Time */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Delivery Time</label>
                  <input
                    type="text"
                    name="deliveryTime"
                    value={pkg.deliveryTime}
                    onChange={(e) => handlePackageChange(index, e)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter delivery time"
                  />
                </div>
                {/* Representative Percentage */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Representative Percentage</label>
                  <input
                    type="text"
                    name="representativePercentange"
                    value={pkg.representativePercentange}
                    onChange={(e) => handlePackageChange(index, e)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter representative percentage"
                  />
                </div>


              </div>
              {/* Features */}
              <div className="mb-4 w-full">
                <label className="block text-gray-700 font-medium mb-2">Features</label>
                
                <Editor
                  apiKey="atnary0we9a0nuqjzgtnpxyd0arpbwud7ocxkjxqjtaab3nm" // Add your TinyMCE API key here (if needed)
                  value={pkg.features}
                  init={{
                    height: 400,
                    menubar: false,
                    plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'wordcount'],
                    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image | code | fontsizeselect | h1 h2 h3 h4 h5 h6',
                    block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6',
                  }}
                  onEditorChange={(content) => handleFeaturesChange(index, content)}
                />
              </div>

              {/* Remove Button */}
              {formData.package.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemovePackage(index)}
                  className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {/* Add Package Button */}
          <button
            type="button"
            onClick={handleAddPackage}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Package
          </button>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCategoryAdd;
