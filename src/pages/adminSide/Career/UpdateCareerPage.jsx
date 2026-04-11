import toast, { Toaster } from 'react-hot-toast';
import careerStore from './../../../api-request/carrer-api/carrerApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const UpdateCareerPage = () => {
  const {SingleCareerData,SingleCareerDataApi,updateCareerApi} = careerStore();
    const {id} = useParams();
    useEffect(()=>{
      (async()=>{
        await SingleCareerDataApi(id);
      })()
    },[id]);
    
    const handleSubmitValue =async (e)=>{
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const vacancy = form.vacancy.value;
        const experience = form.experience.value;
        const responsibilities = form.responsibilities.value;
        const status = form.status.value;
        const workplace = form.workplace.value;
        const workingTime = form.workingTime.value;
        const edu = form.edu.value;
        const salary = form.salary.value;
        const Benifits = form.Benifits.value;
        const skill = form.skill.value;
        const location = form.location.value;
        
        const payload = {
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
          skill,
          location,
        };
        let res = await updateCareerApi(id, payload);
      if (res) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Career updated",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        toast.error("Failed to update career");
      }
    };
  return (
    <div className="max-w-full mx-auto p-6 bg-white ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Update Career
      </h1>
      <form onSubmit={handleSubmitValue}>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
          {/* jobTitle */}
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
              defaultValue={SingleCareerData[0]?.jobTitle}
              key={Date.now()}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter job title"
              
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
              defaultValue={SingleCareerData[0]?.deadline}
              key={Date.now()}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              
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
            defaultValue={SingleCareerData[0]?.description}
            key={Date.now()}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job description"
            rows="4"
          />
        </div>
        {/* Vacancy */}
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
              defaultValue={SingleCareerData[0]?.vacancy}
              key={Date.now()}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter number of vacancies"
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
              defaultValue={SingleCareerData[0]?.experience}
              key={Date.now()}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter required experience"
              
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
            defaultValue={SingleCareerData[0]?.responsibilities}
            key={Date.now()}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job responsibilities"
            rows="4"
          />
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 ">
        {/* status */}
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
              defaultValue={SingleCareerData[0]?.status}
              key={Date.now()}
              
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter job status (e.g., Full-Time)"
              
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
              defaultValue={SingleCareerData[0]?.workplace}
              key={Date.now()}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter workplace (e.g., Office, Remote)"
              
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
              defaultValue={SingleCareerData[0]?.workingTime}
              key={Date.now()}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter working time (e.g., 9 AM - 5 PM)"
              
            />
          </div>

          {/* edu */}
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
              defaultValue={SingleCareerData[0]?.edu}
              key={Date.now()}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter educational requirements"
            />
          </div>
        </div>

        {/* Salary */}
        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 " >
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
              defaultValue={SingleCareerData[0]?.salary}
              key={Date.now()}              
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter salary details"
              
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
              key={Date.now()}
              defaultValue={SingleCareerData[0]?.Benifits}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter job benefits"
              
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
              defaultValue={SingleCareerData[0]?.skill}
              key={Date.now()}
              
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter skill  name "
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
              defaultValue={SingleCareerData[0]?.location}
              key={Date.now()}
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter company location "
            />
          </div>

        </div>


        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-text_blue text-white px-6 py-3 rounded-md hover:text-text_hover font-medium"
          >
            Update Career
          </button>
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  )
}

export default UpdateCareerPage
