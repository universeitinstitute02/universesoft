import React, { useState, useEffect } from "react";
import careerStore from "../../../api-request/carrer-api/carrerApi";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteAlert } from "../../../helper/deleteHelperAlert";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ManageCareerPage = () => {
  const { careerApiDataRequest, careerDataList, careerDeleteApi } = careerStore();
  
  const { id } = useParams();
  const [careers, setCareers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      await careerApiDataRequest();
    })();
  }, []);

  const deleteService = async (id) => {
    let deleteResp = await deleteAlert(id);
    if (deleteResp.isConfirmed) {
      let resp = await careerDeleteApi(id);
      if (resp) {
        toast.success("Career delete successfully");
        await careerApiDataRequest();
      } else {
        toast.error("Career delete fail");
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Dashboard | Manage Career</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-8">Manage Careers</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">SL</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Salary</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Vacancy</th>
              <th className="py-3 px-6 text-left ml-10 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {careerDataList.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3 text-[16px]  px-6">{i + 1}</td>
                <td className="py-3 text-[16px]  px-6">{item.jobTitle}</td>
                <td className="py-3 text-[16px]  px-6">{item.salary}</td>
                <td className="py-3 text-[16px]  px-6">
                  <span className="py-1 px-3 rounded-full text-[16px] bg-green-100 text-green-800">
                    {item["workplace"]}
                  </span>
                </td>
                <td className="py-3 ml-6  px-6"> {item.vacancy} </td>
                <td className="py-3 px-6 flex space-x-3">
                  <NavLink title="update" to={`/dashboard/career-update/${item["_id"]}`}>
                    <button className="w-4 bg-text_blue outline-none border-0 hover:bg-text_hover text-white px-4 py-2 rounded-md mr-2">
                      <i className="block -ml-[6px] ">
                        <FaEdit />
                      </i>
                    </button>
                  </NavLink>

                  <NavLink to={""} title="delete">
                    <button
                      onClick={deleteService.bind(this, item["_id"])}
                      className="w-4 bg-red-500 outline-none border-0 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      <i className="block -ml-[8px] ">
                        {" "}
                        <MdDelete />{" "}
                      </i>
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ManageCareerPage;
