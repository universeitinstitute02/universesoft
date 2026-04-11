import React from 'react';
import { IoIosText, IoMdMail } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-text_primari mb-6 text-center">Need Help?</h1>
        
        <p className="text-gray-700 mb-8 text-center">
          If you need any help to select the right solution for your business, please call us at 
          <span className="font-semibold text-text_blue"> 09613-250250 </span> 
          within 9:00AM- 9:00PM or you can start a live chat. Alpha Net's support team is available 24/7 via live chat.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center bg-bg_btn_primary hover:bg-bg_btn_hover focus:bg-bg_btn_focus text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out">
            <IoIosText className="mr-2 text-xl" />
            <span>Start Live Chat</span>
          </button>
          
          <button className="flex items-center justify-center bg-bg_btn_light hover:bg-bg_btn_hover hover:text-white text-text_primari font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out">
            <IoMdMail className="mr-2 text-xl" />
            <span>Mail Now</span>
          </button>
          
          <button className="flex items-center justify-center bg-text_blue hover:bg-text_hover text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out">
            <MdOutlineWifiCalling3 className="mr-2 text-xl" />
            <span>Call Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;