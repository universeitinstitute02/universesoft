import axios from 'axios';
import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { uploadImg } from '../../../uploadImage/UploadImage';

const ApplicationPage = () => {
  const axiosPublic = useAxiosPublic();



  const handleSubmitValue = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const resume_link = form.resume_link.value;

    const image = form.image.files[0];

    let ImageUrl = '';

    if (!image?.name) {
        ImageUrl = ''
    } else {
      ImageUrl = await uploadImg(image);
    }

    const data = { fullName, phoneNumber, address, resume_link, ImageUrl };

    console.log("from application page:", data);

    const result = await axiosPublic.post(`/applyJob`, data);

   

    if(result){
      console.log(result)
      toast.success('Application submitted successfully!')
    }else{
      toast.error('Failed to submit application!')
    }


  }
  return (
    <>
      <div className='max-w-screen-xl mx-auto '  >
        <div className='mx-12' >
          <form onSubmit={handleSubmitValue} >
            <div className='m-10' >
              <div className='grid md:grid-cols-2 md:gap-6 ' >
                <div className='w-full' >
                  <label htmlFor='fullName' className="block text-lg font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id='fullName'
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    
                    required
                  />
                </div>
                <div className='w-full' >
                  {/* phoneNumber */}
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    required
                  />
                </div>
              </div>
              <div className='grid md:grid-cols-2 md:gap-6 my-3 ' >
                {/* address */}
                <div className='w-full' >
                  <label htmlFor='fullName' className="block text-lg font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id='address'
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    required
                  />
                </div>
                <div className='w-full' >
                  {/* resume */}
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Resume
                  </label>
                  <input
                    type="file"
                    accept='application/json'
                    name="resume"
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    
                  />
                </div>

                
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600 font-bold">Provide Resume Link</label><br />
                    <input type="text" name='resume_link'  className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                  </div>
                </div>


                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600 font-bold">Formal Image</label><br />
                    <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                  </div>
                </div>

               
              </div>

              <div className='my-8' >
                <button className='btn bg-text_primari text-white text-lg block mx-auto ' >Submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default ApplicationPage




