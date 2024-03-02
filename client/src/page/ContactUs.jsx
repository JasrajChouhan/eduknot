import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/query', formData)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        console.log(formData);
        alert("your query has been send to the  admin");
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          query: '',
        });
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div className="bg-white min-h-screen shadow-2xl">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700  px-4 py-2">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-9 border-gray-300 px-2   " placeholder='first name' />
              </div>
              <div>
                <label htmlFor="middleName" className="block text-sm font-medium text-gray-700 px-4 py-2 ">Middle Name</label>
                <input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-9 px-2" placeholder='middle name' />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 px-4 py-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-9 px-2 " placeholder='last name' />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700  px-4 py-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-9 px-2 "  placeholder='email'/>
              </div>
              <div className="col-span-2">
                <label htmlFor="query" className="block text-sm font-medium text-gray-700 px-4 py-2">Query</label>
                <textarea id="query" name="query" value={formData.query} onChange={handleChange} rows="4" className="mt-1 block w-full border-indigo-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 " placeholder='type your query....'></textarea>
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
