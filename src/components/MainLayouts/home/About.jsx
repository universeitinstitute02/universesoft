import { FaQuoteLeft } from "react-icons/fa";
import { TbRocket } from "react-icons/tb";

const About = () => {
    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

                    {/* Left: Company brief */}
                    <div className="bg-amber-50 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                                <TbRocket className="text-amber-600 text-xl" />
                            </div>
                            <span className="text-sm font-medium text-amber-700">Always on Top</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                            Universe Soft Tech — In Brief
                        </h2>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                            Universe Soft Tech is a software development company in Bangladesh, embarked in 2020.
                            We are passionate about helping businesses go digital — building affordable, high-quality
                            software and web solutions for any industry.
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed mt-3">
                            Our motto: <em className="text-gray-700 font-medium">"Technology Towards Digitalization."</em>
                        </p>
                    </div>

                    {/* Right: CEO quote */}
                    <div className="bg-blue-100 p-8 lg:p-12 flex flex-col justify-between">
                        <FaQuoteLeft className="text-blue-300 text-3xl mb-6" />
                        <p className="text-gray-700 text-sm lg:text-base leading-relaxed flex-1">
                            Our goal is to empower Bangladesh and beyond through innovative software solutions.
                            We are dedicated to cutting-edge technology that enhances efficiency, fosters growth,
                            and transforms ideas into reality. We aspire to develop world-class software solutions
                            that not only meet client needs but also inspire positive change.
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            <img
                                className="w-14 h-14 rounded-full object-cover ring-2 ring-white"
                                src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868951/UniverseSoftTech/Image/fcybr3s74j9fhwnver6c.jpg"
                                alt="CEO"
                            />
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">Engr. Md. Golam Kibriya</p>
                                <p className="text-gray-500 text-xs mt-0.5">Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;