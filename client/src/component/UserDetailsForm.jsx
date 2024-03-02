// src/components/UserDetailsForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';


const UserDetailsForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('/api/users', data);
      console.log(response.data);
      alert("'welcome to communitiy dear learner")
      navigate('/dashboard');
      
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ABC_ACCOUNT_ID">
          ABC_ACCOUNT_ID
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ABC_ACCOUNT_ID" type="text" {...register('ABC_ACCOUNT_ID', { required: true })} />
          {errors.ABC_ACCOUNT_ID && <p className="text-red-500 text-xs italic">ABC Id</p>}
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ENROLLMENT_NO">
          ENROLLMENT_NO
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ENROLLMENT_NO" type="text" {...register('ENROLLMENT_NO', { required: true })} />
          {errors.ENROLLMENT_NO && <p className="text-red-500 text-xs italic">ENROLLMENT_NO</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="UNIVERSITY_NAME">
          UNIVERSITY_NAME
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text" {...register('UNIVERSITY_NAME', { required: true })} />
          {errors.UNIVERSITY_NAME && <p className="text-red-500 text-xs italic">Please enter your university name</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PHONE_NUMBER">
          PHONE_NUMBER 
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="PHONE_NUMBER" type="text" {...register('PHONE_NUMBER', { required: true })} />
          {errors.PHONE_NUMBER && <p className="text-red-500 text-xs italic">PHONE_NUMBER</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="GENDER">
          GENDER
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="GENDER" type="text" {...register('GENDER', { required: true })} />
          {errors.GENDER && <p className="text-red-500 text-xs italic">Please enter your gender.</p>}
        </div>

        
        <div className="flex items-center justify-between">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
        <div>
          <p>
            already have an account? <Link to='/userLoginByForm' >
            <span className='text-indigo-600' >click here</span>
            </Link>  
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsForm;
