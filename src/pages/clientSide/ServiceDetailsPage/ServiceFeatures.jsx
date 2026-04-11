import React from "react"
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { BsFileBarGraphFill } from "react-icons/bs";
import { SiInternetexplorer } from "react-icons/si";
import { GiVrHeadset } from "react-icons/gi";
import { MdEditDocument } from "react-icons/md";
import { IoIosReturnRight } from "react-icons/io";

const ServiceFeatures = ({ features }) => {
    console.log(features);
    return (
        <div className="container mx-auto my-10 lg:my-20">
            <p className="text-2xl lg:text-5xl font-bold text-center my-5">Features Of Our Service</p>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-0 mx-5 mx:mx-5 gap-2 lg:gap-7">
                {
                    features?.map(feature =>
                        <div data-aos="zoom-in" className="border p-5 rounded-xl shadow-xl">
                            <div className=" flex justify-center">
                                <div className="avatar">
                                    <div className="ring-universe_secondary ring-offset-base-100 w-12 lg:w-24 rounded-full ring ring-offset-2">
                                        <img src={feature?.feature_img} />
                                    </div>
                                </div>
                                {/* <div className="p-4 w-fit rounded-full border">
                                    <img src={feature?.feature_logo} alt="" className="text-white w-12 h-12" />
                                </div> */}
                            </div>

                            <h2 className="font-bold text-xs lg:text-xl my-4 text-center">{feature?.feature_title}</h2>
                            <p className="text-gray-600 text-justify text-xs lg:text-sm">
                                {feature?.feature_description.slice(0, 200)}
                            </p>



                        </div>)
                }



            </div>
        </div>
    );
};

export default ServiceFeatures;