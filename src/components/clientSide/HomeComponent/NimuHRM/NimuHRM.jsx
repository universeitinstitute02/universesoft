import { FaAngleRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";



const NimuHRM = () => {
    return (
        <div className="bg-bg_btn_hover py-24 px-10">
            <div className="container mx-auto flex gap-5 flex-col lg:flex-row  text-white">
                {/* left side */}
                <div className="flex flex-col lg:flex-row md:flex-row gap-5 pr-5 pt-5 justify-center items-center lg:items-start md:items-start ">
                    <div>
                        <img className="w-[100px] md:w-full lg:w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723454871/hrm-white_vpc8yk.webp" alt="" />
                    </div>
                    <div className="text-center md:text-start lg:text-start">
                        <h5>All in One</h5>
                        <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mt-3">SoftTech HRM</h2>
                        <p className="leading-relaxed lg:text-[18px] text-base mt-5 mb-10">
                            SoftTech HRM Dashboard provides a centralized platform for managing all HR operations efficiently. With its user-friendly interface, it offers a real-time overview of crucial HR data such as employee records, attendance, performance metrics, and more. The dashboard allows for seamless navigation, quick access to key information, and empowers HR teams to make informed, data-driven decisions to enhance workforce management.
                        </p>
                        {/* btn */}
                        <div className="flex justify-center lg:justify-start md:justify-start">
                            <button className="uppercase border-2 border-white flex items-center gap-2 p-4 rounded-md text-center">Try SoftTech HRM <FaAngleRight></FaAngleRight></button>
                        </div>
                    </div>

                </div>
                {/* middle */}
                <div className="lg:w-[1px] border border-white border-dashed">

                </div>
                {/* right side */}
                <div className="pt-5 pl-5">
                    <div>
                        <FaQuoteLeft className="text-3xl mb-10"></FaQuoteLeft>
                        <p className="mb-16">&quot;
                            SoftTech significantly boosted our productivity through their passion and advanced technological expertise. Their strong communication skills accelerated our product development, leading to greater customer satisfaction. They consistently offered better solutions than initially proposed. In addition to their cloud engineering expertise, SoftTech remained dedicated to delivering high-quality features and more efficient solutions for our users.
                            &quot;</p>
                        {/* author */}
                        <div className="flex gap-5 items-center">
                            {/* <img className="w-[70px] rounded-full" src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725692414/Universe%20Soft%20Tech/Homepage/h1tkdbwomcfjwqzhz1tg.jpg" alt="" /> */}
                            <div className="space-y-2">
                                <p>ENGR. MD. GOLAM KIBRIYA</p>
                                <p>CEO</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default NimuHRM;