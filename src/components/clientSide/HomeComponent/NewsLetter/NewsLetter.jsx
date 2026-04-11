

const NewsLetter = () => {
    return (
        <div className="bg-bg_btn_light py-4">
            <div className="container mx-auto lg:py-20 px-10 lg:px-0">
                <div className="text-center space-y-4">
                   <div className="w-32 text-center mx-auto">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723572116/newsletter_c7kt6v.gif" alt="" />
                   </div>
                    <h2 className="text-xl lg:text-3xl font-bold text-center ">Subscribe to our Newsletter</h2>
                    <p className="opacity-95">To Get the Latest News About Our Latest Products and Services</p>
                    <div className="flex justify-center items-center">
                         <input type="email" className="rounded-l-lg	 p-4 w-[40%]"  placeholder=""/>
                         <button className="p-5 bg-[#2980b9] hover:bg-[#0E7A7A] rounded-r-lg text-white text-xs">Subscribe</button>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default NewsLetter;