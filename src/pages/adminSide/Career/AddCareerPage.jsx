import React, { useEffect, useState } from "react";
import careerStore from "../../../api-request/carrer-api/carrerApi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AddCareer = () => {
  const { createCareerApi, careerApiRequest, careerDataList } = careerStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    deadline: "",
    vacancy: "",
    experience: "",
    responsibilities: "",
    status: "",
    workplace: "",
    workingTime: "",
    edu : "",
    salary: "",
    Benifits: "",
    skill : "",
    location : "",
    
  });

  const {
    jobTitle,
    description,
    deadline,
    vacancy,
    experience,
    responsibilities,
    status,
    workplace,
    workingTime,
    edu,
    salary,
    Benifits,
    location,
    skill,
  } = formData;

  const getInputValue = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitInputValue = async (e) => {
    e.preventDefault();
    let res = await createCareerApi(formData);
    if (res) {
      useNavigate("dashboard/manage-career");
      setFormData("");
      toast.success("Career create successfully");
    } else {
      return toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white ">
      <Helmet>
        <title>Dashboard | Add Career</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add Career
      </h1>
      <form onSubmit={submitInputValue}>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
          {/* Job Title */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="jobTitle"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={jobTitle}
              onChange={(e) => {
                getInputValue("jobTitle", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter job title"
              required
            />
          </div>
          {/* Deadline */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="deadline"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Application Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={deadline}
              onChange={(e) => {
                getInputValue("deadline", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => {
              getInputValue("description", e.target.value);
            }}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job description"
            rows="4"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 ">
          {/* Vacancy */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="vacancy"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Vacancy
            </label>
            <input
              type="number"
              id="vacancy"
              name="vacancy"
              value={vacancy}
              onChange={(e) => {
                getInputValue("vacancy", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter number of vacancies"
              required
            />
          </div>

          {/* Experience */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="experience"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => {
                getInputValue("experience", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter required experience"
              required
            />
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <label
            htmlFor="responsibilities"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Responsibilities
          </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={responsibilities}
            onChange={(e) => {
              getInputValue("responsibilities", e.target.value);
            }}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job responsibilities"
            rows="4"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 ">
          {/* Status */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="status"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={status}
              onChange={(e) => {
                getInputValue("status", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter job status (e.g., Full-Time)"
              required
            />
          </div>

          {/* Workplace */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="workplace"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Workplace
            </label>
            <input
              type="text"
              id="workplace"
              name="workplace"
              value={workplace}
              onChange={(e) => {
                getInputValue("workplace", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter workplace (e.g., Office, Remote)"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 ">
          {/* Working Time */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="workingTime"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Working Time
            </label>
            <input
              type="text"
              id="workingTime"
              name="workingTime"
              value={workingTime}
              onChange={(e) => {
                getInputValue("workingTime", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter working time (e.g., 9 AM - 5 PM)"
              required
            />
          </div>

          {/* Education */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="edu"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Educational Requirements
            </label>
            <input
              type="text"
              id="edu"
              name="edu"
              value={edu}
              onChange={(e) => {
                getInputValue("edu", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter educational requirements"
              required
            />
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 " >
          {/* Salary */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="salary"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={salary}
              onChange={(e) => {
                getInputValue("salary", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter salary details"
              required
            />
          </div>

          {/* Benefits */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="Benifits"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Benefits
            </label>
            <input
              type="text"
              id="Benifits"
              name="Benifits"
              value={Benifits}
              onChange={(e) => {
                getInputValue("Benifits", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter job benefits"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 " >
          {/* skill */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="skill"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Skill
            </label>
            <input
              type="text"
              id="skill"
              name="skill"
              value={skill}
              onChange={(e) => {
                getInputValue("skill", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter skill  name "
              required
            />
          </div>

          {/* location */}
          <div className="mb-4 md:w-1/2 ">
            <label
              htmlFor="location"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Company location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => {
                getInputValue("location", e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter company location "
              required
            />
          </div>

        </div>

       

        
        

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-text_blue text-white px-6 py-3 rounded-md hover:text-text_hover font-medium"
          >
            Add Career
          </button>
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  );
};

export default AddCareer;
