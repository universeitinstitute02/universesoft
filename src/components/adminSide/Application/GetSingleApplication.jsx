import React from "react";
import { FaLinkedin, FaFileAlt } from 'react-icons/fa'; // Icons for LinkedIn and resume

const GetSingleApplication = () => {
  // Demo application data
  const application = {
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1-234-567-890",
    address: "1234 Elm Street, Springfield, USA",
    linkedInProfile: "https://www.linkedin.com/in/johndoe",
    portfolio: "https://johndoeportfolio.com",
    resume: "https://johndoeportfolio.com/resume.pdf",
    coverLetter: "I am very excited to apply for this role...",
    technicalSkills: ["JavaScript", "React", "Node.js", "MongoDB", "HTML", "CSS"],
    workExperience: [
      {
        jobTitle: "Full-Stack Developer",
        companyName: "Tech Corp",
        startDate: "2019-01-15",
        endDate: "2023-05-30",
        description: "Developed and maintained web applications using MERN stack.",
      },
      {
        jobTitle: "Frontend Developer",
        companyName: "Web Solutions Inc.",
        startDate: "2016-05-01",
        endDate: "2018-12-31",
        description: "Focused on UI development using React and Redux.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "Springfield University",
        graduationYear: 2015,
      },
    ],
    references: [
      {
        name: "Jane Smith",
        contactInfo: "janesmith@example.com",
        relationship: "Former Manager",
      },
    ],
    technicalAssessment: { score: 85, feedback: "Strong problem-solving skills." },
    availability: "Available immediately",
    salaryExpectations: 70000,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Application Details</h2>
      {application ? (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Applicant Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Personal Information</h3>
              <p className="text-lg">
                <strong>Full Name:</strong> {application.fullName}
              </p>
              <p className="text-lg">
                <strong>Email:</strong> {application.email}
              </p>
              <p className="text-lg">
                <strong>Phone Number:</strong> {application.phoneNumber}
              </p>
              <p className="text-lg">
                <strong>Address:</strong> {application.address || 'N/A'}
              </p>
              {application.linkedInProfile && (
                <a
                  href={application.linkedInProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn Profile
                </a>
              )}
            </div>

            {/* Application Links and Resume */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Application Details</h3>
              {application.portfolio && (
                <a
                  href={application.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaFileAlt className="mr-2" /> Portfolio
                </a>
              )}
              <a
                href={application.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaFileAlt className="mr-2" /> View Resume
              </a>
              <p className="text-lg">
                <strong>Cover Letter:</strong> {application.coverLetter || 'N/A'}
              </p>
              <p className="text-lg">
                <strong>Salary Expectations:</strong> {application.salaryExpectations ? `$${application.salaryExpectations}` : 'N/A'}
              </p>
              <p className="text-lg">
                <strong>Availability:</strong> {application.availability || 'N/A'}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Technical Skills</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {application.technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Work Experience</h3>
            {application.workExperience && application.workExperience.length > 0 ? (
              <ul className="space-y-4 mt-4">
                {application.workExperience.map((experience, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                    <p className="text-lg font-semibold">
                      {experience.jobTitle} at {experience.companyName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {new Date(experience.startDate).toLocaleDateString()} -{" "}
                      {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present"}
                    </p>
                    <p className="text-gray-700 mt-2">{experience.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No work experience provided.</p>
            )}
          </div>

          {/* Education */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            {application.education && application.education.length > 0 ? (
              <ul className="space-y-4 mt-4">
                {application.education.map((edu, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                    <p className="text-lg font-semibold">{edu.degree}</p>
                    <p className="text-sm text-gray-600">
                      {edu.institution}, Class of {edu.graduationYear}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No education information provided.</p>
            )}
          </div>

          {/* References */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">References</h3>
            {application.references && application.references.length > 0 ? (
              <ul className="space-y-4 mt-4">
                {application.references.map((reference, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                    <p className="text-lg font-semibold">{reference.name}</p>
                    <p className="text-sm text-gray-600">{reference.relationship}</p>
                    <p className="text-sm text-gray-600">Contact: {reference.contactInfo}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No references provided.</p>
            )}
          </div>
        </div>
      ) : (
        <p>No application details found.</p>
      )}
    </div>
  );
};

export default GetSingleApplication;
