

const Technology = () => {

    return (
        <div className="mt-10">
            <div className="container mx-auto lg:pt-10 lg:px-0" >
                <div className="text-center">
                    <h2 className="text-3xl font-bold ">Technology Partners</h2>
                    <p className="lg:text-xl pt-5">Empowering your business with our trusted technology partners</p>
                </div>

                <marquee behavior="" direction="">
                    <div className="flex gap-5 mt-4">

                        <div className="bg-white shadow-xl p-5 rounded-lg flex justify-center items-center border">
                            <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723570466/aws-logo_gzkd2g.webp" className="w-[80px]" alt="" />
                        </div>

                        <div className="bg-white shadow-xl p-5 rounded-lg flex justify-center items-center border">
                            <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723570678/cloudflare-logo_ci7yyr.webp" className="w-[80px]" alt="" />
                        </div>

                        <div className="bg-white shadow-xl p-5 rounded-lg flex justify-center items-center border">
                            <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723570706/google-cloud-logo_zc3pmx.webp" className="w-[80px]" alt="" />
                        </div>

                        <div className="bg-white shadow-xl p-5 rounded-lg flex justify-center items-center border">
                            <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723570763/digital-ocean-logo_pbn1fw.webp" className="w-[80px]" alt="" />
                        </div>


                       
                    </div>
                </marquee>

                <div className="flex justify-center flex-col lg:flex-row gap-5 py-10">

                </div>

            </div>

        </div>
    );
};

export default Technology;