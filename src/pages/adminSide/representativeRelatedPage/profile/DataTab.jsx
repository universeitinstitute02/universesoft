import React, { useState } from "react";
import CustomerList from "./CustomerList";
import PaymentList from "./PaymentList";
import ProductList from "./ProductList";

const DataTab = ({repClients}) => {
    const [activeTab, setActiveTab] = useState("customer");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const TabList = [
        {
            title: 'Customers',
            value: 'customer'
        },
        {
            title: 'Payments',
            value: 'payment'
        },
        {
            title: 'Selling Products',
            value: 'product'
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
                {activeTab === "customer" && (
                    <div>
                        <CustomerList repClients={repClients} />
                    </div>
                )}

                {activeTab === "payment" && (
                    <div>
                        <PaymentList/>
                    </div>
                )}

                {activeTab === "product" && (
                    <div>
                       <ProductList/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataTab;
