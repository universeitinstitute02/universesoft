// import axios from "axios";

// // Single image upload function
// export const uploadImg = async (file) => {
//   const cloudName = import.meta.env.VITE_CLOUD_NAME;
//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", "softTech_preset");

//   try {
//     let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
//     const res = await axios.post(api, data);
//     const { secure_url } = res.data;
//     return secure_url;
//   } catch (err) {
//     console.log(err);
//     return "";
//   }
// };

// // Multiple image upload function
// export const uploadMultipleImages = async (files) => {
//   try {
//     // Convert FileList to an array using Array.from or spread operator
//     const fileArray = Array.from(files);

//     // Upload each image using Promise.all to handle multiple uploads in parallel
//     const uploadPromises = fileArray.map((file) => uploadImg(file));

//     // Wait until all images are uploaded
//     const imageUrls = await Promise.all(uploadPromises);

//     return imageUrls[0]; // Returns an array of image URLs

//   } catch (err) {
//     console.log("Error uploading multiple images:", err);
//     return [];
//   }
// };


// uploadImage.js
import axios from "axios";

// Function to upload a single image to Cloudinary
export const uploadImg = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUD_NAME; // Your Cloudinary cloud name
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "imageUpload"); // Your Cloudinary upload preset

  try {
    let api = `https://api.cloudinary.com/v1_1/dxvacpgrv/image/upload`;
    const res = await axios.post(api, data);
    const { secure_url } = res.data;
    return secure_url;
  } catch (err) {
    console.error("Error uploading image:", err);
    return "";
  }
};
