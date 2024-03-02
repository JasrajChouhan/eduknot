import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link  , useNavigate } from 'react-router-dom';




const UniversityForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('/api/login', data);
      if (response.status === 200) {
      console.log('User logged in successfully');
        alert("you are successfully logged in")
    navigate('/news');
      } else {
        console.error('Authentication failed');
        alert("enter the right information ")
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10 bg-white   ">
      <h1 className='text-2xl mt-4 mb-4  hover:backdrop-blur hover:text-indigo-900 hover:scale-150' >Log In</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full max-w-lg bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="University_mail">
            University Mail Id
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="University_mail" type="text" {...register('ABC_ACCOUNT_ID', { required: true })} />
          {errors.ABC_ACCOUNT_ID && <p className="text-red-500 text-xs italic">Enter University Mail assigned to you as a faculty</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" {...register('ENROLLMENT_NO', { required: true })} />
          {errors.ENROLLMENT_NO && <p className="text-red-500 text-xs italic">Set a Password</p>}
        </div>
        
        <div className="flex items-center justify-between">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
        </div>
        <div>
          <p>
            Don't have your university as our affilate ? <a href = "https://www.abc.gov.in/" >
            <span className='text-blue-600' >Contact us</span>
            </a>  
          </p>
        </div>
      </form>
    </div>
  );
};

export default UniversityForm;
