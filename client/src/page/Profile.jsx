import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';
import { SignedIn, SignedOut, useClerk } from '@clerk/clerk-react';
import Sidebar from '../component/Profile\'/Sidebar';
import Account from '../component/Profile\'/Account';

const Profile = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const { user } = useClerk();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const userDetailsFromLocalStorage = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetailsFromLocalStorage) {
          dispatch(setUserDetails(userDetailsFromLocalStorage));
        }
      } catch (error) {
        console.error('Error loading user details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserDetails();
  }, [dispatch]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (!user || !user.fullName) {
    return(
      <>     <div className = "flex ml-56" >
      <img  className = "w-[400px] relative" src='./nan.svg'  ></img>
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
</div></>
    ) ;
  }
  console.log(userDetails);
  const name = user.fullName.split(/\s/);
  return (
    <>
    <SignedIn>
      <Sidebar/>
      <Account id =  {` ${userDetails.abc}`}  env = {` ${userDetails.eno}`} user_name = {`${name[0]}`} full_name ={`${user.fullName}`} uni = {`${userDetails.university}`} />
      {/* Render user details */}
      </SignedIn>
      <SignedOut>
 
      </SignedOut>
    </>
  );
};

export default Profile;
