// src/pages/alumni/AlumniRegistration.jsx

import React, { useState } from 'react';
import AlumniPageLayout from './AlumniPageLayout';

const AlumniRegistration = () => {
  const [formData, setFormData] = useState({
    department: '',
    course: '',
    fullName: '',
    gender: 'Male',
    passingYear: '',
    dob: '',
    email: '',
    phone: '',
    mobile: '',
    currentAddress: '',
    permanentAddress: '',
    organizationDetails: '',
    securityCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    alert('Form submitted! (Frontend Only)\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <AlumniPageLayout
        title="Alumni Registration"
      subtitle="Reconnect with your alma mater. Join our alumni network!"
    >
    {/* <div className="bg-gray-50 py-12 pt-32"> */}
      {/* <div className="container mx-auto px-4"> */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">Alumni Registration</h1>
          <p className="text-lg text-gray-600 mt-2">Reconnect with your alma mater. Join our alumni network!</p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div> */}

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Department */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department*</label>
                <select id="department" name="department" value={formData.department} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required>
                  <option value="">-- Select Department --</option>
                  <option value="CSE">Computer Science & Engineering</option>
                  <option value="IT">Information Technology</option>
                  <option value="ECE">Electronics & Communication</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="CE">Civil Engineering</option>
                </select>
              </div>

              {/* Course */}
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course*</label>
                <select id="course" name="course" value={formData.course} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required>
                  <option value="">-- Select Course --</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                </select>
              </div>

              {/* Full Name */}
              <div className="md:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender*</label>
                <div className="flex items-center space-x-4">
                  <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="mr-1" /> Male</label>
                  <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="mr-1" /> Female</label>
                </div>
              </div>

              {/* Passing Year */}
              <div>
                <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700 mb-1">Passing Year*</label>
                <input type="number" id="passingYear" name="passingYear" value={formData.passingYear} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., 2020" required />
              </div>
              
              {/* Date of Birth */}
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date Of Birth*</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>

              {/* Phone & Mobile */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile*</label>
                <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>

              {/* Current Address */}
              <div className="md:col-span-2">
                <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700 mb-1">Current Address*</label>
                <textarea id="currentAddress" name="currentAddress" rows="3" value={formData.currentAddress} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required></textarea>
              </div>

              {/* Permanent Address */}
              <div className="md:col-span-2">
                <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-700 mb-1">Permanent Address</label>
                <textarea id="permanentAddress" name="permanentAddress" rows="3" value={formData.permanentAddress} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
              </div>

              {/* Organization Details */}
              <div className="md:col-span-2">
                <label htmlFor="organizationDetails" className="block text-sm font-medium text-gray-700 mb-1">Organization Details</label>
                <textarea id="organizationDetails" name="organizationDetails" rows="3" value={formData.organizationDetails} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
              </div>
              
              {/* Security Code (Captcha) */}
              <div className="md:col-span-2">
                  <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700 mb-1">Security Code*</label>
                  <div className="flex items-center gap-4">
                      {/* NOTE: This is a placeholder image. Real captcha requires a backend service. */}
                      <img src="https://i.imgur.com/k25tJ8s.png" alt="Captcha" className="rounded-md border border-gray-300 h-10" />
                      <input type="text" id="securityCode" name="securityCode" value={formData.securityCode} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Enter the code shown in the image.</p>
              </div>

            </div>

            <div className="mt-8 text-center">
              <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      {/* </div> */}
    {/* // </div> */}
    </AlumniPageLayout>
  );
};

export default AlumniRegistration;