import axios from "axios";

export const UploadVideo = async (file) => {
    const data = new FormData();
    data.append('file', file)
    data.append('upload_preset', 'VideoUpload')
    try {
        let api = `https://api.cloudinary.com/v1_1/dxvacpgrv/video/upload`;
        const res = await axios.post(api, data)

        const { secure_url } = res.data;
        console.log(secure_url);
        return secure_url
    } catch (error) {
        console.log(error);

    }
}