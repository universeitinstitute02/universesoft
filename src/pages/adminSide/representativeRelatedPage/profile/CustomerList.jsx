import React from "react";
import formatDateTime from "../../../../hooks/useDateTime";
import { Helmet } from "react-helmet-async";

const CustomerList = ({ repClients }) => {
  // Dummy customer data
 
  return (
    <div className="p-6  ">
      <Helmet>
        <title>Dashboard | Representative's Customer List</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Representative's Customer List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg text-[12px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Bussiness Type</th>
              <th className="px-4 py-2 text-left">Verified</th>

              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {
              repClients?.map((item, index) => {
                const { date, time } = formatDateTime(item.createdAt);
                return (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{item.name}</td>
                    <td className="px-4 py-2 border-b">{item.businessType}</td>
                    <td className="px-4 py-2 border-b">{item.status ? "Verified" : "Not Verified"}</td>
                    <td className="px-4 py-2 border-b">{item.phone}</td>
                    <td className="px-4 py-2 border-b">{date}</td>
                    
                  </tr>
                  )
              }
                
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
