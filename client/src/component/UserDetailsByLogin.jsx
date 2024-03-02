import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';
import { useNavigate } from 'react-router-dom';

const UserDetailsByLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('/api/login', data);
      if (response.status === 200) {
       // console.log('User logged in successfully');
        dispatch(setUserDetails(response.data)); // Dispatch the setUserDetails action
        alert('You are successfully logged in');
        navigate('/dashboard');
      } else {
       // console.error('Authentication failed');
        alert('Enter the right information');
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10 bg-gray-10 ">
      <h1 className='text-2xl mt-4 mb-4  hover:backdrop-blur hover:text-indigo-900 hover:scale-150' >Log In</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full max-w-lg bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
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
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UNIVERSITY_NAME" type="text" {...register('UNIVERSITY_NAME', { required: true })} />
          {errors.UNIVERSITY_NAME && <p className="text-red-500 text-xs italic">Please enter your university name</p>}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
        </div>
        <div>
          <p>
            Don't have an ABC ID ? <a href="https://www.abc.gov.in/">
              <span className='text-blue-600'>Click here to create</span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsByLogin;
