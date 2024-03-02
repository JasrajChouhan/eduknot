import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SignInButton , SignedIn , SignedOut } from '@clerk/clerk-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserDetails } from '../store/reducers/User.reducer';

const UniversityForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('/api/universities', data);
    
      if (response.status === 201) {
        console.log('User logged in successfully');
        dispatch(setUserDetails(data))
        console.log(data);
        alert("You are successfully logged in");
         navigate('/universitydashboard');
      } else {
        console.error('Authentication failed');
        alert("Enter the right information");
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
    window.location.reload();
  };

  return (
    <>
    <SignedIn>
    <div className="flex flex-col items-center justify-center pt-10 bg-white">
      <h1 className='text-2xl mt-4 mb-4 hover:backdrop-blur hover:text-indigo-900 hover:scale-150'>Log In</h1>
      <form className="w-full max-w-lg bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* University Mail Id */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="universityEmail">
            University Mail Id
          </label>
          <input {...register("universityEmail", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="universityEmail" type="text" />
          {errors.universityEmail && <p className="text-red-500 text-xs italic">This field is required.</p>}
        </div>
        {/* University Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="universityName">
            University Name
          </label>
          <input {...register("universityName", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="universityName" type="text" />
          {errors.universityName && <p className="text-red-500 text-xs italic">This field is required.</p>}
        </div>
        {/* University ID */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="universityID">
            University ID
          </label>
          <input {...register("universityID", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="universityID" type="text" />
          {errors.universityID && <p className="text-red-500 text-xs italic">This field is required.</p>}
        </div>
        
        <div className="flex items-center justify-between">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
    </SignedIn>
    <SignedOut>
        <div className = "flex ml-56" >
        <img  className = "w-[400px] relative" src = './nan.svg'></img>
      <div class="flex items-center justify-center px-2 py-28 md:px-0">
  <div>
    <p class="text-sm font-semibold text-black">404 error</p>
    <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
      We can&#x27;t find the User
    </h1>
    <p class="mt-4 text-gray-500">
      Sorry, the page you are looking only works after signing in. Pls sign in.
      
    </p>
    <div class="mt-6 flex items-center space-x-3">
      {/* <button
        type="button"
        class="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Go back
      </button>
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Contact us
      </button> */}
    </div>
  </div>
</div>
</div>
      </SignedOut>
    </>
  );
};

export default UniversityForm;
