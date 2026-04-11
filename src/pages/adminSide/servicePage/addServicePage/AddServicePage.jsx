// AddServicePage.js
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { uploadImg } from "../../../../uploadImage/UploadImage";
import serviceStore from './../../../../api-request/service-api/serviceApi';
import { Helmet } from "react-helmet-async";

const AddServicePage = () => {
  const { createServiceApi } = serviceStore();
  const [keyPoint, setKeyPoint] = useState([
    { key_point_img: "", key_point_title: "", key_point_description: "" },
  ]);

  const [features, setFeatures] = useState([
    { feature_description: "", feature_img: "", feature_title: "" },
  ]);

  const [showDescriptionFeatures, setShowDescriptionFeatures] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleKeyPointData = () => {
    setKeyPoint([
      ...keyPoint,
      { key_point_img: "", key_point_title: "", key_point_description: "" },
    ]);
  };

  const handleAddFeature = () => {
    setFeatures([
      ...features,
      { feature_description: "", feature_img: "", feature_title: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nav_logo = e.target.nav_logo.files[0];
    const nav_title = e.target.nav_title.value;
    const nav_description = e.target.nav_description.value;

    const banner_title = e.target.banner_title.value;
    const banner_img = e.target.banner_img.files[0];
    const banner_description = e.target.banner_description.value;

    // Upload individual images
    let navLogoUrl = nav_logo ? await uploadImg(nav_logo) : "";
    let bannerImgUrl = banner_img ? await uploadImg(banner_img) : "";

    // Upload key point images
    const keyPointData = await Promise.all(
      keyPoint.map(async (keyPointItem) => {
        const uploadedLogo = keyPointItem.key_point_img
          ? await uploadImg(keyPointItem.key_point_img)
          : "";
        return { ...keyPointItem, key_point_img: uploadedLogo };
      })
    );

    // Upload feature images
    const featureData = await Promise.all(
      features.map(async (featureItem) => {
        const uploadedLogo = featureItem.feature_img
          ? await uploadImg(featureItem.feature_img)
          : "";
        return { ...featureItem, feature_img: uploadedLogo };
      })
    );

    // Prepare final payload
    const payload = {
      nav_logo: navLogoUrl,
      nav_title,
      nav_description,
      banner_title,
      banner_img: bannerImgUrl,
      banner_description,
      key_point: keyPointData,
      feature: featureData,
    };

    // Simulate API call
    try {
      let res = await createServiceApi(payload);
      if (res) {
        toast.success("Service successfully created");
      }
    } catch (err) {
      toast.error("Error creating service");
    }

    e.target.reset();
  };

  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <Helmet>
        <title>Dashboard | Add Service</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add Service
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4">
          {/* Nav Logo */}
          <div className="mb-4 w-full">
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
          <div className="mb-4 w-full">
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
          {/* Banner Title */}
          <div className="mb-4 w-full">
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

          {/* Banner Image */}
          <div className="mb-4 w-full">
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

        {/* Toggle Button for Features */}
        <button
          type="button"
          onClick={() => setShowFeatures(!showFeatures)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          {showFeatures ? "Hide" : "Add"} Service Key Points
        </button>

        {/* Key Points */}
        {showFeatures && (
          <>
            {keyPoint.map((point, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Key Point {index + 1}
                </h2>
                <div className="flex flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="key_point_img">Key Point Image</label>
                    <input
                      type="file"
                      id="key_point_img"
                      accept="image/*"
                      onChange={(e) => {
                        const newKeyPoints = [...keyPoint];
                        newKeyPoints[index].key_point_img = e.target.files[0];
                        setKeyPoint(newKeyPoints);
                      }}
                      className="w-full px-4 py-2 rounded-lg mb-2 border-2 border-gray-300"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="key_point_title">Key Point Title</label>
                    <input
                      type="text"
                      id="key_point_title"
                      placeholder="Key Point Title"
                      className="w-full px-4 py-2 rounded-lg mb-2 border-2 border-gray-300"
                      value={point.key_point_title}
                      onChange={(e) => {
                        const newKeyPoints = [...keyPoint];
                        newKeyPoints[index].key_point_title = e.target.value;
                        setKeyPoint(newKeyPoints);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="key_point_description">
                    Key Point Description
                  </label>
                  <textarea
                    placeholder="Key Point Description"
                    rows="5"
                    id="key_point_description"
                    className="w-full rounded-lg px-4 py-2 border-2 border-gray-300"
                    value={point.key_point_description}
                    onChange={(e) => {
                      const newKeyPoints = [...keyPoint];
                      newKeyPoints[index].key_point_description = e.target.value;
                      setKeyPoint(newKeyPoints);
                    }}
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleKeyPointData}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add Another Key Point
            </button>
          </>
        )}

        {/* Toggle Button for Description Features */}
        <button
          type="button"
          onClick={() => setShowDescriptionFeatures(!showDescriptionFeatures)}
          className="bg-blue-500 text-white px-4 py-2 ml-6 rounded-lg mb-4 mt-6"
        >
          {showDescriptionFeatures ? "Hide" : "Add"} Features
        </button>

        {/* Features */}
        {showDescriptionFeatures && (
          <>
            {features.map((featureData, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Feature {index + 1}
                </h2>
                <div className="flex flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="feature_img">Feature Image</label>
                    <input
                      type="file"
                      id="feature_img"
                      name="feature_img"
                      accept="image/*"
                      onChange={(e) => {
                        const newFeatures = [...features];
                        newFeatures[index].feature_img = e.target.files[0];
                        setFeatures(newFeatures);
                      }}
                      className="w-full px-4 py-2 rounded-lg mb-2 border-2 border-gray-300"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="feature_title">Feature Title</label>
                    <input
                      type="text"
                      id="feature_title"
                      placeholder="Feature Title"
                      className="w-full px-4 py-2 rounded-lg mb-2 border-2 border-gray-300"
                      value={featureData.feature_title}
                      onChange={(e) => {
                        const newFeatures = [...features];
                        newFeatures[index].feature_title = e.target.value;
                        setFeatures(newFeatures);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="feature_description">Feature Description</label>
                  <textarea
                    placeholder="Feature Description"
                    rows="5"
                    id="feature_description"
                    className="w-full rounded-lg px-4 py-2 border-2 border-gray-300"
                    value={featureData.feature_description}
                    onChange={(e) => {
                      const newFeatures = [...features];
                      newFeatures[index].feature_description = e.target.value;
                      setFeatures(newFeatures);
                    }}
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddFeature}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg  "
            >
              Add Another Feature
            </button>
          </>
        )}

        <div className="mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-lg block mx-auto "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServicePage;
