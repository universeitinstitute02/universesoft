import React, { useState } from "react";
import ProductReq from "./components/ProductReq";
import ClientPayments from "./components/ClientPayments";
import SupportMsg from "./components/SupportMsg";


const ClientDataTab = ({repClients}) => {
    const [activeTab, setActiveTab] = useState("product_request");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const TabList = [
        {
            title: 'Product Requests',
            value: 'product_request'
        },
        {
            title: 'Payments',
            value: 'payment'
        },
        {
            title: 'Support Messages',
            value: 'support_message'
        }
    ]

    return (
        <div className="w-full border  mx-auto bg-white shadow-md rounded-lg p-5">
            {/* Tab Buttons */}
            <div className="flex border-b">
                {
                    

                    TabList.map((list) => (
                        <button
                          key={list.id} // Assuming each item in TabList has a unique id
                          onClick={() => handleTabClick(list.value)}
                          className={`py-2 px-4 ${activeTab === list.value
                            ? "text-white bg-blue-600"
                            : "text-gray-700 hover:bg-gray-200"
                            } rounded-t-lg`}
                        >
                          {list.title}
                        </button>
                      ))
                }

            </div>

            {/* Tab Content */}
            <div className="p-5">
                {activeTab === "product_request" && (
                    <div>
                        <ProductReq/>
                    </div>
                )}

                {activeTab === "payment" && (
                    <div>
                        <ClientPayments/>
                    </div>
                )}

                {activeTab === "support_message" && (
                    <div>
                        <SupportMsg/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientDataTab;
