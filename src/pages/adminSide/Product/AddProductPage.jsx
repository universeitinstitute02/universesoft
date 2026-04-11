import React, { useEffect, useState } from "react";
import productStore from "../../../api-request/product-api/productApi";
import toast, { Toaster } from "react-hot-toast";
import { uploadImg } from "../../../uploadImage/UploadImage";
import { Helmet } from "react-helmet-async";
import Loader from "../../../components/loder/Loader";
import categoryStore from "../../../api-request/category-api/categoryApi";

const ProductCreateForm = () => {
  window.scrollTo(0, 0);
  const { createProductApi } = productStore();
  const [loader,setLoader] = useState(false);
  const {categoryList,categoryListApi} = categoryStore();
  
  const [extraData, setExtraData] = useState([
    { description_title: "", description_img: "" },
  ]);

  const handleAddExtraData = () => {
    setExtraData([
      ...extraData,
      { description_title: "", description_img: ""},
    ]);
  };

  useEffect(()=>{
    (async()=>{
      await categoryListApi();
    })()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nav_logo = e.target.nav_logo.files[0];
    const nav_title = e.target.nav_title.value;
    const nav_description = e.target.nav_description.value;

    const banner_title = e.target.banner_title.value;
    const banner_img = e.target.banner_img.files[0];
    const banner_description = e.target.banner_description.value;

    const live_link = e.target.live_link.value;
    const proposal_link = e.target.proposal_link.value;
    const feature_title = e.target.feature_title.value;
    const feature_img = e.target.feature_img.files[0];
    const feature_description = e.target.feature_description.value;

    const category_name = e.target.category_name.value;



    // Upload individual images
    let navLogoUrl = nav_logo ? await uploadImg(nav_logo) : "";
    let bannerImgUrl = banner_img ? await uploadImg(banner_img) : "";
    let featureImgUrl = feature_img? await uploadImg(feature_img) : "";

    // Upload description images
    const extraDataWithUrls = await Promise.all(
      extraData.map(async (item) => {
        const uploadedImg = item.description_img
          ? await uploadImg(item.description_img)
          : "";
        return { ...item, description_img: uploadedImg };
      })
    );

    // Prepare final payload
    const payload = {
      category_name,
      nav_logo : navLogoUrl,
      nav_title,
      nav_description,
      banner_title,
      banner_img : bannerImgUrl,
      banner_description,
      live_link,
      proposal_link,
      feature_title,
      feature_img : featureImgUrl,
      feature_description,
      extra_data : extraDataWithUrls
    };

    console.log("Payload:", feature_title);

    // Simulate API call
    try {
      setLoader(true);
      let res = await createProductApi(payload);
      setLoader(false);
      if (res) {
        toast.success("Product created successfully");
      } else {
        toast.error("Error creating service");
      }
    } catch (err) {
      toast.error("Error creating service");
    }
    e.target.reset();
  };



  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <Helmet>
        <title>Dashboard | Add Product</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit}>

        <div className="flex flex-row gap-6 " >
          {/* category name */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Category Name
            </label>
            <select
                id="name"
                name="category_name"
                className="form-select w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring focus:ring-indigo-200"
              >
                <option value="">Select Category Name</option>
                    {categoryList && categoryList.map((item) => (
                      <option key={item._id} value={item._id}>
                      {item?.name}
                </option>
                    ))}
              </select>
          </div>
          {/* Nav Logo */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Logo
            </label>
            <input
              type="file"
              name="nav_logo"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              required
            />
          </div>

          {/* Nav Title */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Title
            </label>
            <input
              type="text"
              name="nav_title"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter nav title"
              required
            />
          </div>
        </div>

        {/* Nav Description */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Nav Description
          </label>
          <textarea
            name="nav_description"
            rows="5"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter nav description"
            required
          />
        </div>

        <div className="flex flex-row gap-6">

          {/* banner title  */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Banner Title
            </label>
            <input
              type="text"
              name="banner_title"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter banner title"
              required
            />
          </div>
          {/* banner image */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Banner Image
            </label>
            <input
              type="file"
              name="banner_img"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              required
            />
          </div>
        </div>

        {/* Banner Description */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Banner Description
          </label>
          <textarea
            name="banner_description"
            rows="5"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter banner description"
            required
          />
        </div>

        {/* proposal and live link  */}
        <div className="flex flex-row gap-6" >
          {/* Proposal Link */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Proposal Link
            </label>
            <input
              type="text"
              name="proposal_link"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter proposal link"
              required
            />
          </div>

          {/* Live Link */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Live Link
            </label>
            <input
              type="text"
              name="live_link"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter live link"
              required
            />
          </div>
        </div>
          <div className="flex flex-row gap-6">
            {/* Feature */}
            <div className="mb-4 w-full ">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Feature Title
              </label>
              <input
                type="text"
                name="feature_title"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                placeholder="Enter feature title "
                required
              />
            </div>
            <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Feature Image
            </label>
            <input
              type="file"
              name="feature_img"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              required
            />
          </div>
          </div>
          

        {/* Feature Description */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Feature Description
          </label>
          <textarea
            name="feature_description"
            rows="5"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter feature description"
            required
          />
        </div>


        {/* Extra Data */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add key points</h2>
        {extraData.map((item, index) => (
          <div key={index} className="mb-4">
            
            <div className="flex flex-row gap-6 " >
              <div className="w-full" >
                {/* Description Image */}
                <label htmlFor="description_img">Description Image</label>
                <input
                  type="file"
                  id="description_img"
                  accept="image/*"
                  onChange={(e) => {
                    const newExtraData = [...extraData];
                    newExtraData[index].description_img = e.target.files[0];
                    setExtraData(newExtraData);
                  }}
                  className="w-full px-4 rounded-xl py-2 mb-2 border-2 border-gray-300"
                />
              </div>

              <div className="w-full" >
                {/* Description Title */}
                <label htmlFor="description_title">Description Title</label>
                <input
                  type="text"
                  id="description_title"
                  placeholder="Description Title"
                  className="w-full px-4 py-2 rounded-xl border-2 border-gray-300"
                  value={item.description_title}
                  onChange={(e) => {
                    const newExtraData = [...extraData];
                    newExtraData[index].description_title = e.target.value;
                    setExtraData(newExtraData);
                  }}
                />
              </div>
            </div>

          </div>
        ))}
        <button
          type="button"
          onClick={handleAddExtraData}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add key points
        </button> <br />

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white mx-auto block px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      <Toaster />
      {
        loader && (
          <div>
            <Loader></Loader>
          </div>
        )
      }
    </div>
  );
};

export default ProductCreateForm;
