import React, { useEffect } from 'react'
import serviceStore from '../../../api-request/service-api/serviceStore'

const ServiceFeaturePage = () => {
  const {serviceDataList,serviceDataListApi} = serviceStore();
  useEffect(() => {
    (async () => {
      await serviceDataListApi();
    })();
  }, []);
  console.log(serviceDataList[0]?.feature?.feature_title);
  return (
    <div>
      <div className="container mx-auto my-10 lg:my-20">
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-0 mx-5 mx:mx-5 gap-2 lg:gap-7">
                {
                    serviceDataListApi[0]?.feature?.map(item =>
                        <div data-aos="zoom-in" className="border p-5 rounded-xl shadow-xl">
                            <div className=" flex justify-center">
                                <div className="avatar">
                                    <div className="ring-universe_secondary ring-offset-base-100 w-12 lg:w-24 rounded-full ring ring-offset-2">
                                        <img src={item?.feature_img} />
                                    </div>
                                </div>
                                {/* <div className="p-4 w-fit rounded-full border">
                                    <img src={feature?.feature_logo} alt="" className="text-white w-12 h-12" />
                                </div> */}
                            </div>

                            <h2 className="font-bold text-xs lg:text-3xl my-4 text-center">{item[0]?.feature_title}</h2>
                            <p className="text-gray-600 text-justify text-xs lg:text-sm">
                                {item[0]?.feature_description.slice(0, 200)}
                            </p>
                        </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default ServiceFeaturePage
