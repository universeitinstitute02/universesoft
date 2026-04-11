import React, { useEffect, useState } from "react";
import productStore from "../../../api-request/product-api/productApi";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { uploadImageToCloudinary } from "../../../uploadImage/UpdateImg";
import { Helmet } from "react-helmet-async";
import categoryStore from '../../../api-request/category-api/categoryApi';

const ProductUpdateForm = () => {
  window.scrollTo(0, 0);
    const { id } = useParams();
    const { singleProductData, singleProductDataApi, productUpdateApi } = productStore();
    const { categoryListApi, categoryList } = categoryStore();


    const [navLogo, setNavLogo] = useState(null); // nav_logo state
    const [bannerImg, setBannerImg] = useState(null); // banner_img state
    const [featureImg, setFeatureImg] = useState(null); // feature_img state
    const [descriptionImg, setDescriptionImg] = useState({}); // description_img state

    useEffect(() => {
        (async () => {
            await categoryListApi();
        })();
    }, [id]);

    console.log(singleProductData?.nav_description)

    // Handle image file changes
    const handleImageChange = (e, setState) => {
        const file = e.target.files[0];
        setState(file);
    };

    // Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Upload navLogo and featureLogo to Cloudinary
        let navLogoUrl = navLogo ? await uploadImageToCloudinary(navLogo) : singleProductData.nav_logo;
        let bannerImgUrl = bannerImg ? await uploadImageToCloudinary(bannerImg) : singleProductData.banner_img;
        let featureImgUrl = featureImg ? await uploadImageToCloudinary(featureImg) : singleProductData.feature_img;

        // Prepare extra_data with image uploads for extra description images
        const updatedExtraData = await Promise.all(
            singleProductData.extra_data.map(async (item, i) => ({
                description_title: e.target[`description_title_${i}`].value,
                description_img: descriptionImg[i] 
                    ? await uploadImageToCloudinary(descriptionImg[i]) 
                    : item.description_img,
            }))
        );

        // Update form data with image URLs
        const formData = {
            category_name: e.target.category_name.value,
            nav_title: e.target.nav_title.value,
            nav_description: e.target.nav_description.value,
            banner_title: e.target.banner_title.value,
            banner_description: e.target.banner_description.value,
            live_link: e.target.live_link.value,
            proposal_link: e.target.proposal_link.value,
            feature_title: e.target.feature_title.value,
            feature_description: e.target.feature_description.value,

            nav_logo: navLogoUrl,
            banner_img: bannerImgUrl,
            feature_img: featureImgUrl,
            extra_data: updatedExtraData,
        };

        // Send the form data to the API for product update
        let res = await productUpdateApi(id, formData);
        if (res) {
            toast.success("Product updated successfully!");
        } else {
            toast.error("Failed to update product!");
        }
    };

    useEffect(() => {
        (async () => {
            await singleProductDataApi(id);
        })();
    }, [id]);

    // Check for loading state and data availability
    if (!singleProductData || singleProductData.length === 0 || !singleProductData) {
        return <h1>Data loading...</h1>;
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard | Update Product</title>
            </Helmet>

            <h2 className="text-xl text-center my-6 font-bold">Update Product</h2>

            <form onSubmit={handleSubmit}>
                

                {/* Category name */}
                <div className="mb-4 w-1/2">
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Category Name
                    </label>
                    <select
                        id="name"
                        name="category_name"
                        required
                        
                        className="form-select w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                        <option selected
                        key={Date.now()} value="">Select Category Name</option>
                        {categoryList && categoryList.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item?.name}
                            </option>
                        ))}
                    </select>
                </div>
                <h1 key={Date.now()} >Already selected category : {singleProductData?.category?.name}</h1>

                <div className="avatar">
                    <div className="w-12 rounded-full mt-4 ">
                        <img key={Date.now()} src={singleProductData?.nav_logo} alt="Nav Logo" />
                    </div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        {/* nav_logo */}
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Nav Logo:
                        </label>
                        <input
                            type="file"
                            onChange={(e) => handleImageChange(e, setNavLogo)}
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>

                    <div>
                        {/* nav_title */}
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Nav Title:
                        </label>
                        <input
                            type="text"
                            defaultValue={singleProductData?.nav_title}
                            key={Date.now()}
                            name="nav_title"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>
                </div>

                {/* nav_description */}
                <div className="my-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Nav Description:
                    </label>
                    <textarea
                        defaultValue={singleProductData?.nav_description}
                        key={Date.now()}
                        name="nav_description"
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        rows="4"
                    />
                </div>

                <div className="avatar ml-[50%]">
                    <div className="w-12 rounded-full mt-4 ">
                        <img key={Date.now()} src={singleProductData?.banner_img} alt="Banner" />
                    </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8">
                    {/* banner_title */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Banner Title:
                        </label>
                        <input
                            type="text"
                            defaultValue={singleProductData?.banner_title}
                            key={Date.now()}
                            name="banner_title"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>

                    {/* banner_img */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Banner Image
                        </label>
                        <input
                            type="file"
                            name="banner_img"
                            onChange={(e) => handleImageChange(e, setBannerImg)}
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>
                </div>

                {/* banner description */}
                <div className="my-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Banner Description:
                    </label>
                    <textarea
                        defaultValue={singleProductData?.banner_description}
                        key={Date.now()}
                        name="banner_description"
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        rows="4"
                    />
                </div>

                <div className="flex flex-row md:grid md:grid-cols-2 gap-8">
                    <div>
                        {/* live_link */}
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Live Link:
                        </label>
                        <input
                            type="text"
                            defaultValue={singleProductData?.live_link}
                            key={Date.now()}
                            name="live_link"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>
                    <div>
                        {/* proposal_link */}
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Proposal Link
                        </label>
                        <input
                            type="text"
                            defaultValue={singleProductData?.proposal_link}
                            key={Date.now()}
                            name="proposal_link"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>
                </div>

                <div className="avatar">
                    <div className="w-12 rounded-full mt-4 ">
                        <img key={Date.now()} src={singleProductData?.feature_img} alt="Feature" />
                    </div>
                </div>

                <div className="flex flex-row md:grid md:grid-cols-2 gap-8">
                    <div>
                        {/* feature_title */}
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Feature Title:
                        </label>
                        <input
                            type="text"
                            defaultValue={singleProductData?.feature_title}
                            key={Date.now()}
                            name="feature_title"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>

                    <div>
                        {/* feature_img */}
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Feature Image
                        </label>
                        <input
                            type="file"
                            name="feature_img"
                            onChange={(e) => handleImageChange(e, setFeatureImg)}
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>
                </div>

                {/* feature_description */}
                <div className="my-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Feature Description:
                    </label>
                    <textarea
                        defaultValue={singleProductData.feature_description}
                        key={Date.now()}
                        name="feature_description"
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        rows="4"
                    />
                </div>

                {/* Extra Data Handling */}
                {singleProductData?.extra_data && singleProductData.extra_data.length > 0 && singleProductData.extra_data.map((item, i) => (
                    <div className="my-10" key={i}>
                        <div className="my-4">
                            <div className="flex flex-row gap-6 items-center my-6">
                                <div className="avatar">
                                    <div className="w-12 rounded-full mt-4">
                                        <img key={Date.now()} src={item?.description_img} alt={`Description ${i}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Description Image:
                                </label>
                                <input
                                    type="file"
                                    name={`description_img${i}`}
                                    accept="image/*"
                                    onChange={(e) =>
                                        setDescriptionImg({ ...descriptionImg, [i]: e.target.files[0] })
                                    }
                                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Description Title:
                                </label>
                                <input
                                    type="text"
                                    name={`description_title_${i}`}
                                    defaultValue={item.description_title}
                                    key={Date.now()}
                                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Submit Button */}
                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="bg-text_primari text-white px-4 py-2 rounded-lg"
                    >
                        Update
                    </button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default ProductUpdateForm;
