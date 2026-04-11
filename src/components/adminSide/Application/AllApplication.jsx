import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdDelete, MdPictureAsPdf } from "react-icons/md";
import ApplicationStore from "../../../api-request/admin-api/application-api";
import { deleteAlert } from "../../../helper/deleteHelperAlert";

const AllApplication = () => {
  const { getApplicationRequest, applicationList, deleteApplicationApi } = ApplicationStore();

  useEffect(() => {
    (async () => {
      await getApplicationRequest();
    })();
  }, []);

  const handleDelete = async (id) => {
    let res = await deleteAlert(id);
  };

  const showResume = (pdf) => {
    const encodedPdf = encodeURIComponent(pdf);
    window.open(`https://soft-tech-server-liart.vercel.app/files/${encodedPdf}`, '_blank', 'noreferrer');
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          All Applications
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="py-3 px-4">SL No</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Resume</th>
                <th className="py-3 px-4">Phone Number</th>
                <th className="py-3 px-4">Address</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicationList?.map((application, index) => (
                <tr
                  key={application._id}
                  className="hover:bg-gray-100 transition-colors duration-300"
                >
                  <td className="py-4 px-4 border-t">{index + 1}</td>
                  <td className="py-4 px-4 border-t">{application.fullName}</td>
                  <td className="py-4 px-4 border-t">
                    <button
                      className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center gap-2"
                      onClick={() => showResume(application.resume_link)}
                    >
                      <MdPictureAsPdf className="text-2xl" />
                      View Resume
                    </button>
                  </td>
                  <td className="py-4 px-4 border-t">{application.phoneNumber}</td>
                  <td className="py-4 px-4 border-t">{application.address}</td>
                  <td className="py-4 px-4 border-t">
                    <div className="flex space-x-4">
                      <button
                        className="text-red-600 hover:text-red-800 transition duration-300"
                        onClick={() => handleDelete(application._id)}
                      >
                        <MdDelete className="text-2xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllApplication;
