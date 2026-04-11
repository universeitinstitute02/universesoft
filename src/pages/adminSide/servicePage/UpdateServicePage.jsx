import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import serviceStore from "./../../../api-request/service-api/serviceApi";
import { uploadImageToCloudinary } from "../../../uploadImage/UpdateImg";

const UpdateServicePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { updateServiceApi, getSingleServiceApi, getSingleServiceData,getAllServiceApi } =
    serviceStore();

  const [navLogo, setNavLogo] = useState(null); // nav_logo state
  const [bannerImg, setBannerImg] = useState(null); // feature_logo state
  const [keyPointImg, setPointImg] = useState({}); // extra data images
  const [featureImg, setFeatureImg] = useState({}); //

  // Handle image file changes
  const handleImageChange = (e, setState) => {
    const file = e.target.files[0];
    setState(file);
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload navLogo and banner img to Cloudinary
    let navLogoUrl = navLogo
      ? await uploadImageToCloudinary(navLogo)
      : getSingleServiceData.nav_logo;
    let bannerLogoUrl = bannerImg
      ? await uploadImageToCloudinary(bannerImg)
      : getSingleServiceData.banner_img;

    // Prepare extra_data with image uploads for extra feature images

    const updatedFeature = await Promise.all(
      getSingleServiceData.feature.map(async (item, i) => ({
        feature_title: e.target[`feature_title_${i}`].value,
        feature_description: e.target[`feature_description_${i}`].value,
        feature_img: featureImg[i]
          ? await uploadImageToCloudinary(featureImg[i])
          : item.feature_img,
      }))
    );

    const updatedKeyPoint = await Promise.all(
      getSingleServiceData.key_point.map(async (item, i) => ({
        key_point_title: e.target[`key_point_title_${i}`].value,
        key_point_description: e.target[`key_point_description_${i}`].value,
        key_point_img: keyPointImg[i]
          ? await uploadImageToCloudinary(keyPointImg[i])
          : item.key_point_img,
      }))
    );

    // Update form data with image URLs
    const formData = {

      nav_logo: navLogoUrl,
      nav_title: e.target.nav_title.value,
      nav_description: e.target.nav_description.value,

      banner_title: e.target.banner_title.value,
      banner_description: e.target.banner_description.value,
      banner_img: bannerLogoUrl,

      key_point: updatedKeyPoint,
      feature: updatedFeature,

    };

    console.log(formData);

    // Send the form data to the API for product update
    let res = await updateServiceApi(id, formData);
    if (res) {
      await getAllServiceApi()
      navigate("/dashboard/manage-service")
      toast.success("Product updated successfully!");
    } else {
      toast.error("Failed to update product!");
    }
  };

  useEffect(() => {
    (async () => {
      await getSingleServiceApi(id);
    })();
  }, [id, getSingleServiceApi]);

  return (
    <div className="w-full min-h-screen m-0 p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Update Service
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="avatar">
          <div className="w-12">
            <img key={Date.now()} src= {getSingleServiceData?.nav_logo} />
          </div>
        </div>
        <div className="flex flex-col md:flex md:flex-row md:gap-4">
          {/* Nav Logo */}
          <div className="w-1/2 mb-4">
            <label
              htmlFor="nav_logo"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Nav Logo
            </label>
            <input
              type="file"
              id="nav_logo"
              onChange={(e) => handleImageChange(e, setNavLogo)}
              name="nav_logo"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
            />
          </div>

          {/* Nav Title */}
          <div className="w-1/2 mb-4">
            <label
              htmlFor="nav_title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Nav Title
            </label>
            <input
              type="text"
              id="nav_title"
              name="nav_title"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
              placeholder="Nav Title"
              defaultValue={getSingleServiceData.nav_title}
              key = {Date.now()}
            />
          </div>
        </div>

        {/* Nav Description */}
        <div className="mb-4">
          <label
            htmlFor="nav_description"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Nav Description
          </label>
          <textarea
            id="nav_description"
            name="nav_description"
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter nav description"
            rows="4"
            defaultValue={getSingleServiceData.nav_description}
            key={Date.now()}
          />
        </div>
          <div className="avatar">
            <div className="w-12">
              <img key={Date.now()} src= {getSingleServiceData?.banner_img} />
            </div>
          </div>


        <div className="flex flex-col md:flex md:flex-row md:gap-4">
          {/* Banner Title */}
          <div className="w-1/2 mb-4">
            <label
              htmlFor="banner_title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Banner Title
            </label>
            <input
              type="text"
              id="banner_title"
              name="banner_title"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
              placeholder="Main Title"
              defaultValue={getSingleServiceData.banner_title}
              key={Date.now()}
            />
          </div>

          {/* Banner Img */}
          <div className="w-1/2 mb-4">
            <label
              htmlFor="banner_img"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Banner Img
            </label>
            <input
              type="file"
              id="banner_img"
              name="banner_img"
              onChange={(e) => handleImageChange(e, setBannerImg)}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Banner Description */}
        <div className="mb-4">
          <label
            htmlFor="banner_description"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Tag Line
          </label>
          <input
            type="text"
            id="banner_description"
            name="banner_description"
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
            placeholder="Tag Line"
            defaultValue={getSingleServiceData.banner_description}
            key={Date.now()}
          />
        </div>

        {/* Key Point Section */}
        {getSingleServiceData?.key_point &&
          getSingleServiceData?.key_point.map((item, index) => (
            <div key={index}>
              <h3 className="text-center my-6 text-2xl font-semibold">
                Key Point ({index + 1})
              </h3>
              <div className="avatar">
                <div className="w-12">
                  <img key={Date.now()} src={item?.key_point_img} alt="key_point_img" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex md:flex-row md:gap-4">
                {/* Key Point Img  */}
                <div className="w-1/2 mb-4">
                  <label
                    htmlFor={`key_point_img_${index}`}
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Feature Img
                  </label>
                  <input
                    type="file"
                    id={`key_point_img_${index}`}
                    onChange={(e) =>
                      setPointImg({
                        ...keyPointImg,
                        [index]: e.target.files[0],
                      })
                    }
                    name="key_point_img"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                  />
                </div>

                {/*  key_point_title */}
              <div className="mb-4">
                <label
                  htmlFor={`key_point_title_${index}`}
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Key Point Title
                </label>
                <textarea
                  id={`key_point_title_${index}`}
                  name="key_point_title"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                  defaultValue={item?.key_point_title}
                  key={Date.now()}
                />
              </div>

                
              </div>

              {/* key_point_description */}
              <div className=" mb-4">
                  <label
                    htmlFor={`key_point_description_${index}`}
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Key Point Description
                  </label>
                  <textarea
                    rows={5}
                    id={`key_point_description_${index}`}
                    name="key_point_description"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                    defaultValue={item?.key_point_description}
                    key={Date.now()}
                  />
                </div>

              
            </div>
          ))}

        {/* Feature Section */}
        {getSingleServiceData?.feature &&
          getSingleServiceData?.feature.map((item, index) => (
            <div key={index}>
              <h3 className="text-center my-6 text-2xl font-semibold">
                Feature ({index + 1})
              </h3>
              <div className="avatar">
                <div className="w-12">
                  <img key={Date.now()} src={item?.feature_logo} alt="Feature logo" />
                </div>
              </div>
              <div className="flex flex-col md:flex md:flex-row md:gap-4">
                {/* feature_img */}
                <div className="w-1/2 mb-4">
                  <label
                    htmlFor={`feature_img_${index}`}
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Feature Img
                  </label>
                  <input
                    type="file"
                    id={`feature_img_${index}`}
                    onChange={(e) =>
                      setFeatureImg({
                        ...featureImg,
                        [index]: e.target.files[0],
                      })
                    }
                    name="feature_img"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                  />
                </div>

                {/* Feature Title */}
                <div className="w-1/2 mb-4">
                  <label
                    htmlFor={`feature_title_${index}`}
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Feature Title
                  </label>
                  <input
                    type="text"
                    id={`feature_title_${index}`}
                    name="feature_title"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                    defaultValue={item?.feature_title}
                    key={Date.now()}
                  />
                </div>
              </div>

              {/* Feature Description */}
              <div className="mb-4">
                <label
                  htmlFor={`feature_description_${index}`}
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Feature Description
                </label>
                <textarea
                  id={`feature_description_${index}`}
                  name="feature_description"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                  defaultValue={item?.feature_description}
                  key = {Date.now()}
                  placeholder="Enter feature description"
                  rows="7"
                />
              </div>
            </div>
          ))}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Service
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default UpdateServicePage;
